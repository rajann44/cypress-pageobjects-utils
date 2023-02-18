import exampleImport from '../fixtures/example.json'

describe('using fixtures', () => {

    let examplejson;
    before( () => {
        cy.fixture('example').then((data) => {
            examplejson = data;
        })
    })

    it('Getting Fixtures data CYPRESS WAY', () => {
        cy.log(examplejson.name)
        cy.log(examplejson.email)
        cy.log(examplejson.body)
    })

    it('Getting Fixtures data by ONLY IMPORT', () => {
        cy.log(exampleImport.name)
        cy.log(exampleImport.email)
        cy.log(exampleImport.body)
    })

})