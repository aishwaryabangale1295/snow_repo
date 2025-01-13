/// <reference types = "Cypress"/> 

describe('handling Auto suggestion dropdowns',()=>{
  
     it.skip('Tata cliq', function () { 
        cy.visit('https://www.tatacliq.com/');
        // cy.wait('2000')
        // cy.get('input[id="search-text-input"]').type('bag');
        // cy.get('[class="SearchResultItem__base"]').each(($ele)=>{
           
        //     const element = $ele.text();
        //     if(element == 'bags for women'){
        //         cy.wrap($ele).click();
        //     }
        // })
        
     })

     it.skip('handling autosuggesion dropdowns', function () {    
        cy.visit('https://www.letskodeit.com/practice')
        cy.get('[id="autosuggest"]').type('app')
        cy.get('[class="ui-menu-item"]').should('have.length',6).and('contain','Mobile App Automation')
        cy.get('[class="ui-menu-item"]').each(($ele)=>{
            const txt = $ele.text();
            if(txt =='Appium'){
                cy.wrap($ele).click();
            }
        })
        cy.get('[id="autosuggest"]').should('have.value','Appium')
    })

    it('Google', function () { 
        cy.visit('https://www.google.com/');
        // cy.get('textarea[name="q"]').type('laptop');
        // cy.get('[class="wM6W7d"] span').should('have.length',13).and('contain','laptop stand')
        // cy.get('[class="wM6W7d"] span').each(($ele)=>{

        //     const text = $ele.text();
        //     if(text == 'laptop bag'){
        //         cy.wrap($ele).click();
        //     }
        // })
        // cy.get('textarea[name="q"]').should('have.contain','laptop bag')

        //OR
        cy.get('textarea[name="q"]').type('laptop');
        cy.get('[class="wM6W7d"] span').contains('laptop stand').should('be.visible');
     })

     it.skip('Webdriver University',function(){
        cy.visit('https://webdriveruniversity.com/Autocomplete-TextField/autocomplete-textfield.html');
        cy.get('input[id="myInput"]').type('a');
        cy.get('[id="myInputautocomplete-list"]>div').should('have.length',5);
        cy.get('[id="myInputautocomplete-list"]>div').each((ele)=>{
            const text = ele.text();

            if(text.includes('Almond')){
                cy.wrap(ele).click();
            }
        })
        cy.get('input[id="myInput"]').invoke('val').should('eq','Almond')
     })
})