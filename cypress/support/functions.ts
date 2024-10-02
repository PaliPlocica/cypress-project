import { searchBox } from './page_objects/search_bar';

// export function acceptCookies(): void {
//   cy.get('.osano-cm-accept-all', { timeout: 5000 }).then(($button) => {
//     if ($button.length > 0) {
//       cy.wrap($button).contains('Accept All').click({ force: true });
//     }
//   });
// }

export function acceptCookies(): void {
  // Attempt to get the button, but if it doesn't exist, don't fail
  cy.get('button:contains("Accept All")', { timeout: 10000 }).then(
    ($button) => {
      if ($button.length > 0) {
        // If the button exists, click it
        cy.wrap($button).click({ force: true });
      }
    },
  );
}

export function clickSearchBox(): void {
  cy.get(searchBox).should('be.visible').click();
}
export function closeModal(): void {
  cy.get('body').type('{esc}');
}
