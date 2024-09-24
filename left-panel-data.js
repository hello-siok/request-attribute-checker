//var data = data || {};

function getJason(data, imp){
  var jason = [
    {
      "parent": "BidRequest",
      "attribute": "tmax",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "tmax",
      "location": data?.['tmax'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "bcat",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "bcat",
      "location": data?.['bcat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "badv",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "badv",
      "location": data?.['badv'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "bapp",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "bapp",
      "location": data?.['bapp'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "wlang",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "wlang",
      "location": data?.['wlang'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "wlangb",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "wlangb",
      "location": data?.['wlangb'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "wseat",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "wseat",
      "location": data?.['wseat '] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "bseat",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "bseat",
      "location": data?.['bseat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "cur",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "cur",
      "location": data?.['cur'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "ext",
      "location": data?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "cattax",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "cattax",
      "location": data?.['cattax'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "tagid",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "tagid",
      "location": imp?.['tagid'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "bidfloor",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "bidfloor",
      "location": imp?.['bidfloor'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "bidfloorcur",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "bidfloorcur",
      "location": imp?.['bidfloorcur'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "metric",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "metric",
      "location": imp?.['metric'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "pmp",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "pmp",
      "location": imp?.['pmp'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "displaymanager",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "displaymanager",
      "location": imp?.['displaymanager'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "displaymanagerver",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "displaymanagerver",
      "location": imp?.['displaymanagerver'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "instl",
      "Required": 1,
      "Visibility": 1,
      "Important": 1,
      "id": "instl",
      "location": imp?.['instl'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "clickbrowser",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "clickbrowser",
      "location": imp?.['clickbrowser'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "secure",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "secure",
      "location": imp?.['secure'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "iframebuster",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "iframebuster",
      "location": imp?.['iframebuster'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "exp",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "exp",
      "location": imp?.['exp'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "ext",
      "location": imp?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "cat",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "site-cat",
      "location": data?.['site']?.['cat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "domain",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "site-domain",
      "location": data?.['site']?.['domain'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "name",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "site-name",
      "location": data?.['site']?.['name'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "sectioncat",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "site-sectioncat",
      "location": data?.['site']?.['sectioncat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "pagecat",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "site-pagecat",
      "location": data?.['site']?.['pagecat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "page",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "site-page",
      "location": data?.['site']?.['page'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "ref",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "site-ref",
      "location": data?.['site']?.['ref'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "search",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "site-search",
      "location": data?.['site']?.['search'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "mobile",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "site-mobile",
      "location": data?.['site']?.['mobile'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "privacypolicy",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "site-privacypolicy",
      "location": data?.['site']?.['privacypolicy'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "publisher",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "site-publisher",
      "location": data?.['site']?.['publisher'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "keywords",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "site-keywords",
      "location": data?.['site']?.['keywords'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "site-ext",
      "location": data?.['site']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "cat",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "app-cat",
      "location": data?.['app']?.['cat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "domain",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "app-domain",
      "location": data?.['app']?.['domain'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "storeurl",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "app-storeurl",
      "location": data?.['app']?.['storeurl'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "ver",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "app-ver",
      "location": data?.['app']?.['ver'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "bundle",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "app-bundle",
      "location": data?.['app']?.['bundle'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "kwarray",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "app-kwarray",
      "location": data?.['app']?.['kwarray'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "cattax",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "app-cattax",
      "location": data?.['app']?.['cattax'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "app-ext",
      "location": data?.['app']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "name",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "app-name",
      "location": data?.['app']?.['name'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "sectioncat",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "app-sectioncat",
      "location": data?.['app']?.['sectioncat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "pagecat",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "app-pagecat",
      "location": data?.['app']?.['pagecat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "privacypolicy",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "app-privacypolicy",
      "location": data?.['app']?.['privacypolicy'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "paid",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "app-paid",
      "location": data?.['app']?.['paid'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "publisher",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "app-publisher",
      "location": data?.['app']?.['publisher'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "keywords",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "app-keywords",
      "location": data?.['app']?.['keywords'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "app-ext",
      "location": data?.['app']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ifa",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-ifa",
      "location": data?.['device']?.['ifa'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ua",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-ua",
      "location": data?.['device']?.['ua'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "sua",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "device-sua",
      "location": data?.['device']?.['sua'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "dnt",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-dnt",
      "location": data?.['device']?.['dnt'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "lmt",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-lmt",
      "location": data?.['device']?.['lmt'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ip",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-ip",
      "location": data?.['device']?.['ip'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ipv6",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "device-ipv6",
      "location": data?.['device']?.['ipv6'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "mccmnc",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-mccmnc",
      "location": data?.['device']?.['mccmnc'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "type",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-type",
      "location": data?.['device']?.['type'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "model",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-model",
      "location": data?.['device']?.['model'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "make",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "device-make",
      "location": data?.['device']?.['make'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "os",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-os",
      "location": data?.['device']?.['os'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "osv",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "device-osv",
      "location": data?.['device']?.['osv'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "hwv",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-hwv",
      "location": data?.['device']?.['hwv'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "connectiontype",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-connectiontype",
      "location": data?.['device']?.['connectiontype'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "w",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-w",
      "location": data?.['device']?.['w'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "h",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-h",
      "location": data?.['device']?.['h'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "language",
      "Required": 1,
      "Visibility": 1,
      "Important": 1,
      "id": "device-language",
      "location": data?.['device']?.['language'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "langb",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "device-langb",
      "location": data?.['device']?.['langb'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "js",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-js",
      "location": data?.['device']?.['js'] ?? '',
      "RecommendedValue": 1
    },
    {
      "parent": "Device",
      "attribute": "devicetype",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "device-devicetype",
      "location": data?.['device']?.['devicetype'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "didsha1",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "device-didsha1",
      "location": data?.['device']?.['didsha1'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "didmd5",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "device-didmd5",
      "location": data?.['device']?.['didmd5'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "dpidsha1",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "device-dpidsha1",
      "location": data?.['device']?.['dpidsha1'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "dpidmd5",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "device-dpidmd5",
      "location": data?.['device']?.['dpidmd5'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "macsha1",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "device-macsha1",
      "location": data?.['device']?.['macsha1'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "macmd5",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "device-macmd5",
      "location": data?.['device']?.['macmd5'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "device-ext",
      "location": data?.['device']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ppi",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "device-ppi",
      "location": data?.['device']?.['ppi'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "pxratio",
      "Required": 1,
      "Visibility": 1,
      "Important": 1,
      "id": "device-pxratio",
      "location": data?.['device']?.['pxratio'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "geofetch",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "device-geofetch",
      "location": data?.['device']?.['geofetch'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "flashver",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "device-flashver",
      "location": data?.['device']?.['flashver'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "carrier",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "device-carrier",
      "location": data?.['device']?.['carrier'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "country",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "geo-country",
      "location": data?.['device']?.['geo']?.['country'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "lat",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "geo-lat",
      "location": data?.['device']?.['geo']?.['lat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "lon",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "geo-lon",
      "location": data?.['device']?.['geo']?.['lon'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "ipservice",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "geo-ipservice",
      "location": data?.['device']?.['geo']?.['ipservice'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "type",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "geo-type",
      "location": data?.['device']?.['geo']?.['type'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "accuracy",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "geo-accuracy",
      "location": data?.['device']?.['geo']?.['accuracy'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "lastfix",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "geo-lastfix",
      "location": data?.['device']?.['geo']?.['lastfix'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "region",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "geo-region",
      "location": data?.['device']?.['geo']?.['region'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "regionfips104",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "geo-regionfips104",
      "location": data?.['device']?.['geo']?.['regionfips104'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "metro",
      "Required": 1,
      "Visibility": 1,
      "Important": 1,
      "id": "geo-metro",
      "location": data?.['device']?.['geo']?.['metro'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "city",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "geo-city",
      "location": data?.['device']?.['geo']?.['city'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "zip",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "geo-zip",
      "location": data?.['device']?.['geo']?.['zip'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "utcoffset",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "geo-utcoffset",
      "location": data?.['device']?.['geo']?.['utcoffset'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "geo-ext",
      "location": data?.['device']?.['geo']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "rwdd",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "video-rwdd",
      "location": (imp?.['video']?.['rwdd'] ?? imp?.['video']?.['ext']?.['rwdd']) ?? ''
    },
    {
      "parent": "Video",
      "attribute": "mimes",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "video-mimes",
      "location": imp?.['video']?.['mimes'] ?? '',
      "RecommendedValue": ["video/mp4","application/x-mpegurl","video/3gpp","video/x-flv"]
    },
    {
      "parent": "Video",
      "attribute": "minduration",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "video-minduration",
      "location": imp?.['video']?.['minduration'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "maxduration",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "video-maxduration",
      "location": imp?.['video']?.['maxduration'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "protocol",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-protocol",
      "location": imp?.['video']?.['protocol'] ?? '',
      "RecommendedValue": [2,3,5,6]
    },
    {
      "parent": "Video",
      "attribute": "protocols",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "video-protocols",
      "location": imp?.['video']?.['protocols'] ?? '',
      "RecommendedValue": [2,3,5,6]
    },
    {
      "parent": "Video",
      "attribute": "w",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-w",
      "location": imp?.['video']?.['w'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "h",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-h",
      "location": imp?.['video']?.['h'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "startdelay",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-startdelay",
      "location": imp?.['video']?.['startdelay'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "placement",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "video-placement",
      "location": imp?.['video']?.['placement'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "linearity",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "video-linearity",
      "location": imp?.['video']?.['linearity'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "skip",
      "Required": 1,
      "Visibility": 1,
      "Important": 1,
      "id": "video-skip",
      "location": imp?.['video']?.['skip'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "skipmin",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-skipmin",
      "location": imp?.['video']?.['skipmin'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "skipafter",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "video-skipafter",
      "location": imp?.['video']?.['skipafter'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "sequence",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-sequence",
      "location": imp?.['video']?.['sequence'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "battr",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-battr",
      "location": imp?.['video']?.['battr'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "maxextended",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-maxextended",
      "location": imp?.['video']?.['maxextended'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "minbitrate",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-minbitrate",
      "location": imp?.['video']?.['minbitrate'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "maxbitrate",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "video-maxbitrate",
      "location": imp?.['video']?.['maxbitrate'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "boxingallowed",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-boxingallowed",
      "location": imp?.['video']?.['boxingallowed'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "playbackmethod",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "video-playbackmethod",
      "location": imp?.['video']?.['playbackmethod'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "playbackend",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "video-playbackend",
      "location": imp?.['video']?.['playbackend'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "delivery",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-delivery",
      "location": imp?.['video']?.['delivery'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "pos",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-pos",
      "location": imp?.['video']?.['pos'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "companionad",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-companionad",
      "location": imp?.['video']?.['companionad'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "api",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-api",
      "location": imp?.['video']?.['api'] ?? '',
      "RecommendedValue": [3,5,6,7]
    },
    {
      "parent": "Video",
      "attribute": "companiontype",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-companiontype",
      "location": imp?.['video']?.['companiontype'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "video-ext",
      "location": imp?.['video']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "rewarded",
      "Required": 1,
      "Visibility": 1,
      "Important": 1,
      "id": "video-ext-rewarded",
      "location": imp?.['video']?.['ext']?.['rewarded'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "format",
      "Required": 1,
      "Visibility": 1,
      "Important": 1,
      "id": "banner-format",
      "location": imp?.['banner']?.['format'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "w",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "banner-w",
      "location": imp?.['banner']?.['w'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "h",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "banner-h",
      "location": imp?.['banner']?.['h'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "btype",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "banner-btype",
      "location": imp?.['banner']?.['btype'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "battr",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "banner-battr",
      "location": imp?.['banner']?.['battr'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "pos",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "banner-pos",
      "location": imp?.['banner']?.['pos'] ?? '',
      "RecommendedValue": 7
    },
    {
      "parent": "Banner",
      "attribute": "mimes",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "banner-mimes",
      "location": imp?.['banner']?.['mimes'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "topframe",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "banner-topframe",
      "location": imp?.['banner']?.['topframe'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "expdir",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "banner-expdir",
      "location": imp?.['banner']?.['expdir'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "api",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "banner-api",
      "location": imp?.['banner']?.['api'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "banner-ext",
      "location": imp?.['banner']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "vcm",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "banner-vcm",
      "location": imp?.['banner']?.['vcm'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "request",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "native-request",
      "location": imp?.['native']?.['request'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "ver",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "native-ver",
      "location": imp?.['native']?.['ver'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "api",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "native-api",
      "location": imp?.['native']?.['api'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "battr",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "native-battr",
      "location": imp?.['native']?.['battr'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "ext",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "native-ext",
      "location": imp?.['native']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "privacy",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "native-privacy",
      "location": imp?.['native']?.['request'] != undefined ? (JSON.parse(imp?.['native']?.['request'])?.['privacy'] ?? '') : '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "plcmttype",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "native-plcmttype",
      "location": imp?.['native']?.['request'] != undefined ? (JSON.parse(imp?.['native']?.['request'])?.['plcmttype'] ?? '') : '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "eventtrackers",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "native-eventtrackers",
      "location": imp?.['native']?.['request'] != undefined ? (JSON.parse(imp?.['native']?.['request'])?.['eventtrackers'] ?? '') : '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "context",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "native-context",
      "location": imp?.['native']?.['request'] != undefined ? (JSON.parse(imp?.['native']?.['request'])?.['context'] ?? '') : '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "mimes",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-mimes",
      "location": imp?.['audio']?.['mimes'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "minduration",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-minduration",
      "location": imp?.['audio']?.['minduration'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "maxduration",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-maxduration",
      "location": imp?.['audio']?.['maxduration'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "protocols",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-protocols",
      "location": imp?.['audio']?.['protocols'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "startdelay",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "audio-startdelay",
      "location": imp?.['audio']?.['startdelay'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "sequence",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-sequence",
      "location": imp?.['audio']?.['sequence'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "battr",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-battr",
      "location": imp?.['audio']?.['battr'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "maxextended",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-maxextended",
      "location": imp?.['audio']?.['maxextended'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "minbitrate",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-minbitrate",
      "location": imp?.['audio']?.['minbitrate'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "maxbitrate",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-maxbitrate",
      "location": imp?.['audio']?.['maxbitrate'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "delivery",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-delivery",
      "location": imp?.['audio']?.['delivery'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "companionad",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-companionad",
      "location": imp?.['audio']?.['companionad'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "api",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-api",
      "location": imp?.['audio']?.['api'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "companiontype",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-companiontype",
      "location": imp?.['audio']?.['companiontype'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "maxseq",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-maxseq",
      "location": imp?.['audio']?.['maxseq'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "feed",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-feed",
      "location": imp?.['audio']?.['feed'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "stitched",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-stitched",
      "location": imp?.['audio']?.['stitched'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "nvol",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "audio-nvol",
      "location": imp?.['audio']?.['nvol'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "audio-ext",
      "location": imp?.['audio']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "poddur",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "audio-poddur",
      "location": imp?.['audio']?.['poddur'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "rqddurs",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "audio-rqddurs",
      "location": imp?.['audio']?.['rqddurs'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "podid",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "audio-podid",
      "location": imp?.['audio']?.['podid'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "podseq",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "audio-podseq",
      "location": imp?.['audio']?.['podseq'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "slotinpod",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "audio-slotinpod",
      "location": imp?.['audio']?.['slotinpod'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "mincpmpersec",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "audio-mincpmpersec",
      "location": imp?.['audio']?.['mincpmpersec'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "id",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "user-id",
      "location": data?.['user']?.['id'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "sessionduration",
      "Required": 1,
      "Visibility": 1,
      "Important": 1,
      "id": "user-sessionduration",
      "location": data?.['user']?.['ext']?.['sessionduration'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "buyeruid",
      "Required": 1,
      "Visibility": 1,
      "Important": 1,
      "id": "user-buyeruid",
      "location": data?.['user']?.['buyeruid'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "yob",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "user-yob",
      "location": data?.['user']?.['yob'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "gender",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "user-gender",
      "location": data?.['user']?.['gender'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "consent",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "user-consent",
      "location": data?.['user']?.['consent'] ?? (data?.['user']?.['ext']?.['consent'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "keywords",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "user-keywords",
      "location": data?.['user']?.['keywords'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "customdata",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "user-customdata",
      "location": data?.['user']?.['customdata'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "geo",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "user-geo",
      "location": data?.['user']?.['geo'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "data",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "user-data",
      "location": data?.['user']?.['data'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "ext.eids",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "user-ext-eids",
      "location": data?.['user']?.['ext']?.['eids'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Source",
      "attribute": "fd",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "source-fd",
      "location": data?.['source']?.['fd'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Source",
      "attribute": "tid",
      "Required": 0,
      "Visibility": 0,
      "Important": 0,
      "id": "source-tid",
      "location": data?.['source']?.['tid'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Source",
      "attribute": "pchain",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "source-pchain",
      "location": data?.['source']?.['pchain'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Source",
      "attribute": "omidpn",
      "Required": 1,
      "Visibility": 1,
      "Important": 1,
      "id": "source-omidpn",
      "location": data?.['source']?.['ext']?.['omidpn'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Source",
      "attribute": "omidpv",
      "Required": 1,
      "Visibility": 1,
      "Important": 1,
      "id": "source-omidpv",
      "location": data?.['source']?.['ext']?.['omidpv'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Regs",
      "attribute": "gdpr",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "regs-gdpr",
      "location": data?.['regs']?.['ext']?.['gdpr'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Regs",
      "attribute": "coppa",
      "Required": 1,
      "Visibility": 1,
      "Important": 0,
      "id": "regs-coppa",
      "location": data?.['regs']?.['coppa'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Regs",
      "attribute": "us_privacy (only for US traffic)",
      "Required": 1,
      "Visibility": 1,
      "Important": 1,
      "id": "regs-us_privacy",
      "location": data?.['regs']?.['ext']?.['us_privacy'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Regs",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "regs-ext",
      "location": data?.['regs']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "id",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-id",
      "location": data?.['site']?.['id'] ?? (data?.['app']?.['id'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "artist",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-artist",
      "location": data?.['site']?.['artist'] ?? (data?.['app']?.['artist'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "album",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-album",
      "location": data?.['site']?.['album'] ?? (data?.['app']?.['album'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "episode",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-episode",
      "location": data?.['site']?.['episode'] ?? (data?.['app']?.['episode'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "genre",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-genre",
      "location": data?.['site']?.['genre'] ?? (data?.['app']?.['genre'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "isrc",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-isrc",
      "location": data?.['site']?.['isrc'] ?? (data?.['app']?.['isrc'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "producer",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-producer",
      "location": data?.['site']?.['producer'] ?? (data?.['app']?.['producer'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "url",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-url",
      "location": data?.['site']?.['url'] ?? (data?.['app']?.['url'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "cat",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-cat",
      "location": data?.['site']?.['cat'] ?? (data?.['app']?.['cat'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "cattax",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-cattax",
      "location": data?.['site']?.['cattax'] ?? (data?.['app']?.['cattax'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "context",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-context",
      "location": data?.['site']?.['context'] ?? (data?.['app']?.['context'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "contentrating",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-contentrating",
      "location": data?.['site']?.['contentrating'] ?? (data?.['app']?.['contentrating'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "data",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-data",
      "location": data?.['site']?.['data'] ?? (data?.['app']?.['data'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "embeddable",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-embeddable",
      "location": data?.['site']?.['embeddable'] ?? (data?.['app']?.['embeddable'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "keywords",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-keywords",
      "location": data?.['site']?.['keywords'] ?? (data?.['app']?.['keywords'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "len",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-len",
      "location": data?.['site']?.['len'] ?? (data?.['app']?.['len'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "language",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-language",
      "location": data?.['site']?.['language'] ?? (data?.['app']?.['language'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "livestream",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-livestream",
      "location": data?.['site']?.['livestream'] ?? (data?.['app']?.['livestream'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "prodq",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-prodq",
      "location": data?.['site']?.['prodq'] ?? (data?.['app']?.['prodq'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "videoquality",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-videoquality",
      "location": data?.['site']?.['videoquality'] ?? (data?.['app']?.['videoquality'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "userrating",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-userrating",
      "location": data?.['site']?.['userrating'] ?? (data?.['app']?.['userrating'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "qagmediarating",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-qagmediarating",
      "location": data?.['site']?.['qagmediarating'] ?? (data?.['app']?.['qagmediarating'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "sourcerelationship",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-sourcerelationship",
      "location": data?.['site']?.['sourcerelationship'] ?? (data?.['app']?.['sourcerelationship'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-ext",
      "location": data?.['site']?.['ext'] ?? (data?.['app']?.['ext'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "kwarray",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-kwarray",
      "location": data?.['site']?.['kwarray'] ?? (data?.['app']?.['kwarray'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "network",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-network",
      "location": data?.['site']?.['network'] ?? (data?.['app']?.['network'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "channel",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-channel",
      "location": data?.['site']?.['channel'] ?? (data?.['app']?.['channel'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "langb",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "content-langb",
      "location": data?.['site']?.['langb'] ?? (data?.['app']?.['langb'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "BrandVersion",
      "attribute": "brand",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "BrandVersion-brand",
      "location": data?.['device']?.['sua']?.['UserAgent']?.['BrandVersion']?.['brand'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BrandVersion",
      "attribute": "version",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "BrandVersion-version",
      "location": data?.['device']?.['sua']?.['UserAgent']?.['BrandVersion']?.['version'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BrandVersion",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "Important": 0,
      "id": "BrandVersion-ext",
      "location": data?.['device']?.['sua']?.['UserAgent']?.['BrandVersion']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Ext",
      "attribute": "sdepth",
      "Required": 1,
      "Visibility": 1,
      "Important": 1,
      "id": "ext-sessionDepth",
      "location": data?.['ext']?.['sessionDepth'] ?? '',
      "RecommendedValue": ""
    }
  ];

  return jason;
}

