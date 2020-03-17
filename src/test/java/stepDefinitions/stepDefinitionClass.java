package stepDefinitions;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;
import cucumber.api.DataTable;
import cucumber.api.java.en.And;
import cucumber.api.junit.Cucumber;

import java.util.List;

import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
public class stepDefinitionClass {

	 @Given("^User is on NetBanking landing page$")
	    public void user_is_on_netbanking_landing_page() throws Throwable {
		 System.out.println("User is on NetBanking landing page");
	       
	    }
	
	 @When("^User enters username \"([^\"]*)\" and password \"([^\"]*)\" and hits login button$")
	    public void user_enters_username_something_and_password_something_and_hits_login_button(String strArg1, String strArg2) throws Throwable {   
		 
		 System.out.println("Username--" +strArg1 +"Password--" +strArg2);
    }
	
	 @When("^User sign up with following details$")
	    public void user_sign_up_with_following_details(DataTable data) throws Throwable {
		 
		 List<List<String>> obj=data.raw();
		 System.out.println("Username--"+obj.get(0).get(0));
		 System.out.println("Password--"+obj.get(0).get(1));
		 System.out.println("Email--"+obj.get(0).get(2));
		 System.out.println("Country--"+obj.get(0).get(3));
		 System.out.println("Zip Code--"+obj.get(0).get(4));
		 
	        
	    }
	 
	 @When("^User enters username (.+) password (.+) and hits login button$")
	    public void user_enters_username_password_and_hits_login_button(String username, String password) throws Throwable {
		 System.out.println("Username---" +username);
		 System.out.println("Password---" +password);
	    }

    @Then("^Home page is displayed$")
    public void home_page_is_displayed() throws Throwable {
    	System.out.println("Home page is displayed");
    }

    @And("^Cards displayed are \"([^\"]*)\"$")
    public void cards_displayed_are_something(String strArg1) throws Throwable {
      System.out.println("Cards displayed are-"+strArg1);
      
      
    }
    
    @And("^Cards displayed (.+)$")
    public void cards_displayed(String truefalse) throws Throwable {
    	System.out.println("True/False---" +truefalse);
    }

}