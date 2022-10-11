import login from '../../pages/loginPage/loginPage'
import home from '../../components/components'

describe('Login', { tags: ['@login', '@login_success'],},

  function () {

    this.beforeEach(() => {
      login.go()
    })

    afterEach(() => {
    })

    it('CT01 - [WEB][CYPRESS] - Validate login with success', {
      tags: ['@valid_user_correct', '@positive', '@fabio_santos']
    },

    function () {
      let valid_user = Cypress.env('login').valid_user
      login.form(valid_user)
      login.submit()
      cy.elementExists('.buttons-container > .btn-mv-confirm').click()
      home.messageHaveText(Cypress.env('login').my_ticket)
      cy.screenshot()
      login.logout()
    }
    )

    it('CT02 - [WEB][CYPRESS] - Validate login with success metode coupled', {
      tags: ['@valid_user_correct', '@positive', '@fabio_santos']
    },

    function () {
      login.login()
      cy.screenshot()
      login.logout()
    }
    )

    it('CT03 - [WEB][CYPRESS] - Validate login with user incorrect', {
      tags: ['@valid_user_user_incorrect', '@negative', '@fabio_santos']
    },

    function () {
      login.login_user_invalid()
    }
    )

    it('CT04 - [WEB][CYPRESS] - Validate login with password incorrect', {
      tags: ['@valid_user_email_incorrect', '@negative', '@fabio_santos']
    },

    function () {
      login.login_password_invalid()
    }
    )
  }
)