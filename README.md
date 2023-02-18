# cypress-pageobjects-utils

This framework tries to give solution for pageobjects and common utils

Open Cypress tool to run tests:<br>
<code>npx cypress open</code>

Run all tests:<br>
<code>npx cypress run</code>

Run single spec file:<br>
<code>npx cypress run --spec "cypress/e2e/SPEC_FILE_NAME.cy.js"</code>

Run spec folder:<br>
<code>npx cypress run --spec "cypress/e2e/FOLDER_NAME/*.cy.js"</code>


How to pass baseUrl via CLI: (Logic Defined in cypress.config.js)<br>
<code>npx cypress run --env base_url=ADD_BASEURL_SWITCH_HERE</code><br>
<code>npx cypress run --spec "cypress/e2e/ok.cy.js" --env base_url=qa</code>


