Feature: Store API

  Scenario: Get pet inventories by status
    Given I have the path "/store/inventory"
    When I send a GET request
    Then the response status should be "200"

  Scenario: Place an order for a pet
    Given I have the path "/store/order" and the JSON fixture "store/new_order.json"
    When I send a POST request
    Then the response status should be "200"

  Scenario: Place an order for a pet with invalid input
    Given I have the path "/store/order" and the JSON fixture "store/invalid_order.json"
    When I send a POST request
    Then the response status should be "405"

  Scenario: Find purchase order by ID
    Given I have the path "/store/order/1"
    When I send a GET request
    Then the response status should be "200"

  Scenario: Find purchase order by invalid ID
    Given I have the path "/store/order/invalid_id"
    When I send a GET request
    Then the response status should be "400"

  Scenario: Find purchase order by non-existent ID
    Given I have the path "/store/order/404"
    When I send a GET request
    Then the response status should be "404"

  Scenario: Delete purchase order by ID
    Given I have the path "/store/order/1"
    When I send a DELETE request
    Then the response status should be "200"

  Scenario: Delete purchase order by invalid ID
    Given I have the path "/store/order/invalid_id"
    When I send a DELETE request
    Then the response status should be "400"

  Scenario: Delete purchase order by non-existent ID
    Given I have the path "/store/order/40404"
    When I send a DELETE request
    Then the response status should be "404"
