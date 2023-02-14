class Action {

    navigateTo(url){
        cy.visit(url)
    }

    browserRefresh(){
        cy.reload()
    }

    sendKeys(locator, value){
        cy.get(locator).clear()
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

    dragAndDrop(source, target){
        const dataTransfer = new DataTransfer(); 
        cy.get(source).trigger('dragstart',{dataTransfer})
        cy.get(target).trigger('drop',{dataTransfer})
    }

    getAttributValue(locator, attibute){
        return cy.get(locator).invoke('attr', attibute)
    }

    verifyTextIsPresentInLocator(locator, value){
        cy.contains(locator, value)
    }

}

export default new Action();