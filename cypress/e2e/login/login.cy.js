import login from '../../pages/loginPage/loginPage'
import home from '../../components/components'

describe('SISTEMA - Login', {
  tags: ['@login', '@sistema_login_success'],
},
  function () {

    beforeEach(() => {
      login.go()
    })

    afterEach(() => {
    })

    it.only('CT01 - [WEB][SISTEMA][CYPRESS] - Validar mensagem de login correta', {
      tags: ['@valid_user_correct', '@positive', '@fabio_santos']
    },

      function () {
        let valid_user = Cypress.env('login').valid_user

        login.form(valid_user)
        login.submit()
        home.messageHaveText("Meus tickets")
        cy.screenshot()
        login.logout()
      }
    )

  //   it('CT02 - [WEB][SISTEMA][CYPRESS] - Validar mensagem de login email incorreto', {
  //     tags: ['@valid_user_email_incorreto', '@negativo', '@fabio_santos']
  //   },

  //     function () {
  //       let invalid_mail = Cypress.env('login').invalid_mail

  //       login.form(invalid_mail)
  //       login.submit()
  //       home.messageHaveText("Login failed.")
  //       cy.screenshot()
  //     }
  //   )

  //   it('CT03 - [WEB][SISTEMA][CYPRESS] - Validar mensagem de login password incorreto', {
  //     tags: ['@valid_user_password_incorreta', '@negativo', '@fabio_santos']
  //   },

  //     function () {
  //       let invalid_password = Cypress.env('login').invalid_password

  //       login.form(invalid_password)
  //       login.submit()
  //       home.messageHaveText("Login failed.")
  //       cy.screenshot()
  //     }
  //   )
  }
)