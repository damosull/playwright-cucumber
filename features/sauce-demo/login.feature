Feature: Login

              As a user
              I want to log into the application

        Scenario: Login with valid credentials
            Given I visit the login page
             When I fill the login form with valid credentials
             Then I should see the home page

        Scenario Outline: Login with Invalid Credentials
            Given I visit the login page
             When I fill the login form with '<username>' and '<password>'
             Then I wait for 3 seconds

        Examples:
                  | username | password |
                  | fail-1   | fail-1   |
                  | fail-2   | fail-2   |
                  | fail-3   | fail-3   |