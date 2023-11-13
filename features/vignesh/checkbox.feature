Feature: Checkbox

    Background:
        Given I go to 'http://demo.automationtesting.in/Register.html'
        And I click "Do not consent"

    Scenario: Fill Method
        Then the checkboxes are not checked
        When I check the '1st' checkbox
        Then the '1st' checkbox is checked
        When I check the '2nd' checkbox
        Then the '2nd' checkbox is checked
        When I check the '3rd' checkbox
        Then the '3rd' checkbox is checked
