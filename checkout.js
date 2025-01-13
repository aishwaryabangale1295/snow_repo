class Checkout{

clickProceedToBuy(){
    cy.get('[name="proceedToRetailCheckout"]').click();
}

verifyCheckoutDetails(details){
    cy.get('[data-csa-c-slot-id*="destination-radio-button-non-mobile"]').should('contain', details)
}

verifyOrderTotal(total){
    cy.get('[id="subtotals-marketplace-table"] tr:nth-child(3) td:nth-child(2)').should('have.contain',total);
}

deliverAddressBtn(){
    cy.get('[id="checkout-primary-continue-button-id-announce"]').click({force:true});
}

addCoupenCode(code){
    cy.get('[name="ppw-claimCode"]').type(code)
    cy.get('[value="Apply"]').click();
}

verifyCoupenAlert(message){
    cy.get('[id="pmts-claim-code-error-messages"] p').last().should('have.text',message)
}

checkUPIRadioBtn(){
    cy.get('[value*="UnifiedPaymentsInterface"]').click();
}

addUpiID(id){
    cy.get('[placeholder="Enter UPI ID"]').type(id);
    cy.get('[name*="ValidateUpiIdEvent"]').click({force:true});
}

verifyUPIMessage(message){
    cy.get('[class="a-box pmts-instrument-box"]').contains(message).should('be.visible');
}

PaymentMethodBtn(){
    cy.get('[aria-labelledby="checkout-primary-continue-button-id-announce"]').as('btn')
    cy.get('@btn').should('be.enabled');
    cy.get('@btn').click({force:true});
}

clickOnNoThanksBtn(){
    cy.get('[id="prime-interstitial-nothanks-button"]').click();
}

verifyPlaceOrderBtn(){
    cy.get('[id="submitOrderButtonId-announce"]').should('be.visible');
}

}
export default Checkout;