import {
  acceptCookies,
  clickSearchBox,
  closeModal,
} from '../support/functions';
import {
  modal,
  SearchBar,
  SearchItem,
} from '../support/page_objects/search_bar';

describe('Site Search Bar', () => {
  beforeEach(() => {
    cy.visitCypress();
    acceptCookies();
  });

  it('Verify displayed search bar', () => {
    clickSearchBox();
    cy.get(modal.docSearchInput).should('exist');
  });

  it('Positive scenario', () => {
    const searchPositive = 'End-to-End';

    SearchBar.getSearchModal().should('not.exist');
    clickSearchBox();
    SearchBar.getSearchModal().should('exist');
    cy.get(modal.docSearchInput).click().type(searchPositive);
    cy.get(modal.docSearchHitsFooter)
      .invoke('text')
      .should('match', /See all \d+ results/);
    cy.get(modal.docSearchHitsFooter, { timeout: 5000 })
      .should('be.visible')
      .within(() => {
        cy.get('a')
          .should('have.attr', 'href')
          .and('include', `/search?q=${searchPositive}`);
      });
    SearchItem.getSearchItem(0).should('contain.text', searchPositive);
    cy.get(modal.docSearchReset).click();
    cy.get(modal.docSearchHelp).should('contain', 'No recent searches');
    closeModal(), SearchBar.getSearchModal().should('not.exist');
  });

  it('Negative scenario', () => {
    const searchNegative = '!$5';

    clickSearchBox();
    cy.get(modal.docSearchInput).click().type(searchNegative);
    cy.get(modal.docSearchTitle).should(
      'have.text',
      `No results for "${searchNegative}"`,
    );
    cy.get(modal.docSearchHelp).should('contain', 'Try searching for:');

    SearchItem.getNoResults()
      .should('be.visible')
      .within(() => {
        cy.get('button')
          .should('have.text', 'undefined')
          .should('have.attr', 'type', 'button');
      });
  });
});
