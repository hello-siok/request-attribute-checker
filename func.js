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

    //update meta information 
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
    metaElement.innerHTML = `<span class="badge bg-secondary">format = ${format} </span> `;

    // declare parameter to calculate score
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

        // get Category
        catStatus = ["Banner", "Video", "Native", "Audio"].includes(parent);
        catStatus = catStatus ? parent: "General";

        // get Color
        if(presence == "N" && required == "Y"){
            color = "table-danger";
        } else if (presence == "N" && required == "N"){
            color = "table-warning";
        }else{
            color = "table-success";
        }

        if((required == "Y" || presence == "Y") && (catStatus == format || catStatus == "General")){
            table.innerHTML += `<tr class="${color}">
                <td>${parent}</td>
                <td>${attribute}</td>
                <td>${required}</td>
                <td>${presence}</td>
                <td>${typeof(value) === 'object' ? JSON.stringify(value): value}</td>
                </tr>`;
        }

        //calculate completion score
        if(required == "Y" && (catStatus == format || catStatus == "General")){
            countRequired += 1;
            if (presence == "Y"){
                countRequiredPresence += 1;
            }
        }
    }

    score = countRequiredPresence/countRequired * 100;
    score = score.toFixed(2);
    metaElement.innerHTML += `<span class="badge bg-primary">Required Attribute Completion Score = ${score}%</span>`;
    
}