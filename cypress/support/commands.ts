/// <reference types="cypress" />

Cypress.Commands.add('visitCypress', () => {
  cy.visit('/', { timeout: 10000 });
});
