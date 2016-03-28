Feature: File upload
  As a user
  I want to upload a file to the configurator
  So that I can send it to print

  Scenario: Upload and preview file in 3-Rings Binder
    Given I am on punchout
    And I choose "3-Rings Binder" as a product
    When I upload a "PAGES_3_LETTER_PORTRAIT" file
    Then I should see the file preview
    Then I should see the preview "3" pages and price "$3.60"
    Then I choose Add To Cart





