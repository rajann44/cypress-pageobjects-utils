import loginPage from "../pages/loginPage"

const loginCred = require("../testData/loginCred")

describe('template spec', () => {
  it('login', () => {
    loginPage.open('/login')
    loginPage.login(loginCred.username, loginCred.password)
    cy.get('[class="flash success"]').should('be.visible')
  })
})