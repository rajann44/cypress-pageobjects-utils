import amazonPage from "../pages/amazonPage"
import action from "../utils/action"

describe('hover test', () => {
  it('hovering', () => {
    amazonPage.open()
    action.hoverOnElement(amazonPage.languageBtn)
    cy.get(amazonPage.languageModal).should('be.visible')
  })
  
})