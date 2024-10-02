import { searchBox } from './page_objects/search_bar';

export function acceptCookies(): void {
  cy.get('button', { timeout: 10000 })
    .contains('Accept All')
    .click({ force: true });
}

export function clickSearchBox(): void {
  cy.get(searchBox).should('be.visible').click();
}
export function closeModal(): void {
  cy.get('body').type('{esc}');
}
