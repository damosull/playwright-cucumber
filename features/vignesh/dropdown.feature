Feature: Dropdown

    Scenario: Single Static Dropdown - able to select one option
        Given I go to 'http://demo.automationtesting.in/Register.html'
        And I click "Do not consent"
        Then I select an option by value 'Android'
        And I select an option by label 'Art Design'
        And I select an option by index 3

    Scenario: Single Static Dropdown - able to select multiple options
        Given I go to 'https://lambdatest.com/selenium-playground/select-dropdown-demo'
        Then I select multiple optiobs by value, label, and index

    Scenario: Dynamic Dropdown - Searchable
        Given I go to 'https://demo.automationtesting.in/Register.html'
        And I click 'Do not consent'
        When I search for 'Denmark'
        Then I click the country result

    Scenario: Dynamic Dropdown - Non Searchable
        Given I go to 'https://demo.automationtesting.in/Register.html'
        And I click 'Do not consent'
        Then I select 'Denmark'