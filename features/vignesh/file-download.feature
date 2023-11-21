Feature: File Download

    Scenario: Downloading File
        Given I go to 'https://demo.automationtesting.in/FileDownload.html'
        And I click "Do not consent"
        And I type 'Playwright Udemy Course' as the file name
        Then I download the file with the default file name
        And I download the file with the file name 'downloaded-file.txt'
