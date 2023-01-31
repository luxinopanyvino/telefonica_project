Feature: Acting in Hiberus home page. Demonstrating some assertion and scooping methods

  Scenario: User navigates to home page and accept the Hiberus's cookies
    Given launch chrome browser
    When open hiberus home page
    Then accept the cookies to close it
    And close browser


