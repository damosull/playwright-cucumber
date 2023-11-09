Feature: Add Post

    Scenario: Add Post
        Given I am on the login page
        When I log in with valid credentials
        And I click on New Post button
        And I fill the requried fields
        And I publish the article
        # Todo: Below step fails as I'm getting a 401 Unathorized when trying to publish the article.
        Then I see the article posted