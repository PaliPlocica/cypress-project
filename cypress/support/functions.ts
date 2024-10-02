import { searchBox } from './page_objects/search_bar';

export function acceptCookies(): void {
  cy.get('.osano-cm-accept-all', { timeout: 5000 }).then(($button) => {
    if ($button.length > 0) {
      cy.wrap($button).contains('Accept All').click({ force: true });
    }
  });
}

export function clickSearchBox(): void {
  cy.get(searchBox).should('be.visible').click();
}
export function closeModal(): void {
  cy.get('body').type('{esc}');
}
