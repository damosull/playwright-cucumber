Feature: Radio Buttons

    Scenario: Verify radio buttons functionality
        Given I go to 'https://demo.automationtesting.in/Register.html'
        And I click 'Do not consent'
        And the Male radio button is not checked
        And the Female radio button is not checked

        When I check the Male radio button
        Then the Male radio button is checked

        When I check the Female radio button
        Then the Female radio button is checked