$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("search.feature");
formatter.feature({
  "line": 1,
  "name": "Search and place order for vegetables",
  "description": "",
  "id": "search-and-place-order-for-vegetables",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Search for items and validate results",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-validate-results",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User is on GreenKart lading page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "User search for Cucumber vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "\"Cucumber\" results are displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumStepDefinition.user_is_on_greenkart_lading_page()"
});
formatter.result({
  "duration": 16202195500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 16
    }
  ],
  "location": "seleniumStepDefinition.user_search_for_something_vegetable(String)"
});
formatter.result({
  "duration": 5281987800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Cucumber",
      "offset": 1
    }
  ],
  "location": "seleniumStepDefinition.something_results_are_displayed(String)"
});
formatter.result({
  "duration": 68964000,
  "status": "passed"
});
formatter.after({
  "duration": 96418000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 11,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on GreenKart lading page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User search for \u003cName\u003e vegetable",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Added item to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify selected \u003cName\u003e items are displayed in checkout page",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;",
  "rows": [
    {
      "cells": [
        "Name"
      ],
      "line": 19,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;1"
    },
    {
      "cells": [
        "Brinjal"
      ],
      "line": 20,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2"
    },
    {
      "cells": [
        "Beetroot"
      ],
      "line": 21,
      "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on GreenKart lading page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User search for Brinjal vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Added item to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify selected Brinjal items are displayed in checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumStepDefinition.user_is_on_greenkart_lading_page()"
});
formatter.result({
  "duration": 14564280100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "seleniumStepDefinition.user_search_for_something_vegetable(String)"
});
formatter.result({
  "duration": 5165619700,
  "status": "passed"
});
formatter.match({
  "location": "seleniumStepDefinition.added_item_to_cart()"
});
formatter.result({
  "duration": 15254488800,
  "status": "passed"
});
formatter.match({
  "location": "seleniumStepDefinition.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 10220117100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Brinjal",
      "offset": 16
    }
  ],
  "location": "seleniumStepDefinition.verify_selected_items_are_displayed_in_checkout_page(String)"
});
formatter.result({
  "duration": 73062300,
  "status": "passed"
});
formatter.after({
  "duration": 92471300,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Search for items and then move to checkout page",
  "description": "",
  "id": "search-and-place-order-for-vegetables;search-for-items-and-then-move-to-checkout-page;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@SeleniumTest"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "User is on GreenKart lading page",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "User search for Beetroot vegetable",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "Added item to cart",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "User proceeded to checkout page for purchase",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "Verify selected Beetroot items are displayed in checkout page",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "seleniumStepDefinition.user_is_on_greenkart_lading_page()"
});
formatter.result({
  "duration": 14986140000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "seleniumStepDefinition.user_search_for_something_vegetable(String)"
});
formatter.result({
  "duration": 5160807000,
  "status": "passed"
});
formatter.match({
  "location": "seleniumStepDefinition.added_item_to_cart()"
});
formatter.result({
  "duration": 15278006600,
  "status": "passed"
});
formatter.match({
  "location": "seleniumStepDefinition.user_proceeded_to_checkout_page_for_purchase()"
});
formatter.result({
  "duration": 10279357400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Beetroot",
      "offset": 16
    }
  ],
  "location": "seleniumStepDefinition.verify_selected_items_are_displayed_in_checkout_page(String)"
});
formatter.result({
  "duration": 75080400,
  "status": "passed"
});
formatter.after({
  "duration": 135283900,
  "status": "passed"
});
});