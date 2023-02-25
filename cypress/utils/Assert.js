class Assert {

    isVisible(locator){
        cy.get(locator).should('be.visible')
    }

    isNotVisible(locator){
        cy.get(locator).should('not.be.visible')
    }

    isChecked(locator){
        cy.get(locator).should("be.checked")
    }

    isAttributeIsEqualTo(locator, attibute, expectedValue){
        cy.get(locator).invoke('attr', attibute).should("contain", expectedValue)
    }

    isTextPresentInLocator(locator, value){
        cy.contains(locator, value)
    }

}

export default new Assert();