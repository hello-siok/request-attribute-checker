# request-attribute-checker Changelog

## 15 Dec
* added logic to reflect Pubmatic's requirement: 
> when placement type = in-stream
> need to specify: video playback method, player size 

## 22 Nov
* added scenario to handle data["imp"]. previously can only read from data["request"]["imp"]

## 20 Nov
* native reading
* fix required input

## 19 Nov
* rewrote logic from hardcoded to reading from JSON
* added IAB v2.5 most parameters
* added .xls download button