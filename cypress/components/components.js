/// <reference types="Cypress" />

class components {

  messageHaveText(messenger) {
    cy.contains(messenger)
  }
}
export default new components