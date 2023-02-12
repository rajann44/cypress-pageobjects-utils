const loginCred = require("../testData/loginCred")

describe('template spec', () => {
  it('login', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.get('#username').type(loginCred.username)
    cy.get('#password').type(loginCred.password)
    cy.get('[type="submit"]').click()
    cy.get('[class="flash success"]').should('be.visible')
  })
})