package com.example.springbootmicroservicewrapperwithtests;

import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;
public class DemoTest {
    @Test
    public void demoTest(){
        System.setProperty("selenide.browser", "Chrome");
        open("http://www.google.com");

        WebElement queryBox = $(By.name("q"));
        queryBox.sendKeys("Kent Beck");
        queryBox.submit();

        $("body").shouldHave(text("extreme programming"));
       }
}
