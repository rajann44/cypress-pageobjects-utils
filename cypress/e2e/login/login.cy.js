import LoginPage from "../../pages/LoginPage"
import Action from "../../utils/Action"
import Assert from "../../utils/Assert"

const loginCred = require("../../testData/loginCred")

describe('template spec', () => {
  it.only('login', () => {
    LoginPage.open('/login')
    LoginPage.login(loginCred.username, loginCred.password)
    //cy.get('[class="flash success"]').should('be.visible')
    Assert.isVisible('[class="flash success"]');
  })

  it('refresh browser', () => {
    Action.navigateTo('https://google.com')
    Action.browserRefresh()
    Action.browserRefresh()
    Action.browserRefresh()
  })
  
})