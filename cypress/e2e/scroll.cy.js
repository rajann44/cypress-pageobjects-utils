import AmazonPage from "../pages/AmazonPage"
import action from "../utils/Action"

describe('scroll test', () => {
  it('scrollingggggg', () => {
    AmazonPage.open()
    action.scrollToElement(AmazonPage.footer)
    cy.get(AmazonPage.footer).should('be.visible')
  })
  
})