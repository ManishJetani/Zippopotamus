$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/PostCodeInfo.feature");
formatter.feature({
  "line": 2,
  "name": "PostCode Information",
  "description": "",
  "id": "postcode-information",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Postcode"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "get valid postcode information for us",
  "description": "",
  "id": "postcode-information;get-valid-postcode-information-for-us",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "api base url is \"https://api.zippopotam.us/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "passes country \"us\" in path as first parameter",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "passes zipcode \"90210\" in path as second parameter",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "makes postcode get request with path \"{country}/{zipcode}\"",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "postcode service status code should be 200",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "response country should be \"United States\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "response country abbreviation should be \"US\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "latitude should be \"34.0901\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "state should be \"California\"",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "place name should be \"Beverly Hills\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "longitude should be \"-118.4065\"",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.zippopotam.us/",
      "offset": 17
    }
  ],
  "location": "MyStepsDefs.api_base_url_is(String)"
});
formatter.result({
  "duration": 723867800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "us",
      "offset": 16
    }
  ],
  "location": "MyStepsDefs.passes_country_in_path_as_first_parameter(String)"
});
formatter.result({
  "duration": 18078100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90210",
      "offset": 16
    }
  ],
  "location": "MyStepsDefs.passes_zipcode_in_path_as_second_parameter(String)"
});
formatter.result({
  "duration": 392000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{country}/{zipcode}",
      "offset": 38
    }
  ],
  "location": "MyStepsDefs.makes_postcode_get_request_with_path(String)"
});
formatter.result({
  "duration": 1777954500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "MyStepsDefs.postcode_service_status_code_should_be(int)"
});
formatter.result({
  "duration": 4001800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 28
    }
  ],
  "location": "MyStepsDefs.response_country_should_be(String)"
});
formatter.result({
  "duration": 559446500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "US",
      "offset": 41
    }
  ],
  "location": "MyStepsDefs.response_country_abbreviation_should_be(String)"
});
formatter.result({
  "duration": 16291800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "34.0901",
      "offset": 20
    }
  ],
  "location": "MyStepsDefs.latitudeShouldBe(String)"
});
formatter.result({
  "duration": 45500100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "California",
      "offset": 17
    }
  ],
  "location": "MyStepsDefs.state_should_be(String)"
});
formatter.result({
  "duration": 16774900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beverly Hills",
      "offset": 22
    }
  ],
  "location": "MyStepsDefs.place_name_should_be(String)"
});
formatter.result({
  "duration": 11356300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "-118.4065",
      "offset": 21
    }
  ],
  "location": "MyStepsDefs.longitudeShouldBe(String)"
});
formatter.result({
  "duration": 13721900,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "get 404 not found when passing invalid post code",
  "description": "",
  "id": "postcode-information;get-404-not-found-when-passing-invalid-post-code",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 18,
  "name": "api base url is \"https://api.zippopotam.us/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "passes country \"gb\" in path as first parameter",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "passes zipcode \"90210\" in path as second parameter",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "makes postcode get request with path \"{country}/{zipcode}\"",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "postcode service status code should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.zippopotam.us/",
      "offset": 17
    }
  ],
  "location": "MyStepsDefs.api_base_url_is(String)"
});
formatter.result({
  "duration": 385800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gb",
      "offset": 16
    }
  ],
  "location": "MyStepsDefs.passes_country_in_path_as_first_parameter(String)"
});
formatter.result({
  "duration": 273400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90210",
      "offset": 16
    }
  ],
  "location": "MyStepsDefs.passes_zipcode_in_path_as_second_parameter(String)"
});
formatter.result({
  "duration": 247700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{country}/{zipcode}",
      "offset": 38
    }
  ],
  "location": "MyStepsDefs.makes_postcode_get_request_with_path(String)"
});
formatter.result({
  "duration": 207281100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 39
    }
  ],
  "location": "MyStepsDefs.postcode_service_status_code_should_be(int)"
});
formatter.result({
  "duration": 223000,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "get 404 not found when passing only country in base path",
  "description": "",
  "id": "postcode-information;get-404-not-found-when-passing-only-country-in-base-path",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 25,
  "name": "api base url is \"https://api.zippopotam.us/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 26,
  "name": "passes country \"gb\" in path as first parameter",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "makes postcode get request with path \"{country}\"",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "postcode service status code should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.zippopotam.us/",
      "offset": 17
    }
  ],
  "location": "MyStepsDefs.api_base_url_is(String)"
});
formatter.result({
  "duration": 1356900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gb",
      "offset": 16
    }
  ],
  "location": "MyStepsDefs.passes_country_in_path_as_first_parameter(String)"
});
formatter.result({
  "duration": 328300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{country}",
      "offset": 38
    }
  ],
  "location": "MyStepsDefs.makes_postcode_get_request_with_path(String)"
});
formatter.result({
  "duration": 219946700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 39
    }
  ],
  "location": "MyStepsDefs.postcode_service_status_code_should_be(int)"
});
formatter.result({
  "duration": 273600,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "get 404 not found when passing only postcode in base path",
  "description": "",
  "id": "postcode-information;get-404-not-found-when-passing-only-postcode-in-base-path",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 31,
  "name": "api base url is \"https://api.zippopotam.us/\"",
  "keyword": "Given "
});
formatter.step({
  "line": 32,
  "name": "passes zipcode \"90210\" in path as second parameter",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "makes postcode get request with path \"{zipcode}\"",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "postcode service status code should be 404",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "https://api.zippopotam.us/",
      "offset": 17
    }
  ],
  "location": "MyStepsDefs.api_base_url_is(String)"
});
formatter.result({
  "duration": 674700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "90210",
      "offset": 16
    }
  ],
  "location": "MyStepsDefs.passes_zipcode_in_path_as_second_parameter(String)"
});
formatter.result({
  "duration": 436800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "{zipcode}",
      "offset": 38
    }
  ],
  "location": "MyStepsDefs.makes_postcode_get_request_with_path(String)"
});
formatter.result({
  "duration": 219233500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "404",
      "offset": 39
    }
  ],
  "location": "MyStepsDefs.postcode_service_status_code_should_be(int)"
});
formatter.result({
  "duration": 239000,
  "status": "passed"
});
});