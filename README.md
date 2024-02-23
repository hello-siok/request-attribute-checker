# request-attribute-checker Changelog

## 23 Feb, 2024
* fixed reading user.ext.eids 
* added scenario to read user.ext.consent (besides user.consent)
* added gdpr 2-letter country codes

## 15 Dec, 2023
* added logic to reflect Pubmatic's requirement: 
> when placement type = in-stream
> need to specify: video playback method, player size 

## 22 Nov, 2023
* added scenario to handle data["imp"]. previously can only read from data["request"]["imp"]

## 20 Nov, 2023
* native reading
* fix required input

## 19 Nov, 2023
* rewrote logic from hardcoded to reading from JSON
* added IAB v2.5 most parameters
* added .xls download button