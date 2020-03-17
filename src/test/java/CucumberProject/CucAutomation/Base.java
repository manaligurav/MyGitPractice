package CucumberProject.CucAutomation;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class Base {

	public static WebDriver driver;
	
	public static WebDriver getDriver() throws IOException
	{
		Properties prop=new Properties();
		FileInputStream fis= new FileInputStream("C:\\Manali\\Selenium Projects\\CucAutomation\\src\\test\\java\\CucumberProject\\CucAutomation\\global.properties");
		prop.load(fis);
		System.setProperty("webdriver.chrome.driver", "C:\\Manali\\chromedriver.exe");
    	driver=new ChromeDriver();
    	driver.get(prop.getProperty("url"));
    	return driver;
	}
}
