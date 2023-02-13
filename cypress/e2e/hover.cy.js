import AmazonPage from "../pages/AmazonPage"
import action from "../utils/Action"

describe('hover test', () => {
  it('hovering', () => {
    AmazonPage.open()
    action.hoverOnElement(AmazonPage.languageBtn)
    cy.get(AmazonPage.languageModal).should('be.visible')
  })
  
})