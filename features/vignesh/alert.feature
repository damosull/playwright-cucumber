Feature: Alerts

    Scenario: Simple Alert
        Given I go to 'https://the-internet.herokuapp.com/javascript_alerts'
        Then I click the Simple Alert button and the Accept button

    Scenario: Confirm Alert - OK Button
        Given I go to 'https://the-internet.herokuapp.com/javascript_alerts'
        Then I click the Confirm Alert button and the OK button

    Scenario: Confirm Alert - Cancel Button
        Given I go to 'https://the-internet.herokuapp.com/javascript_alerts'
        Then I click the Confirm Alert button and the Cancel button

    Scenario: Prompt Alert - OK Button
        Given I go to 'https://the-internet.herokuapp.com/javascript_alerts'
        Then I open the Prompt and enter some text and click OK

    Scenario: Prompt Alert - Cancel Button
        Given I go to 'https://the-internet.herokuapp.com/javascript_alerts'
        Then I open the Prompt and enter some text and click Cancel