Feature: Calendar

    Background:
        Given I go to 'https://lambdatest.com/selenium-playground/bootstrap-date-picker-demo'

    Scenario: Fill Method
        When I fill the date as '1994-10-24'

    Scenario Outline: Using Luxon
        When I enter a date '<Date>' '<Month Year>'
        Examples:
            | Description | Date | Month Year |
            | Past Date   | 20   | June 2019  |
            | Future Date | 27   | April 2032 |