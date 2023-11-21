Feature: Locator Options

    Scenario: Fill in username and click login
        Given I go to 'https://saucedemo.com'

        Then I get the textbox based on ID
        And I get the textbox based on name
        And I get the button based on text
        And I get the button based on has-text
