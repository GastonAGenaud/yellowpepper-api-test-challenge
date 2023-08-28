Feature: Pet API

  Scenario: Update an existing pet
    Given I have the path "/pet" and the JSON fixture "pet/update_pet.json"
    When I send a PUT request
    Then the response status should be "200"

  Scenario: Update an existing pet with invalid data
    Given I have the path "/pet" and the JSON fixture "pet/invalid_pet.json"
    When I send a PUT request
    Then the response status should be "400"

  Scenario: Add a new pet to the store
    Given I have the path "/pet" and the JSON fixture "pet/new_pet.json"
    When I send a POST request
    Then the response status should be "200"

  Scenario: Add a new pet to the store with invalid data
    Given I have the path "/pet" and the JSON fixture "pet/invalid_pet.json"
    When I send a POST request
    Then the response status should be "400"

  Scenario: Find pets by status
    Given I have the path "/pet/findByStatus?status=available" and the JSON fixture "pet/status.json"
    When I send a GET request
    Then the response status should be "200"

  Scenario: Find pets by status with invalid data
    Given I have the path "/pet/findByStatus" and the JSON fixture "pet/invalid_status.json"
    When I send a GET request
    Then the response status should be "400"