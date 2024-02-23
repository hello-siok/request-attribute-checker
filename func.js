function readInputAsJSON() {
    const jsonInput = document.getElementById("jsonInput").value;
    try {
        const jsonObject = JSON.parse(jsonInput);
        displayResult(jsonObject);
    } catch (error) {
        displayResult({ error: "Invalid JSON input" });
    }
}

function displayResult(data) {
    //<div id="meta-info"></div>
    const metaElement = document.getElementById("meta-info");
    // <tbody id="result">
    const table = document.getElementById("result"); 

    //update meta information - 1. ad format 2. web/app , os, country
    // 3. regs status (coppa, gdpr, ccpa)
    // SKadnetwork
    // video instream/outstream
    // 4. completion score

    // 23 Nov - fix error data["request"] vs data 
    if (data["request"] !== undefined){
        data = data["request"];
    }

    if((data["imp"] && data["imp"].length > 0) ){
        imp = data["imp"][0];
    }

    /// 1. get format
    format = "";
    if (imp["video"] !== undefined){
        format = "Video";
    } else if (imp["banner"] !== undefined){
        format = "Banner";
    } else if (imp["native"] !== undefined){
        format = "Native";
    } else if (imp["audio"] !== undefined){
        format = "Audio";
    }

    /// 2. website or app
    var websiteOrApp = (data["app"] !== undefined)? "app" : "website";
    var os = data?.["device"]?.['os'] ?? "undefined";
    var country = data?.["device"]?.['geo']?.['country'] ?? "undefined";

    metaElement.innerHTML = `<span class="badge text-bg-light">Format = ${format}; Environment = ${websiteOrApp}; OS = ${os}; country= ${country}</span> `;

    //video instream vs outstream
    //instream - sound on vs outstream - sound off
    if(format == "Video"){
        var instreamOrOutstream = imp["video"]?.['placement'] == 1 ? "in-stream" : "out-stream";
        var soundOn = [1,3,4,5].includes(imp["video"]?.['playbackmethod']?.[0]) ? "soundOn" : "soundOff";
        var streamColor = ((instreamOrOutstream == "in-stream" && soundOn == "soundOn") || (instreamOrOutstream == "out-stream" && soundOn == "soundOff")) ? "success" : "danger";

        metaElement.innerHTML += `<span class="badge bg-${streamColor}">[Video] ${instreamOrOutstream}, ${soundOn}</span> `;

        // PUBMATIC requirement: if video is in-stream, must come with parameters:
        // * need video playback method
        // * player size
        if(instreamOrOutstream == "in-stream"){
            var playBack = imp["video"]?.['playbackmethod'];
            var playerSizeHeight = imp["video"]?.['h'];
            var playerSizeWidth = imp["video"]?.['w'];

            if(playBack == undefined || playerSizeHeight == undefined || playerSizeWidth == undefined){
                metaElement.innerHTML += `<span class="badge bg-danger">[Video] In-stream video shall add: 
                ${playBack == undefined ? "playbackmethod, ": ""}
                ${playerSizeHeight == undefined ? "video.h, ": ""}
                ${playerSizeWidth == undefined ? "video.w ": ""}</span> `;
            }
        }
    }



    /// schain
    var schainComplete = data?.["source"]?.["ext"]?.["schain"]?.["complete"] ?? "no schain";
    var schainLength = data?.["source"]?.["ext"]?.["schain"]?.["nodes"] ?? [];
    schainLength = schainLength.length;
    var schainColor = (schainLength <= 2) ? "success":"danger";

    metaElement.innerHTML += `<span class="badge bg-${schainColor}">[schain] complete = ${schainComplete}; length = ${schainLength}</span> `;

    /// regs
    var coppa = data?.["regs"]?.['coppa'] ?? 0;
    var coppaColor = (coppa == 0) ? "success" : "danger";
    metaElement.innerHTML += `<span class="badge bg-${coppaColor}">COPPA = ${coppa}</span> `;

    //// CCPA
    if (country == "USA"){
        var ccpa = data?.["regs"]?.['ext']?.['us_privacy'] ?? "no CCPA string found";

        metaElement.innerHTML += `<span class="badge bg-warning">CCPA = ${ccpa}</span> `;
    }

    /// EU GDPR
    var euCountry = ["AUT","BEL","BGR","HRV","CYP","CZE", "DNK","EST","FIN","FRA","DEU","GRC","HUN","IRL","ITA","LVA","LTU","LUX","MLT","NLD","POL","PRT","ROU","SVK","SVN","ESP","SWE","GBR","AT","BE","BG","HR","CY","CZ","DK","EE","FI","FR","DE","GR","HU","IS","IE","IT","LV","LT","LU","MT","NL","NO","PL","PT","RO","SK","SI","ES","SE","CH","GB"];
    if (euCountry.includes(country)){
        //2.6 - Regs.gdpr | 2.5 below - Regs.ext.gdpr
        var gdprApplicable = data?.['regs']?.['ext']?.['gdpr'] ?? (data?.['regs']?.['gdpr'] ?? "");
        // 2.6 - User.consent | 2.5 below - User.ext.consent
        var gdprConsentString = data?.['user']?.['ext']?.['consent'] ?? (data?.['user']?.['consent'] ?? "");

        metaElement.innerHTML += `<span class="badge text-bg-light">GDPR applicable = ${gdprApplicable}; GDPR consent string = ${gdprConsentString}</span> `;
    }

    //SKAN
    if (os == "iOS"){
        var skanIdLen = data?.['imp'][0]?.['ext']?.['skadn']?.["skadnetids"] ?? [];
        skanIdLen = skanIdLen.length;
        var skColor = (skanIdLen > 0) ? "success" : "danger";

        metaElement.innerHTML += `<span class="badge bg-${skColor}">[iOS] SKadnetwork ID count = ${skanIdLen}</span> `;
    }

    /// 3. declare parameter to calculate score
    countRequired = 0;
    countRequiredPresence = 0;

    //update table section
    table.innerHTML = "";

    jason = getJason(data, imp);
    for(row of jason){
        parent    = row["parent"];
        attribute = row["attribute"];
        className = row["id"];
        required  = document.getElementsByClassName(className)[0].checked ? "Y":"N";
        value     = row["location"];
        presence  = (value === "") ? "N" : "Y";
        recommendedValue = row["RecommendedValue"];
        missingValue = "";

        // add to table if either: 
        // (1) required (regardless of whether there is value); 
        // (2) optional (only when there is value)
        // (3) app/wesbite
        // (4) General + specific to the format

        // get Category
        catStatus = ["Banner", "Video", "Native", "Audio"].includes(parent);
        catStatus = catStatus ? parent: "General";

        // add correct website vs app section
        doNotAddCounterpart = (websiteOrApp == "app") ? "Site (for website)" :  "App (for app)";


        // get Color
        if(presence == "N" && required == "Y"){
            color = "table-danger";
        } else if (presence == "N" && required == "N"){
            color = "table-warning";
        }else{
            color = "table-success";
        }

        //check missing recommended value
        if (recommendedValue != ""){
            if(Array.isArray(value)){
                missingValue = recommendedValue.filter(item => !value.includes(item));
            }
        }

        // add to table
        if((required == "Y" || presence == "Y") && (catStatus == format || catStatus == "General") && (parent != doNotAddCounterpart)){
            table.innerHTML += `<tr class="${color}">
                <td>${parent}</td>
                <td>${attribute}</td>
                <td>${required}</td>
                <td>${presence}</td>
                <td>${typeof(value) === 'object' ? JSON.stringify(value): value}</td>
                <td>${missingValue}</td>
                </tr>`;
        }

        //calculate completion score
        if(required == "Y" && (catStatus == format || catStatus == "General") && (parent != doNotAddCounterpart)){
            countRequired += 1;
            if (presence == "Y"){
                countRequiredPresence += 1;
            }
        }
    }

    score = countRequiredPresence/countRequired * 100;
    score = score.toFixed(2);
    var scoreColor = (score > 50) ? (score > 80 ?"success":"warning"): "danger";
    metaElement.innerHTML += `<br><span class="badge bg-${scoreColor}">Required Attribute Completion Score = ${score}%</span>`;
    
}