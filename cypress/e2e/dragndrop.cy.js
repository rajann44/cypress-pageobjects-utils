import action from "../utils/Action"

describe('drag n drop test', () => {
  it('drag n drop', () => {
    action.navigateTo('https://the-internet.herokuapp.com/drag_and_drop')
    action.dragAndDrop('#column-a','#column-b')
  })

  it('drag n drop 2', () => {
    action.navigateTo('https://ui.vision/demo/webtest/dragdrop/')
    action.dragAndDrop('[id="one"]','[id="bin"]')
  })
  
  
})