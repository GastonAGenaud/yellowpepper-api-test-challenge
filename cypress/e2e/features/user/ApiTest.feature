Feature: User API

  Scenario: Create a new user
    Given I have the path "/user" and the JSON fixture "user/new_user.json"
    When I send a POST request
    Then the response status should be "200"

  Scenario: Create a list of users with given input array
    Given I have the path "/user/createWithList" and the JSON fixture "user/user_list.json"
    When I send a POST request
    Then the response status should be "200"

  Scenario: Log user into the system
    Given I have the path "/user/login"
    When I send a GET request
    Then the response status should be "200"

  Scenario: Log user into the system with invalid credentials
    Given I have the path "/user/login?username=&password="
    When I send a GET request
    Then the response status should be "400"

  Scenario: Log out current logged-in user session
    Given I have the path "/user/logout"
    When I send a GET request
    Then the response status should be "200"

  Scenario: Get user by username
    Given I have the path "/user/theUser"
    When I send a GET request
    Then the response status should be "200"

  Scenario: Get user by invalid username
    Given I have the path "/user/40$404"
    When I send a GET request
    Then the response status should be "400"

  Scenario: Get user by non-existent username
    Given I have the path "/user/johndoerr"
    When I send a GET request
    Then the response status should be "404"

  Scenario: Update user by username
    Given I have the path "/user/theUser" and the JSON fixture "user/update_user.json"
    When I send a PUT request
    Then the response status should be "200"

  Scenario: Delete user by username
    Given I have the path "/user/theUser"
    When I send a DELETE request
    Then the response status should be "200"

  Scenario: Delete user by invalid username
    Given I have the path "/user/40$404"
    When I send a DELETE request
    Then the response status should be "400"

  Scenario: Delete user by non-existent username
    Given I have the path "/user/johndoerr"
    When I send a DELETE request
    Then the response status should be "404"
