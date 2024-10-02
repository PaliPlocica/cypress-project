import { searchBox } from './page_objects/search_bar';

export function acceptCookies(): void {
  cy.get('button')
    .contains('Accept All', { timeout: 10000 })
    .then(($button) => {
      if ($button.length > 0) {
        // Directly trigger a click event if the button exists
        $button.click({ force: true });
      }
    });
}

export function clickSearchBox(): void {
  cy.get(searchBox).should('be.visible').click();
}
export function closeModal(): void {
  cy.get('body').type('{esc}');
}
