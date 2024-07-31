// Custom command to navigate to the base URL and assert the page title
Cypress.Commands.add("visitHomePage", () => {
  cy.visit("/");
  cy.title().should(
    "eq",
    "Testing Frameworks for Javascript | Write, Run, Debug | Cypress"
  );
});