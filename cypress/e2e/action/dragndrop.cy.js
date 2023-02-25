import Action from "../../utils/Action"

describe('drag n drop test', () => {
  it('drag n drop', () => {
    Action.navigateTo('https://the-internet.herokuapp.com/drag_and_drop')
    Action.dragAndDrop('#column-a','#column-b')
  })

  it.only('drag n drop 2', () => {
    Action.navigateTo('https://ui.vision/demo/webtest/dragdrop/')
    cy.dragAndDrop('[id="one"]','[id="bin"]')
    cy.dragAndDrop('[id="two"]','[id="bin"]')
    cy.dragAndDrop('[id="three"]','[id="bin"]')
    cy.dragAndDrop('[id="four"]','[id="bin"]')
    cy.dragAndDrop('[id="five"]','[id="bin"]')
  })
  
  
})