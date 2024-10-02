declare namespace Cypress {
  interface Chainable {
    /**
     * Custom command to visit the base URL of the app.
     */
    visitCypress(): Chainable<void>;
  }
}
