import AmazonPage from "../../pages/AmazonPage"
import Action from "../../utils/Action"

describe('hover test', () => {
  it('hovering', () => {
    AmazonPage.open()
    Action.hoverOnElement(AmazonPage.languageBtn)
    cy.get(AmazonPage.languageModal).should('be.visible')
  })
  
})