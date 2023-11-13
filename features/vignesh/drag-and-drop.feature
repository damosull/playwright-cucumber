Feature: Drag & Drop

    Background:
        Given I go to 'http://dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html'

    Scenario: Approach 1
        Then I hover over 'Washington' and use mouse controls to move it into 'United States'

    Scenario: Approach 2
        Then I can drag 'Washington' into 'United States'