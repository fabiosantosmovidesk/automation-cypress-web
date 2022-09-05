// import { el } from '../elements';

class loginPage {
  
  constructor() {
    this.txb_email = 'input[name="UserName"]'
    this.txb_password = 'input[data-val-required="O campo senha deve ser informado."]'
    this.btn_submit = '#btnSubmit'
    this.div_avatar = '#top-bar-avatar-picture'

  }

  go() {
    cy.visit(`${Cypress.env('login').baseUrl}`)
  }

  form(params) {
    cy.get(this.txb_email).type(params.email)
    cy.get(this.txb_password).type(params.password)
  }

  submit() {
    cy.get(this.btn_submit).click()
    cy.wait(6000)
  }

  logout() {
    cy.get(this.div_avatar).click()
    cy.contains('Sair').click()
  }

}

export default new loginPage