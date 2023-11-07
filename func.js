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
    const resultElement = document.getElementById("result");
    const metaElement = document.getElementById("meta-info");
    let listItems = document.querySelectorAll("li");
    category  = "General";

    //meta section
    format = "";
    if (data["request"]["imp"][0]["video"] !== undefined){
        format = "Video";
    } else if (data["request"]["imp"][0]["banner"] !== undefined){
        format = "Banner";
    } else if (data["request"]["imp"][0]["native"] !== undefined){
        format = "Native";
    }
    metaElement.innerHTML = `format = ${format}`;

    //table section
    resultElement.innerHTML = "";
    

    for (item of listItems){
        attribute = item.textContent;
        let genre = ["General", "Banner", "Video", "Native", "CTV"];

        if (genre.includes(attribute)){
            category = attribute;
        } else {
            // fetch value for first 3 columns
            checked = item.querySelector("input").checked ? "Required":"Optional";
            presence = returnPresence(data, attribute)[0];
            value = returnPresence(data, attribute)[1];
            
            // color the row based on required/optional, present/absent
            if(presence == "N" && checked == "Required"){
                color = "table-danger";
            } else if (presence == "N" && checked == "Optional"){
                color = "table-warning";
            }else{
                color = "table-success";
            }

            // fill in 
            if(category == "General"){
                resultElement.innerHTML += `<tr class="${color}"><td>${category}</td>
                <td>${attribute}</td>
                <td>${checked}</td>
                <td>${presence}</td>
                <td>${value}</td>
                </tr>`;
            } else if(format == category){
                resultElement.innerHTML += `<tr class="${color}"><td>${category}</td>
                <td>${attribute}</td>
                <td>${checked}</td>
                <td>${presence}</td>
                <td>${value}</td>
                </tr>`;
            }
            
        }
    }

    function returnPresence(data, attribute){
        let presence = undefined;

        switch (attribute){
            case "imp.tagid":
                try{
                    presence = data["request"]["imp"][0]["tagid"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
            }catch{return ["N",''];}
            
            case "imp.bidfloor":
                try{
                    presence = data["request"]["imp"][0]["bidfloor"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "imp.bidfloorcur":
                try{
                    presence = data["request"]["imp"][0]["bidfloorcur"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}

            case "site.cat":
                try{
                    presence = data["request"]["site"]["cat"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "site.domain":
                try{
                    console.log(data["request"]["site"]["domain"]);
                    presence = data["request"]["site"]["domain"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "app.package_name":
                try{
                    presence = data["request"]["app"]["storeurl"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}

            case "app.cat":
                try{
                    presence = data["request"]["app"]["cat"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}

            case "device.mccmnc":
                try{    
                    presence = data["request"]["device"]["mccmnc"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "device.dnt":
                try{
                    presence = data["request"]["device"]["dnt"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}

            case "device.lmt":
                try{
                    presence = data["request"]["device"]["lmt"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            
            case "device.ifa":
                try{
                    presence = data["request"]["device"]["ifa"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            
            case "device.ip":
                try{
                    presence = data["request"]["device"]["ip"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                

            case "device.type":
                try{
                    presence = data["request"]["device"]["make"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "device.model":
                try{
                    presence = data["request"]["device"]["model"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            case "device.os":
                try{
                    presence = data["request"]["device"]["os"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "device.connectiontype":
                try{
                    presence = dat["request"]["device"]["connectiontype"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            case "device.w":
                try{
                    presence = data["request"]["device"]["w"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            
            case "device.h":
                try{
                    presence = data["request"]["device"]["h"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            
            case "device.device.language":
                try{
                    presence = data["request"]["device"]["language"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            
            case "device.js":
                try{
                    presence = data["request"]["device"]["js"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            
            case "device.ua":
                try{
                    presence = data["request"]["device"]["ua"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                

            case "device.devicetype":
                try{
                    presence = data["request"]["device"]["devicetype"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            
            case "geo.country":
                try{
                    presence = data["request"]["device"]["geo"]["country"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            
            case "geo.lat":
                try{
                    presence = data["request"]["device"]["geo"]["lat"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            
            case "geo.lon":
                try{
                    presence = data["request"]["device"]["geo"]["lon"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            
            case "geo.ipservice":
                try{
                    presence = data["request"]["device"]["geo"]["ipservice"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            case "tmax":
                try{
                    presence = data["request"]["tmax"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}

            case "bcat":
                try{
                    presence = data["request"]["bcat"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            
            case "badv":
                try{
                    presence = data["request"]["badv"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            case "source.pchain":
                try{
                    presence = data["request"]["source"]["pchain"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "source.omidpn":
                try{
                    presence = data["request"]["source"]['ext']["omidpn"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}

            case "regs.gdpr":
                try{
                    presence = data["request"]["regs"]["ext"]["gdpr"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}

            case "regs.coppa":
                try{
                    presence = data["request"]["regs"]["coppa"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            
            case "ext.us_privacy":
                try{
                    presence = data["request"]["regs"]["ext"]["us_privacy"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            case "publisher.name":
                try{
                    presence = data["request"]["publisher"]["name"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "user.consent":
                try{
                    presence = data["request"]["user"]["ext"]["consent"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            
            case "user.ext.eids":
                try{
                    presence = data["request"]["user"]["ext"]["eids"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            case "content.qagrating":
                try{
                    presence = data["request"]["app"]["content"]["qagrating"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}

            case "content.rating":
                try{
                    presence = data["request"]["app"]["content"]["userrating"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            
            case "content.length":
                try{
                    presence = data["request"]["app"]["content"]["len"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            case "content.producer.name":
                try{
                    presence = data["request"]["app"]["content"]["producer"]["name"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "metric":
                try{
                    presence = data["request"]["imp"][0]["metric"];
                    presence = JSON.stringify(presence);
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            //video
            case "maxbitrate":
                try{
                    presence = data["request"]["imp"][0]["video"]["maxbitrate"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            case "protocols":
                try{
                    presence = data["request"]["imp"][0]["video"]["protocols"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "mimes":
                try{
                    presence = data["request"]["imp"][0]["video"]["mimes"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            case "maxduration":
                try{
                    presence = data["request"]["imp"][0]["video"]["maxduration"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "playbackmethod":
                try{
                    presence = data["request"]["imp"][0]["video"]["playbackmethod"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            case "placement":
                try{
                    presence = data["request"]["imp"][0]["video"]["placement"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "linearity":
                try{
                    presence = data["request"]["imp"][0]["video"]["linearity"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
        
            case "skip":
                try{
                    presence = data["request"]["imp"][0]["video"]["skip"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            case "skipafter":
                try{
                    presence = data["request"]["imp"][0]["video"]["skipafter"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "playbackend":
                try{
                    presence = data["request"]["imp"][0]["video"]["playbackend"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            case "min duration":
                try{
                    presence = data["request"]["imp"][0]["video"]["minduration"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            //Banner
            case "imp.ext":
                try{
                    presence = data["request"]["imp"][0]["ext"];
                    presence = JSON.stringify(presence);
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "exp":
                try{
                    presence = data["request"]["imp"][0]["banner"]["expdir"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
                
            case "mimes":
                try{
                    presence = data["request"]["imp"][0]["banner"]["mimes"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "topframe":
                try{
                    presence = data["request"]["imp"][0]["banner"]["topframe"];
                    presence = JSON.stringify(presence);
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "pos":
                try{
                    presence = data["request"]["imp"][0]["banner"]["pos"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "api":
                try{
                    presence = data["request"]["imp"][0]["banner"]["api"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}

            //native
            case "native.privacy":
                try{
                    presence = JSON.parse(data["request"]["imp"][0]["native"]['request']);
                    presence = presence["privacy"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "plcmttype":
                try{
                    presence = JSON.parse(data["request"]["imp"][0]["native"]['request']);
                    presence = presence["plcmttype"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}

            case "native.eventtrackers":
                try{
                    presence = JSON.parse(data["request"]["imp"][0]["native"]['request']);
                    presence = JSON.stringify(presence["eventtrackers"]);
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            
            case "context":
                try{
                    presence = JSON.parse(data["request"]["imp"][0]["native"]['request']);
                    presence = presence["context"];
                    return presence !== undefined ? ["Y",presence] : ["N",""];
                }catch{return ["N",''];}
            

            default:
                return ["N",''];
            
        }
        
    }
}


