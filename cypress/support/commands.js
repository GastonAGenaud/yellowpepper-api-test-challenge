// cypress/support/commands.js
import 'cypress-file-upload';
import "cypress-real-events";


Cypress.Commands.add('apiGet', (path) => {
  return cy.request({
    method: 'GET',
    url: path,
    failOnStatusCode: false
  }).then((response) => {
    return response;
  }).as('response');
});

Cypress.Commands.add('apiPost', (path, body) => {
  return cy.request({
    method: 'POST',
    url: path,
    body: body,
    failOnStatusCode: false
  }).then((response) => {
    return response;
  }).as('response');
});

Cypress.Commands.add('apiPut', (path, body) => {
  return cy.request({
    method: 'PUT',
    url: path,
    body: body,
    failOnStatusCode: false
  }).then((response) => {
    return response;
  }).as('response');
});

Cypress.Commands.add('apiDelete', (path) => {
  return cy.request({
    method: 'DELETE',
    url: path,
    failOnStatusCode: false
  },).then((response) => {
    return response;
  }).as('response');
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
