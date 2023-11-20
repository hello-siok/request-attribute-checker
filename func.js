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
    // 4. completion score

    /// 1. get format
    format = "";
    if (data["request"]["imp"][0]["video"] !== undefined){
        format = "Video";
    } else if (data["request"]["imp"][0]["banner"] !== undefined){
        format = "Banner";
    } else if (data["request"]["imp"][0]["native"] !== undefined){
        format = "Native";
    } else if (data["request"]["imp"][0]["audio"] !== undefined){
        format = "Audio";
    }

    /// 2. website or app
    var websiteOrApp = (data["request"]["app"] !== undefined)? "app" : "website";
    var os = data["request"]?.["device"]?.['os'] ?? "undefined";
    var country = data["request"]?.["device"]?.['geo']?.['country'] ?? "undefined";

    metaElement.innerHTML = `<span class="badge bg-dark">Format = ${format}; Environment = ${websiteOrApp}; OS = ${os}; country= ${country}</span> `;

    /// schain
    var schainComplete = data["request"]?.["source"]?.["ext"]?.["schain"]?.["complete"] ?? "no schain";
    var schainLength = data["request"]?.["source"]?.["ext"]?.["schain"]?.["nodes"] ?? [];
    schainLength = schainLength.length;
    var schainColor = (schainLength <= 2) ? "success":"danger";

    metaElement.innerHTML += `<span class="badge bg-${schainColor}">[schain] complete = ${schainComplete}; length = ${schainLength}</span> `;

    /// regs
    var coppa = data["request"]?.["regs"]?.['coppa'] ?? 0;
    var coppaColor = (coppa == 0) ? "success" : "danger";
    metaElement.innerHTML += `<span class="badge bg-${coppaColor}">COPPA = ${coppa}</span> `;

    //// CCPA
    if (country == "USA"){
        var ccpa = data["request"]?.["regs"]?.['ext']?.['us_privacy'] ?? "no CCPA string found";

        metaElement.innerHTML += `<span class="badge bg-warning">CCPA = ${ccpa}</span> `;
    }

    /// EU GDPR
    var euCountry = ["AUT","BEL","BGR","HRV","CYP","CZE", "DNK","EST","FIN","FRA","DEU","GRC","HUN","IRL","ITA","LVA","LTU","LUX","MLT","NLD","POL","PRT","ROU","SVK","SVN","ESP","SWE","GBR"];
    if (euCountry.includes(country)){
        //2.6 - Regs.gdpr | 2.5 below - Regs.ext.gdpr
        var gdprApplicable = data['request']?.['regs']?.['ext']?.['gdpr'] ?? (data['request']?.['regs']?.['gdpr'] ?? "");
        // 2.6 - User.consent | 2.5 below - User.ext.consent
        var gdprConsentString = data['request']?.['user']?.['ext']?.['consent'] ?? (data['request']?.['user']?.['consent'] ?? "");

        metaElement.innerHTML += `<span class="badge bg-warning">GDPR applicable = ${gdprApplicable}; GDPR consent string = ${gdprConsentString}</span> `;
    }

    //SKAN
    if (os == "iOS"){
        var skanIdLen = data['request']?.['imp']?.['ext']?.['skadn']?.["skadnetids"] ?? [];
        skanIdLen = skanIdLen.length;
        var skColor = (skanIdLen > 0) ? "success" : "danger";

        metaElement.innerHTML += `<span class="badge bg-${skColor}">[iOS] SKadnetwork ID count = ${skanIdLen}</span> `;
    }

    /// 3. declare parameter to calculate score
    countRequired = 0;
    countRequiredPresence = 0;

    //update table section
    table.innerHTML = "";

    jason = getJason(data);
    for(row of jason){
        parent    = row["parent"]
        attribute = row["attribute"]
        required  = row["Required"] == 1 ? "Y" : "N";
        value     = row["location"];
        presence  = (value === "") ? "N" : "Y";

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

        if((required == "Y" || presence == "Y") && (catStatus == format || catStatus == "General") && (parent != doNotAddCounterpart)){
            table.innerHTML += `<tr class="${color}">
                <td>${parent}</td>
                <td>${attribute}</td>
                <td>${required}</td>
                <td>${presence}</td>
                <td>${typeof(value) === 'object' ? JSON.stringify(value): value}</td>
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