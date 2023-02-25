import AmazonPage from "../../pages/AmazonPage"
import Action from "../../utils/Action"

describe('scroll test', () => {
  it('scrollingggggg', () => {
    AmazonPage.open()
    Action.scrollToElement(AmazonPage.footer)
    cy.get(AmazonPage.footer).should('be.visible')
  })
  
})