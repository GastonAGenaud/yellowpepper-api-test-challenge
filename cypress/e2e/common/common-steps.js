import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

let path, fixture;
const url = Cypress.env("API_URL");

Given('I have the path {string} and the JSON fixture {string}', (givenPath, givenFixture) => {
  path = url + givenPath;
  fixture = givenFixture;
});
Given('I have the path {string}', (givenPath) => {
  path = url + givenPath;
});

When('I send a GET request', () => {
  cy.apiGet(path);
});

When('I send a POST request', () => {
  cy.fixture(fixture).then((body) => {
    cy.apiPost(path, body);
  });
});

When('I send a PUT request', () => {
  cy.fixture(fixture).then((body) => {
    cy.apiPut(path, body);
  });
});

When('I send a DELETE request', () => {
  cy.apiDelete(path);
});

Then('the response status should be {string}', (statusCode) => {
  cy.get('@response').should((response) => {
    expect(response.status).to.eq(Number(statusCode));
  });
  cy.get('@response').then((response) => {
    cy.log('Response: \n' + JSON.stringify(response.body));
  });
});
