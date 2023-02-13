import LoginPage from "../pages/LoginPage"

const loginCred = require("../testData/loginCred")

describe('template spec', () => {
  it('login', () => {
    LoginPage.open('/login')
    LoginPage.login(loginCred.username, loginCred.password)
    cy.get('[class="flash success"]').should('be.visible')
  })
  
})