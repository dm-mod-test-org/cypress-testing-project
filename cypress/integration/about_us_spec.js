describe('About Us Page', () => {
  it('should have the correct page title', () => {
    cy.visit('/about-us');
    cy.title().should('eq', 'About Cypress | Cypress.io Testing Tools (Component Tests & More)');
  });
});