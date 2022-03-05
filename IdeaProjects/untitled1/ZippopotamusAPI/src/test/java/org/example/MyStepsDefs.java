package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import org.hamcrest.core.Is;
import org.junit.Assert;

import static io.restassured.RestAssured.given;

public class MyStepsDefs
{
    RequestSpecification request;
    JsonPath jsonPath;
    Response response;

    @Given("^api base url is \"([^\"]*)\"$")
    public void api_base_url_is(String baseUri)
    {   //method for baseUri
        request = given()
                .baseUri(baseUri);
    }

    @Given("^passes country \"([^\"]*)\" in path as first parameter$")
    public void passes_country_in_path_as_first_parameter(String country)
    {   //first parameter as country
        request.pathParam("country", country);
    }

    @Given("^passes zipcode \"([^\"]*)\" in path as second parameter$")
    public void passes_zipcode_in_path_as_second_parameter(String zipCode)
    {   //second parameter as zipcode
        request.pathParam("zipcode", zipCode);
    }

    @When("^makes postcode get request with path \"([^\"]*)\"$")
    public void makes_postcode_get_request_with_path(String path)
    {   //get response
        response = request
                .when()
                .get(path)
                .then()
                .extract()
                .response();
        jsonPath = response.getBody().jsonPath();
    }

    @Then("^postcode service status code should be (\\d+)$")
    public void postcode_service_status_code_should_be(int expectedStatusCode)
    {   //verify status code
        Assert.assertThat(response.getStatusCode(),Is.is(expectedStatusCode));
    }

    @Then("^response country should be \"([^\"]*)\"$")
    public void response_country_should_be(String expectedCountry)
    {   //verify expected country
        Assert.assertThat(jsonPath.get("country").toString(),Is.is(expectedCountry));
    }

    @Then("^response country abbreviation should be \"([^\"]*)\"$")
    public void response_country_abbreviation_should_be(String expectedAbbreviation)
    {   //verify expected abbreviation
        Assert.assertThat(jsonPath.getString("'country abbreviation'"),Is.is(expectedAbbreviation));
    }

    @Then("^latitude should be \"([^\"]*)\"$")
    public void latitudeShouldBe(String expectedLatitude)
    {   //verify expected Latitude
        Assert.assertThat(jsonPath.getString("places[0].latitude"),Is.is(expectedLatitude));
    }

    @Then("^state should be \"([^\"]*)\"$")
    public void state_should_be(String expectedState)
    {   //verify expected state
        Assert.assertThat(jsonPath.getString("places[0].state"),Is.is(expectedState));
    }

    @Then("^place name should be \"([^\"]*)\"$")
    public void place_name_should_be(String expectedPlaceName)
    {   //verify expected place name
        Assert.assertThat(jsonPath.getString("places[0].'place name'"),Is.is(expectedPlaceName));
    }

    @Then("^longitude should be \"([^\"]*)\"$")
    public void longitudeShouldBe(String expectedLongitude)
    {   //verify expected Longitude
        Assert.assertThat(jsonPath.getString("places[0].longitude"),Is.is(expectedLongitude));
    }
}
