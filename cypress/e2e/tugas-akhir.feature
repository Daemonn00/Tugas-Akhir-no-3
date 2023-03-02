Feature: Payment Method

    As a user
    i want to buy product from the website

    Scenario: Try to buy product with valid credit card payment method
    Given I open the website
    When I click the buy button
    And I click the check out button
    And I select credit debit card method
    And I fill the information with valid data
    And I click pay now button
    Then I should see my order

    Scenario: Try to buy product with invalid credit card payment method
    Given I open the website
    When I click the buy button
    And I click the check out button
    And I select credit debit card method
    And I fill the information with invalid data
    And I click pay now button
    Then I should see unable to proceed

    Scenario: Try to buy product with bank transfer payment method
    Given I open the website
    When I click the buy button
    And I click the check out button
    And I select bank transfer method
    And I select BCA
    Then I should see va code

    Scenario: Try to buy product with gopay e-wallet payment method
    Given I open the website
    When I click the buy button
    And I click the check out button
    And I select gopay method
    Then I should see gopay qr code

    Scenario: Try to buy product with valid kredivo payment method
    Given I open the website
    When I click the buy button
    And I click the check out button
    And I select kredivo method
    And I click pay now button in kredivo
    And I input valid phone number and pin
    And I input otp number
    Then I should see notification Transaction is Successful

    Scenario: Try to buy product with invalid kredivo payment method
    Given I open the website
    When I click the buy button
    And I click the check out button
    And I select kredivo method
    And I click pay now button in kredivo
    And I input invalid phone number and pin
    And I input otp number
    Then I should see notification Transaction is Denied

    Scenario: Try to buy product with alfa group payment method
    Given I open the website
    When I click the buy button
    And I click the check out button
    And I select alfa group method
    Then I should see alfa payment code