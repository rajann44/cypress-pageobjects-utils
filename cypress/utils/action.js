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

    sleepForSeconds(seconds){
        cy.wait(seconds*1000)
    }

}

export default new Action();