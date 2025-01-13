class AddCart
{

    addQuantity(qty){
        cy.get('select[id="quantity"]').first().select(qty,{force:true});
    }

    clickOnPinLink(){
        cy.get('[id="contextualIngressPtLink"]').last().click({force:true});
    }

    clickOnAddAddress(){
        cy.get('[id="GLUXManageAddressLink"] a').invoke('removeAttr','target').click();
        cy.get('a[href*="manage_address_book"]').click();
    }

    addAddressForm(fName,phone,pin,aptAdd,areaAdd,landmark){
        cy.get('[id*="enterAddressFullName"]').type(fName);
        cy.wait(1000);
        cy.get('input[id*="enterAddressPhoneNumber"]').type(phone);
        cy.wait(1000);
        cy.get('[id*="enterAddressPostalCode"]').clear().type(pin);
        cy.wait(1000);
        cy.get('[id*="enterAddressLine1"]').type(aptAdd);
        cy.wait(1000);
        cy.get('[id*="enterAddressLine2"]').type(areaAdd);
        cy.wait(1000);
        cy.get('[id*="landmark"]').type(landmark);
        cy.wait(1000);
        cy.get('[id*="use-as-my-default"]').check();
    }

    deliveryInstructions(message){
        cy.contains('Add preferences, notes, access codes and more').click();
        cy.wait(1000);
        cy.get('[aria-label="Apartment"]').click({force: true});
        cy.wait(1000);
        cy.get('[class*="SUNs-closed weekend-delivery-preference-button"] [value="No"]').last().click({force: true});
        cy.wait(1000);
        cy.contains('Do we need additional instructions to deliver to this address?').click();
        cy.wait(1000);
        cy.get('[id="freeTextInstruction-APARTMENT"]').type(message,{force: true});
        cy.get('[id="address-ui-widgets-form-submit-button"]').click();
    }

    clickAddToCart(){
        cy.get('[id="desktop_qualifiedBuyBox"] [id="add-to-cart-button"]').first().click();
    }

    clickOnCartBtn(){
        cy.get('[id="attach-sidesheet-view-cart-button-announce"]').click({force:true})
    }

    verifyQty(value,qty){
        cy.get('[aria-label="Quantity is '+value+'"]').should('have.contain',qty);
    }

    verifyTotalAmt(total){
        cy.get('[id="sc-subtotal-amount-activecart"] span').should('have.text',total);
    }

    clickOnNavCart(){
        cy.get('[id="nav-cart-count-container"]').click({force:true});
    }

    decreaseQty(){
        cy.get('[aria-label="Decrease quantity by one"] span').click({force:true})
    }

    clickOnDelete(){
        cy.get('[name*="submit.delete"]').click();
    }

    verifySubTotal(subTotal){
        cy.get('[id="sc-subtotal-label-activecart"]').should('contain',subTotal).and('be.visible');
    }

}
export default AddCart;