///<reference types = "Cypress"/> 

import ProductDetails from "../Pom/productDetails";
import ProductSearch from "../Pom/productSearch";

describe('Product Details Functionality', function(){

    beforeEach('', function(){
        cy.visit('https://www.amazon.in/');
        cy.wait(3000);
        cy.fixture('testData.json').then(function(data){
            this.data = data;
            cy.login(this.data.rows[2].phoneNumber,this.data.rows[2].password);
        })
    })

    it('Verify Product Details',function(){
        const prod = new ProductSearch();
        const details = new ProductDetails();
        prod.searchProduct(this.data.rows[3].prodName)
        prod.clickOnSearchBtn();
        prod.clickBrandCheckbox(2);
        cy.wait(5000);
        prod.clickOnProduct('DELL Latitude 3540 (2024) Intel Core i3 12th Gen 1215U');
        details.verifyProductName('DELL Latitude 3540 (2024) Intel Core i3 12th Gen 1215U');
        details.verifyProductPrice('32,190');
        details.verifyProductDisc('OS and Software: Windows 11 Home 64 Bit');
        details.verifyProductImage(9);
        cy.closePopup();
        const data = [
        ['Brand', 'Dell'],
        ['Model Name','Latitude 3540'],
        ['Screen Size','14 Inches'],
        ['Colour','Smoky Black'],
        ['Hard Disk Size','512 GB'],
        ['CPU Model','Core i3-1215U'],
        ['RAM Memory Installed Size','16 GB'],
        ['Operating System','Windows 11 Home'],
        ['Special Feature','HD Audio, Light Weight, Anti Glare Coating, Numeric Keypad'],
        ['Graphics Card','Integrated']
    ]
        details.verifyProductSpec(data)
    })
})