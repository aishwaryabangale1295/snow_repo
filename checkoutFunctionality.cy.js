/// <reference types = "Cypress"/> 

import AddCart from "../Pom/addToCart";
import Checkout from "../Pom/checkout";

describe('Verify Checkout Functionality',()=>{

    beforeEach('Visit site, Testdata, Object Creation', function(){
        cy.visit('https://www.amazon.in/');
        cy.wait(3000);
        cy.fixture('testData.json').then(function(data){
            this.data = data;
            cy.login(this.data.rows[2].phoneNumber,this.data.rows[2].password);
        })
    
    })
  
    it('Verify checkout page', function () { 
        const cart = new AddCart();
        const checkout = new Checkout();
        cart.clickOnNavCart()
        cy.wait(5000);
        checkout.clickProceedToBuy();
        checkout.verifyCheckoutDetails('Sai Heritage, Ambegaon Budruk, pune, MAHARASHTRA, 411046, India');
        checkout.verifyOrderTotal('₹64,840.00');
        checkout.deliverAddressBtn();
        cy.wait(2000);
        checkout.addCoupenCode('RepublicDay');
        cy.wait(5000);
        checkout.verifyCoupenAlert('The promotional code you entered is not valid.');
        checkout.checkUPIRadioBtn();
        checkout.addUpiID('abcd@upi')
        checkout.verifyUPIMessage('Verified!');
        checkout.PaymentMethodBtn();
        cy.wait(2000);
        checkout.clickOnNoThanksBtn();
        cy.wait(2000);
        checkout.verifyPlaceOrderBtn();
     })

})