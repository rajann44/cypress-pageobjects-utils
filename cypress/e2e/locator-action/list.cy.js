import Action from "../../utils/Action"
import Assert from "../../utils/Assert"

describe('list', () => {
  
    it('when single locator', () => {
        Action.navigateTo('https://the-internet.herokuapp.com/large')
        Assert.isTextPresentInLocator('[id="sibling-1.1"]', '1.1')
    })

    it('when list of locator', () => {
        Action.navigateTo('https://the-internet.herokuapp.com/large')
        Assert.isTextPresentInLocator('[class="column-1"]', '50.1')
    })


})