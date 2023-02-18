import LoginPage from "../../pages/LoginPage"
import action from "../../utils/Action"

const loginCred = require("../../testData/loginCred")

describe('template spec', () => {
  it('login', () => {
    LoginPage.open('/login')
    LoginPage.login(loginCred.username, loginCred.password)
    cy.get('[class="flash success"]').should('be.visible')
  })

  it.only('refresh browser', () => {
    action.navigateTo('https://google.com')
    action.browserRefresh()
    action.browserRefresh()
    action.browserRefresh()
  })
  
})