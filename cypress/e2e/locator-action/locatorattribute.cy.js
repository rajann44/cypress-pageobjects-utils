import Action from "../../utils/Action"
import Assert from "../../utils/Assert"

describe('validate attribute value', () => {

  it('locator attribute', () => {
    Action.navigateTo('https://the-internet.herokuapp.com/frames')
    Assert.isAttributeIsEqualTo('[id="content"]', 'class', 'large-12 columns')
  })
  
  
})