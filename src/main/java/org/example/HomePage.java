package org.example;

import org.openqa.selenium.By;
import org.testng.asserts.SoftAssert;

public class HomePage extends Util {
    private String  expectedHomePage="http://tutorialsninja.com/demo/";

    //private By _PhoneAndPDS=By.xpath("//a[text()=&quot;Phones &amp; PDAs&quot;]");
    private By _PhoneAndPDS=By.linkText("Phones & PDAs");
    SoftAssert softAssert = new SoftAssert();
    private String ExpectedUrlHomePage="http://tutorialsninja.com/demo/";
    private By _PhoneAndPDAs=By.xpath("//a[text()=\"Phones & PDAs\"]");
    public void VerifyuserisonHomePage(){

       // String ActualUrlHomePage = driver.getCurrentUrl();
        //softAssert.assertEquals((ActualUrlHomePage),ExpectedUrlHomePage, "expected with actual");
       // softAssert.assertAll();
    }
    public void userClickOnCategoryLink(String categoryLink){
        clickOnElement(By.linkText(categoryLink));
}
    public void clickOnPhoneAndPDAS(){
        clickOnElement(_PhoneAndPDS);

    }
}
