Feature: Buttons

    Background:
        Given I go to 'http://play1.automationcamp.ir/mouse_events.html'

    Scenario: Single Click
        When I click on the area
        Then the text reads 'Click'

    Scenario: Double Click
        When I double click on the area
        Then the text reads 'Double-Click'

    # Below scenario fails as I don't know how to focus back on the page (in order to close the context, etc. in the After hook)
    Scenario: Right Click
        When I right click on the area
        Then the text reads 'Right-Click'
