import action from "../utils/Action"

describe('list', () => {
  
    it('when single locator', () => {
        action.navigateTo('https://the-internet.herokuapp.com/large')
        action.verifyTextIsPresentInLocator('[id="sibling-1.1"]', '1.1')
    })

    it('when list of locator', () => {
        action.navigateTo('https://the-internet.herokuapp.com/large')
        action.verifyTextIsPresentInLocator('[class="column-1"]', '50.1')
    })


})