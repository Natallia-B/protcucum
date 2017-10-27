Feature: Example feature
  As a user of PI
  I want to be able to navigate to dashboard.

  Background:
    Given I navigate to Research Sample
  
  # Scenario: Add sample preparation
  #   Given I am on the Sample page
  #   When I Select CIP
  #   When I navigate to Edit opportunity
  #   When I add company
  #   When I add opportunity
  #   When I select product
  #   When I select outcome
    # Then I am on Add contact page

  Scenario: Add sample
    Given I am on the Sample page
    When I Select CIP
    When Open edit opportunity
    When Company
    # When I add opportunity
    # When I select product
    # When I select outcome
    # Then I am on Add contact page