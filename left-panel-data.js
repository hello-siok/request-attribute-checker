//var data = data || {};

function getJason(data){
  var jason = [
    {
      "parent": "BidRequest",
      "attribute": "tmax",
      "Required": 1,
      "Visibility": 1,
      "id": "tmax",
      "location": data['request']?.['tmax'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "bcat",
      "Required": 0,
      "Visibility": 1,
      "id": "bcat",
      "location": data['request']?.['bcat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "badv",
      "Required": 0,
      "Visibility": 1,
      "id": "badv",
      "location": data['request']?.['badv'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "bapp",
      "Required": 0,
      "Visibility": 0,
      "id": "bapp",
      "location": data['request']?.['bapp'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "wlang",
      "Required": 0,
      "Visibility": 1,
      "id": "wlang",
      "location": data['request']?.['wlang'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "wlangb",
      "Required": 0,
      "Visibility": 0,
      "id": "wlangb",
      "location": data['request']?.['wlangb'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "wseat",
      "Required": 0,
      "Visibility": 0,
      "id": "wseat",
      "location": data['request']?.['wseat '] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "bseat",
      "Required": 0,
      "Visibility": 0,
      "id": "bseat",
      "location": data['request']?.['bseat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "cur",
      "Required": 0,
      "Visibility": 0,
      "id": "cur",
      "location": data['request']?.['cur'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 0,
      "id": "ext",
      "location": data['request']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BidRequest",
      "attribute": "cattax",
      "Required": 0,
      "Visibility": 1,
      "id": "cattax",
      "location": data['request']?.['cattax'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "tagid",
      "Required": 1,
      "Visibility": 1,
      "id": "tagid",
      "location": data['request']?.['imp'][0]?.['tagid'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "bidfloor",
      "Required": 1,
      "Visibility": 1,
      "id": "bidfloor",
      "location": data['request']?.['imp'][0]?.['bidfloor'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "bidfloorcur",
      "Required": 1,
      "Visibility": 1,
      "id": "bidfloorcur",
      "location": data['request']?.['imp'][0]?.['bidfloorcur'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "metric",
      "Required": 0,
      "Visibility": 1,
      "id": "metric",
      "location": data['request']?.['imp'][0]?.['metric'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "pmp",
      "Required": 0,
      "Visibility": 0,
      "id": "pmp",
      "location": data['request']?.['imp'][0]?.['pmp'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "displaymanager",
      "Required": 0,
      "Visibility": 0,
      "id": "displaymanager",
      "location": data['request']?.['imp'][0]?.['displaymanager'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "displaymanagerver",
      "Required": 0,
      "Visibility": 0,
      "id": "displaymanagerver",
      "location": data['request']?.['imp'][0]?.['displaymanagerver'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "instl",
      "Required": 0,
      "Visibility": 0,
      "id": "instl",
      "location": data['request']?.['imp'][0]?.['instl'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "clickbrowser",
      "Required": 0,
      "Visibility": 0,
      "id": "clickbrowser",
      "location": data['request']?.['imp'][0]?.['clickbrowser'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "secure",
      "Required": 0,
      "Visibility": 0,
      "id": "secure",
      "location": data['request']?.['imp'][0]?.['secure'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "iframebuster",
      "Required": 0,
      "Visibility": 0,
      "id": "iframebuster",
      "location": data['request']?.['imp'][0]?.['iframebuster'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "exp",
      "Required": 0,
      "Visibility": 0,
      "id": "exp",
      "location": data['request']?.['imp'][0]?.['exp'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Imp",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 0,
      "id": "ext",
      "location": data['request']?.['imp'][0]?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "cat",
      "Required": 1,
      "Visibility": 1,
      "id": "site-cat",
      "location": data['request']?.['site']?.['cat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "domain",
      "Required": 1,
      "Visibility": 1,
      "id": "site-domain",
      "location": data['request']?.['site']?.['domain'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "name",
      "Required": 0,
      "Visibility": 0,
      "id": "site-name",
      "location": data['request']?.['site']?.['name'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "sectioncat",
      "Required": 0,
      "Visibility": 0,
      "id": "site-sectioncat",
      "location": data['request']?.['site']?.['sectioncat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "pagecat",
      "Required": 0,
      "Visibility": 0,
      "id": "site-pagecat",
      "location": data['request']?.['site']?.['pagecat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "page",
      "Required": 0,
      "Visibility": 0,
      "id": "site-page",
      "location": data['request']?.['site']?.['page'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "ref",
      "Required": 0,
      "Visibility": 0,
      "id": "site-ref",
      "location": data['request']?.['site']?.['ref'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "search",
      "Required": 0,
      "Visibility": 0,
      "id": "site-search",
      "location": data['request']?.['site']?.['search'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "mobile",
      "Required": 0,
      "Visibility": 0,
      "id": "site-mobile",
      "location": data['request']?.['site']?.['mobile'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "privacypolicy",
      "Required": 0,
      "Visibility": 0,
      "id": "site-privacypolicy",
      "location": data['request']?.['site']?.['privacypolicy'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "publisher",
      "Required": 0,
      "Visibility": 0,
      "id": "site-publisher",
      "location": data['request']?.['site']?.['publisher'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "keywords",
      "Required": 0,
      "Visibility": 0,
      "id": "site-keywords",
      "location": data['request']?.['site']?.['keywords'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Site (for website)",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 0,
      "id": "site-ext",
      "location": data['request']?.['site']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "cat",
      "Required": 1,
      "Visibility": 1,
      "id": "app-cat",
      "location": data['request']?.['app']?.['cat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "domain",
      "Required": 0,
      "Visibility": 1,
      "id": "app-domain",
      "location": data['request']?.['app']?.['domain'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "storeurl",
      "Required": 1,
      "Visibility": 1,
      "id": "app-storeurl",
      "location": data['request']?.['app']?.['storeurl'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "ver",
      "Required": 0,
      "Visibility": 1,
      "id": "app-ver",
      "location": data['request']?.['app']?.['ver'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "bundle",
      "Required": 0,
      "Visibility": 1,
      "id": "app-bundle",
      "location": data['request']?.['app']?.['bundle'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "kwarray",
      "Required": 0,
      "Visibility": 1,
      "id": "app-kwarray",
      "location": data['request']?.['app']?.['kwarray'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "cattax",
      "Required": 0,
      "Visibility": 1,
      "id": "app-cattax",
      "location": data['request']?.['app']?.['cattax'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "app-ext",
      "location": data['request']?.['app']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "name",
      "Required": 0,
      "Visibility": 0,
      "id": "app-name",
      "location": data['request']?.['app']?.['name'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "sectioncat",
      "Required": 0,
      "Visibility": 0,
      "id": "app-sectioncat",
      "location": data['request']?.['app']?.['sectioncat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "pagecat",
      "Required": 0,
      "Visibility": 0,
      "id": "app-pagecat",
      "location": data['request']?.['app']?.['pagecat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "privacypolicy",
      "Required": 0,
      "Visibility": 0,
      "id": "app-privacypolicy",
      "location": data['request']?.['app']?.['privacypolicy'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "paid",
      "Required": 0,
      "Visibility": 0,
      "id": "app-paid",
      "location": data['request']?.['app']?.['paid'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "publisher",
      "Required": 0,
      "Visibility": 0,
      "id": "app-publisher",
      "location": data['request']?.['app']?.['publisher'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "keywords",
      "Required": 0,
      "Visibility": 0,
      "id": "app-keywords",
      "location": data['request']?.['app']?.['keywords'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "App (for app)",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 0,
      "id": "app-ext",
      "location": data['request']?.['app']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ifa",
      "Required": 1,
      "Visibility": 1,
      "id": "device-ifa",
      "location": data['request']?.['device']?.['ifa'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ua",
      "Required": 1,
      "Visibility": 1,
      "id": "device-ua",
      "location": data['request']?.['device']?.['ua'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "sua",
      "Required": 0,
      "Visibility": 1,
      "id": "device-sua",
      "location": data['request']?.['device']?.['sua'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "dnt",
      "Required": 1,
      "Visibility": 1,
      "id": "device-dnt",
      "location": data['request']?.['device']?.['dnt'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "lmt",
      "Required": 1,
      "Visibility": 1,
      "id": "device-lmt",
      "location": data['request']?.['device']?.['lmt'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ip",
      "Required": 1,
      "Visibility": 1,
      "id": "device-ip",
      "location": data['request']?.['device']?.['ip'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ipv6",
      "Required": 0,
      "Visibility": 0,
      "id": "device-ipv6",
      "location": data['request']?.['device']?.['ipv6'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "mccmnc",
      "Required": 1,
      "Visibility": 1,
      "id": "device-mccmnc",
      "location": data['request']?.['device']?.['mccmnc'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "type",
      "Required": 1,
      "Visibility": 1,
      "id": "device-type",
      "location": data['request']?.['device']?.['type'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "model",
      "Required": 1,
      "Visibility": 1,
      "id": "device-model",
      "location": data['request']?.['device']?.['model'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "make",
      "Required": 0,
      "Visibility": 1,
      "id": "device-make",
      "location": data['request']?.['device']?.['make'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "os",
      "Required": 1,
      "Visibility": 1,
      "id": "device-os",
      "location": data['request']?.['device']?.['os'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "osv",
      "Required": 0,
      "Visibility": 1,
      "id": "device-osv",
      "location": data['request']?.['device']?.['osv'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "hwv",
      "Required": 1,
      "Visibility": 1,
      "id": "device-hwv",
      "location": data['request']?.['device']?.['hwv'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "connectiontype",
      "Required": 1,
      "Visibility": 1,
      "id": "device-connectiontype",
      "location": data['request']?.['device']?.['connectiontype'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "w",
      "Required": 1,
      "Visibility": 1,
      "id": "device-w",
      "location": data['request']?.['device']?.['w'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "h",
      "Required": 1,
      "Visibility": 1,
      "id": "device-h",
      "location": data['request']?.['device']?.['h'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "language",
      "Required": 0,
      "Visibility": 1,
      "id": "device-language",
      "location": data['request']?.['device']?.['language'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "langb",
      "Required": 0,
      "Visibility": 1,
      "id": "device-langb",
      "location": data['request']?.['device']?.['langb'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "js",
      "Required": 1,
      "Visibility": 1,
      "id": "device-js",
      "location": data['request']?.['device']?.['js'] ?? '',
      "RecommendedValue": 1
    },
    {
      "parent": "Device",
      "attribute": "devicetype",
      "Required": 1,
      "Visibility": 1,
      "id": "device-devicetype",
      "location": data['request']?.['device']?.['devicetype'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "didsha1",
      "Required": 0,
      "Visibility": 1,
      "id": "device-didsha1",
      "location": data['request']?.['device']?.['didsha1'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "didmd5",
      "Required": 0,
      "Visibility": 1,
      "id": "device-didmd5",
      "location": data['request']?.['device']?.['didmd5'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "dpidsha1",
      "Required": 0,
      "Visibility": 1,
      "id": "device-dpidsha1",
      "location": data['request']?.['device']?.['dpidsha1'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "dpidmd5",
      "Required": 0,
      "Visibility": 1,
      "id": "device-dpidmd5",
      "location": data['request']?.['device']?.['dpidmd5'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "macsha1",
      "Required": 0,
      "Visibility": 1,
      "id": "device-macsha1",
      "location": data['request']?.['device']?.['macsha1'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "macmd5",
      "Required": 0,
      "Visibility": 1,
      "id": "device-macmd5",
      "location": data['request']?.['device']?.['macmd5'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "device-ext",
      "location": data['request']?.['device']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "ppi",
      "Required": 0,
      "Visibility": 0,
      "id": "device-ppi",
      "location": data['request']?.['device']?.['ppi'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "pxratio",
      "Required": 0,
      "Visibility": 0,
      "id": "device-pxratio",
      "location": data['request']?.['device']?.['pxratio'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "geofetch",
      "Required": 0,
      "Visibility": 0,
      "id": "device-geofetch",
      "location": data['request']?.['device']?.['geofetch'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "flashver",
      "Required": 0,
      "Visibility": 0,
      "id": "device-flashver",
      "location": data['request']?.['device']?.['flashver'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Device",
      "attribute": "carrier",
      "Required": 0,
      "Visibility": 0,
      "id": "device-carrier",
      "location": data['request']?.['device']?.['carrier'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "country",
      "Required": 1,
      "Visibility": 1,
      "id": "geo-country",
      "location": data['request']?.['device']?.['geo']?.['country'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "lat",
      "Required": 1,
      "Visibility": 1,
      "id": "geo-lat",
      "location": data['request']?.['device']?.['geo']?.['lat'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "lon",
      "Required": 1,
      "Visibility": 1,
      "id": "geo-lon",
      "location": data['request']?.['device']?.['geo']?.['lon'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "ipservice",
      "Required": 1,
      "Visibility": 1,
      "id": "geo-ipservice",
      "location": data['request']?.['device']?.['geo']?.['ipservice'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "type",
      "Required": 0,
      "Visibility": 1,
      "id": "geo-type",
      "location": data['request']?.['device']?.['geo']?.['type'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "accuracy",
      "Required": 0,
      "Visibility": 1,
      "id": "geo-accuracy",
      "location": data['request']?.['device']?.['geo']?.['accuracy'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "lastfix",
      "Required": 0,
      "Visibility": 1,
      "id": "geo-lastfix",
      "location": data['request']?.['device']?.['geo']?.['lastfix'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "region",
      "Required": 0,
      "Visibility": 1,
      "id": "geo-region",
      "location": data['request']?.['device']?.['geo']?.['region'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "regionfips104",
      "Required": 0,
      "Visibility": 0,
      "id": "geo-regionfips104",
      "location": data['request']?.['device']?.['geo']?.['regionfips104'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "metro",
      "Required": 0,
      "Visibility": 1,
      "id": "geo-metro",
      "location": data['request']?.['device']?.['geo']?.['metro'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "city",
      "Required": 0,
      "Visibility": 1,
      "id": "geo-city",
      "location": data['request']?.['device']?.['geo']?.['city'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "zip",
      "Required": 0,
      "Visibility": 1,
      "id": "geo-zip",
      "location": data['request']?.['device']?.['geo']?.['zip'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "utcoffset",
      "Required": 0,
      "Visibility": 0,
      "id": "geo-utcoffset",
      "location": data['request']?.['device']?.['geo']?.['utcoffset'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Geo",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "geo-ext",
      "location": data['request']?.['device']?.['geo']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "mimes",
      "Required": 1,
      "Visibility": 1,
      "id": "video-mimes",
      "location": data['request']?.['imp'][0]?.['video']?.['mimes'] ?? '',
      "RecommendedValue": ["video/mp4","application/x-mpegurl","video/3gpp","video/x-flv"]
    },
    {
      "parent": "Video",
      "attribute": "minduration",
      "Required": 0,
      "Visibility": 1,
      "id": "video-minduration",
      "location": data['request']?.['imp'][0]?.['video']?.['minduration'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "maxduration",
      "Required": 1,
      "Visibility": 1,
      "id": "video-maxduration",
      "location": data['request']?.['imp'][0]?.['video']?.['maxduration'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "protocol",
      "Required": 0,
      "Visibility": 0,
      "id": "video-protocol",
      "location": data['request']?.['imp'][0]?.['video']?.['protocol'] ?? '',
      "RecommendedValue": [2,3,5,6]
    },
    {
      "parent": "Video",
      "attribute": "protocols",
      "Required": 1,
      "Visibility": 1,
      "id": "video-protocols",
      "location": data['request']?.['imp'][0]?.['video']?.['protocols'] ?? '',
      "RecommendedValue": [2,3,5,6]
    },
    {
      "parent": "Video",
      "attribute": "w",
      "Required": 0,
      "Visibility": 0,
      "id": "video-w",
      "location": data['request']?.['imp'][0]?.['video']?.['w'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "h",
      "Required": 0,
      "Visibility": 0,
      "id": "video-h",
      "location": data['request']?.['imp'][0]?.['video']?.['h'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "startdelay",
      "Required": 0,
      "Visibility": 0,
      "id": "video-startdelay",
      "location": data['request']?.['imp'][0]?.['video']?.['startdelay'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "placement",
      "Required": 1,
      "Visibility": 1,
      "id": "video-placement",
      "location": data['request']?.['imp'][0]?.['video']?.['placement'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "linearity",
      "Required": 1,
      "Visibility": 1,
      "id": "video-linearity",
      "location": data['request']?.['imp'][0]?.['video']?.['linearity'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "skip",
      "Required": 0,
      "Visibility": 1,
      "id": "video-skip",
      "location": data['request']?.['imp'][0]?.['video']?.['skip'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "skipmin",
      "Required": 0,
      "Visibility": 0,
      "id": "video-skipmin",
      "location": data['request']?.['imp'][0]?.['video']?.['skipmin'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "skipafter",
      "Required": 0,
      "Visibility": 1,
      "id": "video-skipafter",
      "location": data['request']?.['imp'][0]?.['video']?.['skipafter'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "sequence",
      "Required": 0,
      "Visibility": 0,
      "id": "video-sequence",
      "location": data['request']?.['imp'][0]?.['video']?.['sequence'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "battr",
      "Required": 0,
      "Visibility": 0,
      "id": "video-battr",
      "location": data['request']?.['imp'][0]?.['video']?.['battr'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "maxextended",
      "Required": 0,
      "Visibility": 0,
      "id": "video-maxextended",
      "location": data['request']?.['imp'][0]?.['video']?.['maxextended'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "minbitrate",
      "Required": 0,
      "Visibility": 0,
      "id": "video-minbitrate",
      "location": data['request']?.['imp'][0]?.['video']?.['minbitrate'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "maxbitrate",
      "Required": 1,
      "Visibility": 1,
      "id": "video-maxbitrate",
      "location": data['request']?.['imp'][0]?.['video']?.['maxbitrate'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "boxingallowed",
      "Required": 0,
      "Visibility": 0,
      "id": "video-boxingallowed",
      "location": data['request']?.['imp'][0]?.['video']?.['boxingallowed'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "playbackmethod",
      "Required": 1,
      "Visibility": 1,
      "id": "video-playbackmethod",
      "location": data['request']?.['imp'][0]?.['video']?.['playbackmethod'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "playbackend",
      "Required": 0,
      "Visibility": 1,
      "id": "video-playbackend",
      "location": data['request']?.['imp'][0]?.['video']?.['playbackend'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "delivery",
      "Required": 0,
      "Visibility": 0,
      "id": "video-delivery",
      "location": data['request']?.['imp'][0]?.['video']?.['delivery'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "pos",
      "Required": 0,
      "Visibility": 0,
      "id": "video-pos",
      "location": data['request']?.['imp'][0]?.['video']?.['pos'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "companionad",
      "Required": 0,
      "Visibility": 0,
      "id": "video-companionad",
      "location": data['request']?.['imp'][0]?.['video']?.['companionad'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "api",
      "Required": 0,
      "Visibility": 0,
      "id": "video-api",
      "location": data['request']?.['imp'][0]?.['video']?.['api'] ?? '',
      "RecommendedValue": [3,5,6,7]
    },
    {
      "parent": "Video",
      "attribute": "companiontype",
      "Required": 0,
      "Visibility": 0,
      "id": "video-companiontype",
      "location": data['request']?.['imp'][0]?.['video']?.['companiontype'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Video",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 0,
      "id": "video-ext",
      "location": data['request']?.['imp'][0]?.['video']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "format",
      "Required": 0,
      "Visibility": 0,
      "id": "banner-format",
      "location": data['request']?.['imp'][0]?.['banner']?.['format'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "w",
      "Required": 0,
      "Visibility": 0,
      "id": "banner-w",
      "location": data['request']?.['imp'][0]?.['banner']?.['w'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "h",
      "Required": 0,
      "Visibility": 0,
      "id": "banner-h",
      "location": data['request']?.['imp'][0]?.['banner']?.['h'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "btype",
      "Required": 0,
      "Visibility": 0,
      "id": "banner-btype",
      "location": data['request']?.['imp'][0]?.['banner']?.['btype'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "battr",
      "Required": 0,
      "Visibility": 0,
      "id": "banner-battr",
      "location": data['request']?.['imp'][0]?.['banner']?.['battr'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "pos",
      "Required": 1,
      "Visibility": 1,
      "id": "banner-pos",
      "location": data['request']?.['imp'][0]?.['banner']?.['pos'] ?? '',
      "RecommendedValue": 7
    },
    {
      "parent": "Banner",
      "attribute": "mimes",
      "Required": 1,
      "Visibility": 1,
      "id": "banner-mimes",
      "location": data['request']?.['imp'][0]?.['banner']?.['mimes'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "topframe",
      "Required": 1,
      "Visibility": 1,
      "id": "banner-topframe",
      "location": data['request']?.['imp'][0]?.['banner']?.['topframe'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "expdir",
      "Required": 0,
      "Visibility": 0,
      "id": "banner-expdir",
      "location": data['request']?.['imp'][0]?.['banner']?.['expdir'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "api",
      "Required": 1,
      "Visibility": 1,
      "id": "banner-api",
      "location": data['request']?.['imp'][0]?.['banner']?.['api'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "banner-ext",
      "location": data['request']?.['imp'][0]?.['banner']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Banner",
      "attribute": "vcm",
      "Required": 0,
      "Visibility": 1,
      "id": "banner-vcm",
      "location": data['request']?.['imp'][0]?.['banner']?.['vcm'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "request",
      "Required": 1,
      "Visibility": 1,
      "id": "native-request",
      "location": data['request']?.['imp'][0]?.['native']?.['request'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "ver",
      "Required": 1,
      "Visibility": 1,
      "id": "native-ver",
      "location": data['request']?.['imp'][0]?.['native']?.['ver'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "api",
      "Required": 0,
      "Visibility": 0,
      "id": "native-api",
      "location": data['request']?.['imp'][0]?.['native']?.['api'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "battr",
      "Required": 0,
      "Visibility": 0,
      "id": "native-battr",
      "location": data['request']?.['imp'][0]?.['native']?.['battr'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "ext",
      "Required": 1,
      "Visibility": 1,
      "id": "native-ext",
      "location": data['request']?.['imp'][0]?.['native']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "privacy",
      "Required": 1,
      "Visibility": 1,
      "id": "native-privacy",
      "location": data['request']?.['imp'][0]?.['native']?.['request']?.['native']?.['privacy'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "plcmttype",
      "Required": 1,
      "Visibility": 1,
      "id": "native-plcmttype",
      "location": data['request']?.['imp'][0]?.['native']?.['request']?.['native']?.['plcmttype'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "eventtrackers",
      "Required": 1,
      "Visibility": 1,
      "id": "native-eventtrackers",
      "location": data['request']?.['imp'][0]?.['native']?.['request']?.['native']?.['eventtrackers'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Native",
      "attribute": "context",
      "Required": 1,
      "Visibility": 1,
      "id": "native-context",
      "location": data['request']?.['imp'][0]?.['native']?.['request']?.['native']?.['context'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "mimes",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-mimes",
      "location": data['request']?.['imp'][0]?.['audio']?.['mimes'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "minduration",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-minduration",
      "location": data['request']?.['imp'][0]?.['audio']?.['minduration'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "maxduration",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-maxduration",
      "location": data['request']?.['imp'][0]?.['audio']?.['maxduration'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "protocols",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-protocols",
      "location": data['request']?.['imp'][0]?.['audio']?.['protocols'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "startdelay",
      "Required": 0,
      "Visibility": 1,
      "id": "audio-startdelay",
      "location": data['request']?.['imp'][0]?.['audio']?.['startdelay'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "sequence",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-sequence",
      "location": data['request']?.['imp'][0]?.['audio']?.['sequence'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "battr",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-battr",
      "location": data['request']?.['imp'][0]?.['audio']?.['battr'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "maxextended",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-maxextended",
      "location": data['request']?.['imp'][0]?.['audio']?.['maxextended'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "minbitrate",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-minbitrate",
      "location": data['request']?.['imp'][0]?.['audio']?.['minbitrate'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "maxbitrate",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-maxbitrate",
      "location": data['request']?.['imp'][0]?.['audio']?.['maxbitrate'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "delivery",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-delivery",
      "location": data['request']?.['imp'][0]?.['audio']?.['delivery'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "companionad",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-companionad",
      "location": data['request']?.['imp'][0]?.['audio']?.['companionad'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "api",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-api",
      "location": data['request']?.['imp'][0]?.['audio']?.['api'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "companiontype",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-companiontype",
      "location": data['request']?.['imp'][0]?.['audio']?.['companiontype'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "maxseq",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-maxseq",
      "location": data['request']?.['imp'][0]?.['audio']?.['maxseq'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "feed",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-feed",
      "location": data['request']?.['imp'][0]?.['audio']?.['feed'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "stitched",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-stitched",
      "location": data['request']?.['imp'][0]?.['audio']?.['stitched'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "nvol",
      "Required": 0,
      "Visibility": 0,
      "id": "audio-nvol",
      "location": data['request']?.['imp'][0]?.['audio']?.['nvol'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "audio-ext",
      "location": data['request']?.['imp'][0]?.['audio']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "poddur",
      "Required": 0,
      "Visibility": 1,
      "id": "audio-poddur",
      "location": data['request']?.['imp'][0]?.['audio']?.['poddur'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "rqddurs",
      "Required": 0,
      "Visibility": 1,
      "id": "audio-rqddurs",
      "location": data['request']?.['imp'][0]?.['audio']?.['rqddurs'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "podid",
      "Required": 0,
      "Visibility": 1,
      "id": "audio-podid",
      "location": data['request']?.['imp'][0]?.['audio']?.['podid'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "podseq",
      "Required": 0,
      "Visibility": 1,
      "id": "audio-podseq",
      "location": data['request']?.['imp'][0]?.['audio']?.['podseq'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "slotinpod",
      "Required": 0,
      "Visibility": 1,
      "id": "audio-slotinpod",
      "location": data['request']?.['imp'][0]?.['audio']?.['slotinpod'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Audio",
      "attribute": "mincpmpersec",
      "Required": 0,
      "Visibility": 1,
      "id": "audio-mincpmpersec",
      "location": data['request']?.['imp'][0]?.['audio']?.['mincpmpersec'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "id",
      "Required": 0,
      "Visibility": 1,
      "id": "user-id",
      "location": data['request']?.['user']?.['id'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "buyeruid",
      "Required": 0,
      "Visibility": 1,
      "id": "user-buyeruid",
      "location": data['request']?.['user']?.['buyeruid'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "yob",
      "Required": 0,
      "Visibility": 1,
      "id": "user-yob",
      "location": data['request']?.['user']?.['yob'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "gender",
      "Required": 0,
      "Visibility": 1,
      "id": "user-gender",
      "location": data['request']?.['user']?.['gender'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "consent",
      "Required": 1,
      "Visibility": 1,
      "id": "user-consent",
      "location": data['request']?.['user']?.['consent'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "keywords",
      "Required": 0,
      "Visibility": 0,
      "id": "user-keywords",
      "location": data['request']?.['user']?.['keywords'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "customdata",
      "Required": 0,
      "Visibility": 0,
      "id": "user-customdata",
      "location": data['request']?.['user']?.['customdata'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "geo",
      "Required": 0,
      "Visibility": 0,
      "id": "user-geo",
      "location": data['request']?.['user']?.['geo'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "data",
      "Required": 0,
      "Visibility": 0,
      "id": "user-data",
      "location": data['request']?.['user']?.['data'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "User",
      "attribute": "ext.eids",
      "Required": 1,
      "Visibility": 1,
      "id": "user-ext-eids",
      "location": data['request']?.['user']?.['ext.eids'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Source",
      "attribute": "fd",
      "Required": 0,
      "Visibility": 0,
      "id": "source-fd",
      "location": data['request']?.['source']?.['fd'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Source",
      "attribute": "tid",
      "Required": 0,
      "Visibility": 0,
      "id": "source-tid",
      "location": data['request']?.['source']?.['tid'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Source",
      "attribute": "pchain",
      "Required": 1,
      "Visibility": 1,
      "id": "source-pchain",
      "location": data['request']?.['source']?.['pchain'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Source",
      "attribute": "omidpn",
      "Required": 1,
      "Visibility": 1,
      "id": "source-omidpn",
      "location": data['request']?.['source']?.['ext']?.['omidpn'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Regs",
      "attribute": "gdpr",
      "Required": 1,
      "Visibility": 1,
      "id": "regs-gdpr",
      "location": data['request']?.['regs']?.['ext']?.['gdpr'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Regs",
      "attribute": "coppa",
      "Required": 1,
      "Visibility": 1,
      "id": "regs-coppa",
      "location": data['request']?.['regs']?.['coppa'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Regs",
      "attribute": "us_privacy (only for US traffic)",
      "Required": 1,
      "Visibility": 1,
      "id": "regs-us_privacy",
      "location": data['request']?.['regs']?.['ext']?.['us_privacy'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Regs",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "regs-ext",
      "location": data['request']?.['regs']?.['ext'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "id",
      "Required": 0,
      "Visibility": 1,
      "id": "content-id",
      "location": data['request']?.['site']?.['id'] ?? (data['request']?.['app']?.['id'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "artist",
      "Required": 0,
      "Visibility": 1,
      "id": "content-artist",
      "location": data['request']?.['site']?.['artist'] ?? (data['request']?.['app']?.['artist'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "album",
      "Required": 0,
      "Visibility": 1,
      "id": "content-album",
      "location": data['request']?.['site']?.['album'] ?? (data['request']?.['app']?.['album'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "episode",
      "Required": 0,
      "Visibility": 1,
      "id": "content-episode",
      "location": data['request']?.['site']?.['episode'] ?? (data['request']?.['app']?.['episode'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "genre",
      "Required": 0,
      "Visibility": 1,
      "id": "content-genre",
      "location": data['request']?.['site']?.['genre'] ?? (data['request']?.['app']?.['genre'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "isrc",
      "Required": 0,
      "Visibility": 1,
      "id": "content-isrc",
      "location": data['request']?.['site']?.['isrc'] ?? (data['request']?.['app']?.['isrc'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "producer",
      "Required": 0,
      "Visibility": 1,
      "id": "content-producer",
      "location": data['request']?.['site']?.['producer'] ?? (data['request']?.['app']?.['producer'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "url",
      "Required": 0,
      "Visibility": 1,
      "id": "content-url",
      "location": data['request']?.['site']?.['url'] ?? (data['request']?.['app']?.['url'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "cat",
      "Required": 0,
      "Visibility": 1,
      "id": "content-cat",
      "location": data['request']?.['site']?.['cat'] ?? (data['request']?.['app']?.['cat'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "cattax",
      "Required": 0,
      "Visibility": 1,
      "id": "content-cattax",
      "location": data['request']?.['site']?.['cattax'] ?? (data['request']?.['app']?.['cattax'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "context",
      "Required": 0,
      "Visibility": 1,
      "id": "content-context",
      "location": data['request']?.['site']?.['context'] ?? (data['request']?.['app']?.['context'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "contentrating",
      "Required": 0,
      "Visibility": 1,
      "id": "content-contentrating",
      "location": data['request']?.['site']?.['contentrating'] ?? (data['request']?.['app']?.['contentrating'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "data",
      "Required": 0,
      "Visibility": 1,
      "id": "content-data",
      "location": data['request']?.['site']?.['data'] ?? (data['request']?.['app']?.['data'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "embeddable",
      "Required": 0,
      "Visibility": 1,
      "id": "content-embeddable",
      "location": data['request']?.['site']?.['embeddable'] ?? (data['request']?.['app']?.['embeddable'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "keywords",
      "Required": 0,
      "Visibility": 1,
      "id": "content-keywords",
      "location": data['request']?.['site']?.['keywords'] ?? (data['request']?.['app']?.['keywords'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "len",
      "Required": 0,
      "Visibility": 1,
      "id": "content-len",
      "location": data['request']?.['site']?.['len'] ?? (data['request']?.['app']?.['len'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "language",
      "Required": 0,
      "Visibility": 1,
      "id": "content-language",
      "location": data['request']?.['site']?.['language'] ?? (data['request']?.['app']?.['language'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "livestream",
      "Required": 0,
      "Visibility": 1,
      "id": "content-livestream",
      "location": data['request']?.['site']?.['livestream'] ?? (data['request']?.['app']?.['livestream'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "prodq",
      "Required": 0,
      "Visibility": 1,
      "id": "content-prodq",
      "location": data['request']?.['site']?.['prodq'] ?? (data['request']?.['app']?.['prodq'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "videoquality",
      "Required": 0,
      "Visibility": 1,
      "id": "content-videoquality",
      "location": data['request']?.['site']?.['videoquality'] ?? (data['request']?.['app']?.['videoquality'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "userrating",
      "Required": 0,
      "Visibility": 1,
      "id": "content-userrating",
      "location": data['request']?.['site']?.['userrating'] ?? (data['request']?.['app']?.['userrating'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "qagmediarating",
      "Required": 0,
      "Visibility": 1,
      "id": "content-qagmediarating",
      "location": data['request']?.['site']?.['qagmediarating'] ?? (data['request']?.['app']?.['qagmediarating'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "sourcerelationship",
      "Required": 0,
      "Visibility": 1,
      "id": "content-sourcerelationship",
      "location": data['request']?.['site']?.['sourcerelationship'] ?? (data['request']?.['app']?.['sourcerelationship'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "content-ext",
      "location": data['request']?.['site']?.['ext'] ?? (data['request']?.['app']?.['ext'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "kwarray",
      "Required": 0,
      "Visibility": 1,
      "id": "content-kwarray",
      "location": data['request']?.['site']?.['kwarray'] ?? (data['request']?.['app']?.['kwarray'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "network",
      "Required": 0,
      "Visibility": 1,
      "id": "content-network",
      "location": data['request']?.['site']?.['network'] ?? (data['request']?.['app']?.['network'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "channel",
      "Required": 0,
      "Visibility": 1,
      "id": "content-channel",
      "location": data['request']?.['site']?.['channel'] ?? (data['request']?.['app']?.['channel'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "Content",
      "attribute": "langb",
      "Required": 0,
      "Visibility": 1,
      "id": "content-langb",
      "location": data['request']?.['site']?.['langb'] ?? (data['request']?.['app']?.['langb'] ?? ''),
      "RecommendedValue": ""
    },
    {
      "parent": "BrandVersion",
      "attribute": "brand",
      "Required": 0,
      "Visibility": 1,
      "id": "BrandVersion-brand",
      "location": data['request']?.['device']?.['sua']?.['UserAgent']?.['BrandVersion']?.['brand'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BrandVersion",
      "attribute": "version",
      "Required": 0,
      "Visibility": 1,
      "id": "BrandVersion-version",
      "location": data['request']?.['device']?.['sua']?.['UserAgent']?.['BrandVersion']?.['version'] ?? '',
      "RecommendedValue": ""
    },
    {
      "parent": "BrandVersion",
      "attribute": "ext",
      "Required": 0,
      "Visibility": 1,
      "id": "BrandVersion-ext",
      "location": data['request']?.['device']?.['sua']?.['UserAgent']?.['BrandVersion']?.['ext'] ?? '',
      "RecommendedValue": ""
    }
  ];

  return jason;
}

