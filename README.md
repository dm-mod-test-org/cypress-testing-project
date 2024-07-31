# Cypress Testing Project

This project contains Cypress tests for different pages of a website. It uses Cypress, a powerful testing framework for JavaScript.

## Project Structure

```
cypress-testing-project
├── cypress
│   ├── integration
│   │   ├── app_spec.js
│   │   ├── about_us_spec.js
│   │   └── pricing_spec.js
│   ├── support
│   │   ├── commands.js
│   │   └── index.js
│   └── plugins
│       └── index.js
├── package.json
├── cypress.json
└── README.md
```

## Cypress Tests

The project includes the following Cypress tests:

- `cypress/integration/app_spec.js`: This test navigates to the `/app` page and asserts the page title to be "Testing Frameworks for Javascript | Write, Run, Debug | Cypress".

- `cypress/integration/about_us_spec.js`: This test navigates to the `/about-us` page and asserts the page title to be "About Cypress | Cypress.io Testing Tools (Component Tests & More)".

- `cypress/integration/pricing_spec.js`: This test navigates to the `/pricing` page and asserts the page title to be "Scale Open-Source Testing with Cypress Cloud | Cypress Cloud Pricing".

## Custom Command

The project includes a custom command `cy.visitHomePage` defined in `cypress/support/commands.js`. This command navigates to the base URL and asserts the page title to be "Testing Frameworks for Javascript | Write, Run, Debug | Cypress".

## Configuration Files

- `cypress/support/index.js`: This file is the entry point for Cypress support files.

- `cypress/plugins/index.js`: This file is the entry point for Cypress plugins.

- `package.json`: This file is the configuration file for npm. It lists the dependencies and scripts for the project. It includes the dependency for mochawesome 7.1.3 for reporting.

- `cypress.json`: This file is the configuration file for Cypress. It specifies the base URL and other Cypress-specific configurations.

## Setup and Execution

To set up Cypress locally on a Mac and execute the tests, follow these steps:

1. Clone the repository to your local machine.

2. Install the dependencies by running the following command in the project root directory:

   ```
   npm install
   ```

3. Open Cypress by running the following command:

   ```
   npx cypress open
   ```

4. In the Cypress Test Runner, click on the test file you want to run (`app_spec.js`, `about_us_spec.js`, or `pricing_spec.js`).

5. The test will run in a new browser window. You can view the test execution and results in the Cypress Test Runner.

That's it! You have successfully set up Cypress locally on your Mac and executed the tests.

Feel free to explore the project and add more tests as needed. Happy testing!