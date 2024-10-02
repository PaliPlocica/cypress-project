import { acceptCookies } from '../support/functions';
import {
  mainSections,
  queryDashboard,
  sideBar,
  sideBarAll,
} from '../support/page_objects/dashboard';

describe('Dashboard Menu', () => {
  beforeEach(() => {
    cy.visitCypress();
    acceptCookies();
  });

  it('Verify displayed search bar', () => {
    cy.get(sideBarAll, { timeout: 20000 }).should('be.visible');

    mainSections.forEach((section) => {
      cy.get(sideBar).find('button').contains(section).should('be.visible');
    });
  });

  it('Navigate to category and subcategory', () => {
    cy.get(sideBar).find('button').contains(mainSections[1]).click();

    // .within() for scoping
    cy.get(sideBar)
      .find('li')
      .contains(mainSections[1])
      .parents('li.list-none.p-0')
      .click()
      .within(() => {
        cy.get('a').contains('Installing Cypress').should('be.visible');
        cy.get('a')
          .eq(0)
          .should('have.attr', 'href', queryDashboard.guidesInstallingCypress);
      });
    cy.url().should('include', queryDashboard.gettingStartedInstallingCypress);
  });
});
