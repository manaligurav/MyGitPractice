package PageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class HomePage {
	
	public WebDriver driver;
	
	public HomePage(WebDriver driver)
	{
		this.driver=driver;
	}
	By searchText=By.xpath("//input[@type='search']");

	public WebElement getSearchText()
	{
		return(driver.findElement(searchText));
		
	}
}
