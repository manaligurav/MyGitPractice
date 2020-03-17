package stepDefinitions;

import CucumberProject.CucAutomation.Base;
import cucumber.api.java.After;

public class Hooks extends Base{
	
	@After("@SeleniumTest")
	public void afterSeleniumTestcloseBrowser()
	{
		driver.close();
	}

}
