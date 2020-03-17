Feature: Search and place order for vegetables

@SeleniumTest
Scenario: Search for items and validate results
Given User is on GreenKart lading page
When User search for Cucumber vegetable
Then "Cucumber" results are displayed


@SeleniumTest
Scenario Outline: Search for items and then move to checkout page
Given User is on GreenKart lading page
When User search for <Name> vegetable
And Added item to cart
And User proceeded to checkout page for purchase
Then Verify selected <Name> items are displayed in checkout page 

Examples:
|Name		|
|Brinjal	|
|Beetroot	|
