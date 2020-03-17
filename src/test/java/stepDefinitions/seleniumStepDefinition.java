package stepDefinitions;

import org.junit.runner.RunWith;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import CucumberProject.CucAutomation.Base;
import PageObjects.HomePage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.junit.Cucumber;
import org.junit.Assert;


@RunWith(Cucumber.class)
public class seleniumStepDefinition {
	
		public WebDriver driver;
		HomePage hp;
	
	    @Given("^User is on GreenKart lading page$")
	    public void user_is_on_greenkart_lading_page() throws Throwable {
	        
	    	driver=Base.getDriver();
	    	Thread.sleep(5000);
	    	
	    }

	   @When("^User search for (.+) vegetable$")
	    public void user_search_for_something_vegetable(String strArg1) throws Throwable {
		   hp=new HomePage(driver);
	    	hp.getSearchText().sendKeys(strArg1);
	    	Thread.sleep(5000);
	    	
	    	
	    }
	    
	/*    @When("^User search for (.+) vegetables $")
	    public void user_search_for_vegetables(String name) throws Throwable {
	    	hp=new HomePage(driver);
	    	hp.getSearchText().sendKeys(name);
	    	Thread.sleep(5000);
	    }*/
	 
	    
	    

	    @Then("^\"([^\"]*)\" results are displayed$")
	    public void something_results_are_displayed(String strArg1) throws Throwable {
	     
	    	Assert.assertTrue(driver.findElement(By.cssSelector("h4.product-name")).getText().contains(strArg1));
	    }
	    
	  /*  @Then("^Verify selected \"([^\"]*)\" items are displayed in checkout page$")
	    public void verify_selected_something_items_are_displayed_in_checkout_page(String strArg1) throws Throwable {
	       
	    	
	    }*/
	    
	 /*   @Then("^Verify selected (.+) items are displayed in checkout page $")
	    public void verify_selected_items_are_displayed_in_checkout_page(String name) throws Throwable {
	    	Assert.assertTrue(driver.findElement(By.cssSelector("p.product-name")).getText().contains(name));
	    }*/
	
	    @Then("^Verify selected (.+) items are displayed in checkout page$")
	    public void verify_selected_items_are_displayed_in_checkout_page(String name) throws Throwable {
	    	Assert.assertTrue(driver.findElement(By.cssSelector("p.product-name")).getText().contains(name));
	    }
	    

	    @And("^Added item to cart$")
	    public void added_item_to_cart() throws Throwable {
	       
	    	driver.findElement(By.cssSelector("a.increment")).click();
	    	Thread.sleep(5000);
	    	driver.findElement(By.xpath("//button[contains(text(),'ADD TO CART')]")).click();
	    	Thread.sleep(10000);
	    }

	    @And("^User proceeded to checkout page for purchase$")
	    public void user_proceeded_to_checkout_page_for_purchase() throws Throwable {
	    	
	    	driver.findElement(By.xpath("//a[@class='cart-icon']//img[contains(@class,'')]")).click();
	    	Thread.sleep(5000);
	    	driver.findElement(By.xpath("//button[contains(text(),'PROCEED TO CHECKOUT')]")).click();
	    	Thread.sleep(5000);
	        
	    }

	
}
