import action from "../utils/action"

describe('drag n drop test', () => {
  it('drag n drop', () => {
    cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
    action.dragAndDrop('#column-a','#column-b')
  })

  it.only('drag n drop 2', () => {
    cy.visit('https://ui.vision/demo/webtest/dragdrop/')
    action.dragAndDrop('[id="one"]','[id="bin"]')
  })

  
  
})