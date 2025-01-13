///<reference types = "Cypress"/> 

import Login from "../Pom/homePage";

describe('Login Functionality',()=>{

    let login;

    beforeEach('Visit site, Testdata, Object Creation',function(){
        cy.visit('https://www.amazon.in/');
        cy.fixture('testData.json').then(function(data){
            this.data = data;
        })
        login = new Login();
    })
       

    it('Verify Login Functionality by passing invalid Username', function(){
        login.enterUsername(this.data.rows[0].phoneNumber);
        login.clickOnContinueBtn();
        login.verifyLogin('Incorrect phone number');
    })

    it('Verify Login Functionality by passing Invalid Password', function(){
        login.enterUsername(this.data.rows[1].phoneNumber);
        login.clickOnContinueBtn();
        login.enterPassword(this.data.rows[1].password)
        login.clickOnSignInBtn();
        login.verifyLogin('Your password is incorrect');
    })

    it('Verify Login Functionality by passing Valid Data', function(){
        login.enterUsername(this.data.rows[2].phoneNumber);
        login.clickOnContinueBtn();
        login.enterPassword(this.data.rows[2].password)
        login.clickOnSignInBtn();
        cy.wait(3000)
        login.verifyLogin('https://www.amazon.in/?ref_=nav_signin');
    })

    after('logout', ()=>{
        cy.get('[id="nav-item-signout"] span').click({force:true});
        cy.url().should('contain','https://www.amazon.in/ap/signin');
    })

})