package org.example;

import org.openqa.selenium.chrome.ChromeDriver;

import java.util.concurrent.TimeUnit;

public class BrowserManager extends Util {
    public void chromeBrowser(){
        //System.setProperty("webdriver.chrome.driver","src\\test\\resources\\BrowserDriver\\chromedriver.exe");
       // System.setProperty("webdriver.chrome.driver", "C:\\soft\\chromedriver.exe");
System.setProperty("webdriver.chrome.driver","src\\test\\BrowserDriver\\chromedriver.exe");
        driver=new ChromeDriver();
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
        driver.get("http://tutorialsninja.com/demo/");

    }
    public void closeBrowser(){
        driver.close();
    }
}
