///<reference types = "Cypress"/> 

import AddCart from "../Pom/addToCart";
import ProductSearch from "../Pom/productSearch";

describe('Add to Cart Functionality', function(){

    beforeEach('', function(){
        cy.visit('https://www.amazon.in/');
        cy.wait(3000);
        cy.fixture('testData.json').then(function(data){
            this.data = data;
            cy.login(this.data.rows[2].phoneNumber,this.data.rows[2].password);
        })
    })

    it('Verify Product is added to cart',function(){
        const prod = new ProductSearch();
        const cart = new AddCart();
        // prod.searchProduct(this.data.rows[3].prodName)
        // prod.clickOnSearchBtn();
        // prod.clickBrandCheckbox(2);
        // cy.wait(5000);
        // prod.clickOnProduct('DELL Latitude 3540 (2024) Intel Core i3 12th Gen 1215U');
        // cy.wait(4000);
        // cart.addQuantity('2');
        // cy.wait(3000);
        // cart.clickOnPinLink();
        // cy.wait(3000);
        // cart.clickOnAddAddress();
        // cy.wait(3000);
        // cart.addAddressForm(this.data.rows[4].fName,this.data.rows[4].phone,
        //     this.data.rows[4].pincode,this.data.rows[4].aptAdd,this.data.rows[4].areaAdd,this.data.rows[4].landmark);
        // cart.deliveryInstructions(this.data.rows[4].message);
    //    cart.clickAddToCart();
    //    cy.wait(3000);
    //    cart.clickOnCartBtn();
       cart.clickOnNavCart()
       cy.wait(5000);
       cart.verifyQty('2','2');
       cart.verifyTotalAmt('₹64,460.00');
       cart.verifySubTotal('Subtotal (2 items):')
    })

    it.only('Verify Product is remove from cart',function(){
        const cart = new AddCart();
        cart.clickOnNavCart()
        cy.wait(5000);
        cart.verifySubTotal('Subtotal (2 items):')
        cart.decreaseQty();
        cart.verifyQty('1','1');
        cart.verifyTotalAmt('₹32,230.00');
        cart.verifySubTotal('Subtotal (1 item):')
        cart.clickOnDelete();
        cart.verifySubTotal('Subtotal (0 items):')
    })

})