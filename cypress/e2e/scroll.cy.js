import amazonPage from "../pages/amazonPage"
import action from "../utils/action"

describe('scroll test', () => {
  it('scrollingggggg', () => {
    amazonPage.open()
    action.scrollToElement(amazonPage.footer)
    cy.get(amazonPage.footer).should('be.visible')
  })
  
})