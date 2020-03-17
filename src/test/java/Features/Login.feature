Feature: Application login

Scenario: Home page displayed by default after login

Given User is on NetBanking landing page
When User enters username "abcd" and password "1234" and hits login button
Then Home page is displayed
And Cards displayed are "true"

Scenario: Home page displayed by default after login

Given User is on NetBanking landing page
When User enters username "qwed" and password "6789" and hits login button
Then Home page is displayed
And Cards displayed are "false"

Scenario: Home page displayed by default after login

Given User is on NetBanking landing page
When User sign up with following details
|john|johnpass|john@abc.com|Australia|08817|
Then Home page is displayed
And Cards displayed are "false"


Scenario Outline: Home page displayed by default after login

Given User is on NetBanking landing page
When User enters username <Username> password <Password> and hits login button
Then Home page is displayed
And Cards displayed <TrueFalse>

Examples:
|Username|Password|TrueFalse|
|user1   |pass1   |true1    |
|user2   |pass2   |true2    |
|user3   |pass3   |true3    |
|user4   |pass4   |true4    |

