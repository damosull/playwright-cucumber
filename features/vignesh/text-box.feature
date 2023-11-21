Feature: Ways to type in a textbox

    Scenario: Fill in username and password and submit
        Given I go to 'https://opensource-demo.orangehrmlive.com'
        When I fill in the 'Admin' username
        And I press sequentially with a delay the "admin123" password
        And I press the Enter key
