// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
// type definitions for Cypress object "cy"
/// <reference types="cypress" />
//

Cypress.Commands.add("dragAndDrop", (source, target) => {
    const dataTransfer = new DataTransfer(); 
    cy.get(source).trigger('dragstart',{dataTransfer})
    cy.get(target).trigger('drop',{dataTransfer})
})