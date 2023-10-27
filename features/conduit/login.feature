Feature: Login Feature

    Scenario: Login Scenario

        Given I am on the login page
        When I log in with valid credentials
        And I click on the settings button
        And I click on the log out button
        Then I route back to the home page