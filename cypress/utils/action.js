class action {

    sendKeys(locator, value){
        cy.get(locator).type(value);
    }

    clickElement(locator){
        cy.get(locator).click()
    }

}

export default new action();