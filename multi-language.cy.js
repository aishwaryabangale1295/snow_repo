/// <reference types = "Cypress"/> 

import Language from "../Pom/language";

describe('Verify Multi-Language Functionality',()=>{

    beforeEach('Visit site, Testdata, Object Creation', function(){
        cy.visit('https://www.amazon.in/');
        cy.wait(3000);
        cy.fixture('testData.json').then(function(data){
            this.data = data;
            cy.login(this.data.rows[2].phoneNumber,this.data.rows[2].password);
        })
    
    })
  
    it('Verify languages', function () { 
        const lang = new Language();
        lang.clickLanguageMenu();
        cy.wait(4000);
        lang.selectLanguage('mr');
        lang.verifyUpdatedLang('भाषांतर');
        lang.clickOnSave();
        cy.wait(4000);
        lang.verifyFooterLang('मराठी');
        lang.clickFooterLangMenu();
        lang.selectLanguage('en');
        lang.clickOnSave();
        cy.wait(4000);
        lang.verifyHeaderLang('EN');
     })

})