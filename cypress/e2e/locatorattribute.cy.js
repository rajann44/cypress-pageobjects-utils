import action from "../utils/Action"

describe('validate attribute value', () => {

  it('locator attribute', () => {
    cy.visit('https://the-internet.herokuapp.com/frames')
    action.getAttributValue('[id="content"]','class').should('contain', 'large-12 columns')
  })
  
  
})