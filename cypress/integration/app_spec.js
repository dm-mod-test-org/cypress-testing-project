describe('App Page', () => {
  beforeEach(() => {
    cy.visitHomePage();
  });

  it('should have the correct page title', () => {
    cy.title().should('eq', 'Testing Frameworks for Javascript | Write, Run, Debug | Cypress');
  });
});