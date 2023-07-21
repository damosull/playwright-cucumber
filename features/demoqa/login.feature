Feature: Login

              I want to read data from a JSON file & an XLSX file in the fixtures folder, & enter that on a form

        Background:
             When I go to the 'https://demoqa.com/automation-practice-form' page
             
        Scenario: Read JSON data
             Then I can enter data retrieved from a JSON file in the form

        Scenario: Read XLSX data
             Then I can enter data retrieved from a XLSX file in the form