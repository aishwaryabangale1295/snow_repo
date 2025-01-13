class Login {

    enterUsername(username) {
        cy.get('[class="nav-action-signin-button"]').first().click({ force: true });
        cy.get('[id="ap_email"]').type(username);
    }

    enterPassword(password) {
        cy.get('#ap_password').type(password);
    }

    clickOnContinueBtn() {
        cy.get('[id="continue"] input').click({ force: true });
    }

    clickOnSignInBtn() {
        cy.get('[id="signInSubmit"]').click({ force: true });
    }

    verifyLogin(value) {
        if (value == 'Incorrect phone number') {
            cy.get('[id="auth-error-message-box"]').should('have.contain', value);
        }
        else if (value == 'Your password is incorrect') {
            cy.get('[class="a-alert-content"] span').should('contain', value);
        }
        else {
            cy.url().should('include', value);
        }
    }

}

export default Login;


