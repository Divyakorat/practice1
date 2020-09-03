package org.example;

import org.openqa.selenium.By;

public class PhoneCategory extends Util {
    private By _HTCTouchHDAddToCart=By.xpath("//div[@class=&quot;row&quot;]/div[1]/div[1]/div[2]/div[2]/button/span");
    private By _iPhoneAddToCart=By.xpath("//div[@class=&quot;row&quot;]/div[2]/div[1]/div[2]/div[2]/button/span");
    private By _shoppingCart=By.xpath("//span[text()=&quot;Shopping Cart&quot;]");
    public void userAbleToAddToCartBothProductSuccsfully(){
        clickOnElement(_HTCTouchHDAddToCart);
        clickOnElement(_iPhoneAddToCart);
    }
    public void userAbleToClickOnShoppingCartButton(){
        clickOnElement(_shoppingCart);

    }
}
