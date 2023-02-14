import action from "../utils/Action"

describe('validate attribute value', () => {

  it('locator attribute', () => {
    action.navigateTo('https://the-internet.herokuapp.com/frames')
    action.getAttributValue('[id="content"]','class').should('contain', 'large-12 columns')
  })
  
  
})