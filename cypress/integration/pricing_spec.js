describe('Pricing Page', () => {
  beforeEach(() => {
    cy.visit('/pricing');
  });

  it('should have the correct page title', () => {
    cy.title().should('eq', 'Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing');
  });
});