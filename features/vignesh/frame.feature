Feature: Frame

        Background:
                Given I go to 'https://ui.vision/demo/webtest/frames/'
                And there are 7 frames

        Scenario: Get the Frame using page.frame()
                Then I get the frame using page.frame
                And I type text in the first frame

        Scenario: Get the Frame using page.frameLocator()
                Then I get the frame using page.frameLocator
                And I type text in the first frame

        Scenario: Nested Frames
                Then the 3rd frame has 1 child frames
                And I click buttons in the child frame
