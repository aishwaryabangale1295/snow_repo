class Language{

    clickLanguageMenu(){
        cy.get('[id="navbar-main"] [aria-label*="Choose a language for shopping."]').click();
    }

    selectLanguage(lang){
        cy.get('input[value="'+lang+'_IN"]').click({force:true});
    }
    
    verifyUpdatedLang(lang){
        cy.get('[id="icp-language-translation-heading"]').should('have.contain',lang)
    }

    clickOnSave(){
        cy.get('[aria-labelledby="icp-save-button-announce"]').click();   
    }

    verifyFooterLang(lang){
        cy.get('[id="icp-touch-link-language"] span').first().should('have.text',lang)
    }

    clickFooterLangMenu(){
        cy.get('[id="icp-touch-link-language"] span').first().click({force:true});
    }

    verifyHeaderLang(lang){
        cy.get('[id="navbar-main"] [aria-label*="Choose a language for shopping."] div').should('have.text',lang)
    }
}
export default Language;