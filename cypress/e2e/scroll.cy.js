import amazonPage from "../pages/amazonPage"
import action from "../utils/action"

describe('hover test', () => {
  it('hovering', () => {
    amazonPage.open()
    action.scrollToElement(amazonPage.footer)
    cy.get(amazonPage.footer).should('be.visible')
  })
  
})