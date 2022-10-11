class loginPage {
  
  constructor() {
    this.txb_email = 'input[name="UserName"]'
    this.txb_password = 'input[data-val-required="O campo senha deve ser informado."]'
    this.btn_submit = '#btnSubmit'
    this.div_avatar = '#top-bar-avatar-picture'
    this.msg_login_or_password_invalid = '.validation-summary-valid'
    this.lbl_my_ticket = '.col-xs-10'
  }

  go() {
    cy.visit(`${Cypress.env('urls').baseUrl}`)
  }

  form(params) {
    cy.get(this.txb_email).type(params.user)
    cy.get(this.txb_password).type(params.password)
  }

  submit() {
    cy.get(this.btn_submit).click()
    cy.wait(2000)
  }

  logout() {
    cy.get(this.div_avatar).click()
    cy.contains('Sair').click()
  }

  login(){
    let valid_user = Cypress.env('login').valid_user

    this.form(valid_user)
    this.submit()
    cy.elementExists('.buttons-container > .btn-mv-confirm').click()
    cy.get(this.lbl_my_ticket).should('have.text', Cypress.env('login').lbls_home_widget)
  }

  login_user_invalid(){
    this.form(Cypress.env('login').invalid_user)

    this.submit()
    cy.get(this.msg_login_or_password_invalid).should('have.text', Cypress.env('login').msg_login_or_password_invalid)
    cy.screenshot()
  }

  login_password_invalid(){
    this.form(Cypress.env('login').invalid_password)

    this.submit()
    cy.get(this.msg_login_or_password_invalid).should('have.text', Cypress.env('login').msg_login_or_password_invalid)
    cy.screenshot()
  }

}

export default new loginPage