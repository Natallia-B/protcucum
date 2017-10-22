Feature: Example feature
  As a user of PI
  I want to be able to navigate to dashboard.

  Background:
    Given I navigate to Research Sample
  
  Scenario: Log in to PI
    Given I am on the Sample page
    When I Select CIP
    # When I navigate to 'Sample'
    # When I am on the 'Sample' page
    # When I navigate to 'ADD SAMPLE'
    # When I am on the 'Edit Opportunity' page