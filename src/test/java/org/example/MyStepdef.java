package org.example;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.testng.Assert;

public class MyStepdef {
    HomePage homePage=new HomePage();
    PhoneCategory phoneCategory=new PhoneCategory();
    @Given("^user is on homepage$")
    public void user_is_on_homepage() {
        homePage.VerifyuserisonHomePage();
    }

    @When("^user click on \"([^\"]*)\" link on top menu$")
    public void user_click_on_link_on_top_menu(String categoryLink)  {
        homePage.userClickOnCategoryLink(categoryLink);

    }


    @Then("^user should be navigate to category \"([^\"]*)\" successfully$")
    public void user_should_be_navigate_to_category_successfully(String expectedUrl) {
        Assert.assertEquals(Util.getUrl(),expectedUrl,"User is not able to navigate to the categoryPage");


    }
}
