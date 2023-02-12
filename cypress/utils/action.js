class action {

    sendKeys(locator, value){
        cy.get(locator).type(value);
    }

    clickElement(locator){
        cy.get(locator).click()
    }

    hoverOnElement(locator){
        cy.get(locator).trigger("mouseover")
    }

    scrollToElement(locator){
        cy.get(locator).scrollIntoView()
    }

}

export default new action();