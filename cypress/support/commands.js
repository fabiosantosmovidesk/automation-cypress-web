/// <reference types="Cypress" />

Cypress.Commands.add('getById', (input) => {
  cy.get(`[data-test-id=${input}]`)
  //example: cy.getById('indigo')
})

Cypress.Commands.add('messageHaveText', (locator, message) => {
    cy.get(locator).should('have.text', message)
})
  
Cypress.Commands.add('iframeMessageHaveText', (locatorIframe, locator, message) => {
  cy.getIframeBody(locatorIframe)
    .find(locator)
    .contains(message)
})

Cypress.Commands.add('waitForMessageError', (locator, message) => {
  cy.get(locator)
    .should('be.visible')
    .should('to.be.have.text', message)
})

Cypress.Commands.add('waitForMessageReference', (locator, message) => {
  cy.get(locator)
    .should('be.visible')
    .should('to.be.have.text', message)
})

Cypress.Commands.add('captureText', (locator) => {
  cy.get(locator)
    .invoke('text')
    .as('capturedText')
})

// Cypress.Commands.add('closeAllPopup', () => {
//   function closeAllWindows() {
//     for (var i = 0; i < document.MyActiveWindows.length; i++)
//       document.MyActiveWindows[i].close()
//   }
// })

Cypress.Commands.add('waitForTextTwoIframe', (locatorFrameOne, locatorFrameTwo, locatorText, text) => {
  cy.frameLoaded(locatorFrameOne)
  cy.iframe(locatorFrameOne)
    .within(() => {

      cy.iframe(locatorFrameTwo)
        .find(locatorText)
        .should('to.be.visible')
        .contains(text)
    })
})

Cypress.Commands.add('accessTwoIframeClick', (locatorFrameOne, locatorFrameTwo) => {
  cy.frameLoaded(locatorFrameOne)
  cy.iframe(locatorFrameOne)
    .within(() => {

      cy.iframe(locatorFrameTwo)
        .find('.fa-pencil-square-o')
        .should('to.be.visible')
        .click()
    })
})

Cypress.Commands.add('getIframeBody', (locator) => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return cy
    .get(locator)
    .its('0.contentDocument.body').should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
})

Cypress.Commands.add('getIframeBody2', (a, b) => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return cy
    .get(a)
    .its(b).should('not.be.empty')
    // wraps "body" DOM element to allow
    // chaining more Cypress commands, like ".find(...)"
    // https://on.cypress.io/wrap
    .then(cy.wrap)
})
  