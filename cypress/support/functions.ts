import { searchBox } from './page_objects/search_bar';

// export function acceptCookies(): void {
//   cy.get('button')
//     .contains('Accept All', { timeout: 10000 })
//     .click({ force: true });
// }

export function acceptCookies(): void {
  cy.get('body').then(($body) => {
    // Check if the button containing 'Accept All' exists
    if ($body.find('button:contains("Accept All")').length > 0) {
      // Click the button if it exists
      cy.get('button').contains('Accept All').click({ force: true });
    }
    // If the button does not exist, the test will continue without failing
  });
}

export function clickSearchBox(): void {
  cy.get(searchBox).should('be.visible').click();
}
export function closeModal(): void {
  cy.get('body').type('{esc}');
}
