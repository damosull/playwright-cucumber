Feature: File Upload

    Background:
        Given I go to 'https://blueimp.github.io/jQuery-File-Upload/'

    Scenario: Approach 1 (waitForEvent filechooser)
        When I click on the file input field
        Then I choose a file to upload

    Scenario: Approach 2 (page.setInputFiles())
        Then I upload a file from my file system
