///<reference types = "Cypress"/> 

import ProductSearch from "../Pom/productSearch";

describe('Search Functionality', function(){

    beforeEach('Visit site, Testdata, Object Creation', function(){
        cy.visit('https://www.amazon.in/');
        cy.wait(3000);
        cy.fixture('testData.json').then(function(data){
            this.data = data;
            cy.login(this.data.rows[2].phoneNumber,this.data.rows[2].password);
        })
    
    })

    it('Verify search functionality', function(){
        const prod = new ProductSearch();
        prod.searchProduct(this.data.rows[3].prodName)
        prod.clickOnSearchBtn();
        prod.clickBrandCheckbox(2);
        cy.wait(5000);
        prod.verifySearchProductResult('Dell','DELL');
        prod.clickOnProduct('DELL Latitude 3540 (2024) Intel Core i3 12th Gen 1215U');
        prod.verifyProductName('DELL Latitude 3540 (2024) Intel Core i3 12th Gen 1215U');
    })

    it.skip('Verify Auto Search Functionality', function(){
        const prod = new ProductSearch();
        prod.searchProduct(this.data.rows[3].prodName);
        prod.autoSuggestSearchDropdown(10,'laptop stand metal');
        //cy.AutoSuggestDropdown('laptop cleaner kit');
    })

    it.only('Verify Filter and Sort Functionality', function(){
        const prod = new ProductSearch();
        prod.searchProduct(this.data.rows[3].prodName)
        prod.clickOnSearchBtn();
        prod.clickBrandCheckbox(2);
        cy.wait(5000);
        prod.verifySearchProductResult('Dell','DELL');
        prod.clickOnPriceRange();
        prod.verifyProductPrices();

    })

})