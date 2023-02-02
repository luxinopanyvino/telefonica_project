Feature: Web app testing
    Scenario: Enter in the hiberus web page
        Given I launch chrome browser
        When I open hiberus home page
        Then Accept the cookies to close it
        And close browser