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
    metaElement.innerHTML = `format = ${format}`;

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

        if(required == "Y" || presence == "Y"){
            table.innerHTML += `<tr class="${color}">
                <td>${catStatus}</td>
                <td>${parent}</td>
                <td>${attribute}</td>
                <td>${required}</td>
                <td>${presence}</td>
                <td>${typeof(value) === 'object' ? JSON.stringify(value): value}</td>
                </tr>`;
        }
    }
    
}