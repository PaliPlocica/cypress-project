export const pillGroup = [
  'Explore the Docs',
  'Learn with Tutorials',
  'CLI Docs',
  'Angular Language Service',
  'Angular DevTools',
];

export const searchBox = '.searchBox_H2mL';

export const modal = {
  docSearchInput: '#docsearch-input',
  docSearchHitsFooter: '.DocSearch-HitsFooter',
  docSearchReset: '.DocSearch-Reset',
  docSearchHelp: '.DocSearch-Help',
  docSearchTitle: '.DocSearch-Title',
};

export class SearchBar {
  static getSearchModal() {
    return cy.get('.DocSearch-Modal');
  }
}

export class SearchItem {
  static getSearchItem(index: number) {
    return cy.get(`#docsearch-item-${index}`);
  }

  static getNoResults() {
    return cy.get('.DocSearch-NoResults-Prefill-List', { timeout: 5000 });
  }
}
