Feature: Send the contact formular

  Scenario: Fill the fields in the contact form and send it
    Given I launch chrome browser
    When I open hiberus home page
    Then Accept the cookies to close it
    And Click on contactos button
    And Fill the name field
    Then Close browser