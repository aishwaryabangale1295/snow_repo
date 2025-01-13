class ProductSearch
{
    searchProduct(productName){
        cy.get('input[id="twotabsearchtextbox"]').type(productName);
    }

    clickOnSearchBtn(){
        cy.get('input#nav-search-submit-button').click();
    }

    verifySearchProductResult(productName1, productName2){
        cy.get('[data-cy="title-recipe"]>a span').each(($ele)=>{
           
           const element =  $ele.text();
            if(element.includes('Dell')){
                cy.wrap($ele).should('have.contain', productName1);
            }
            else if(element.includes('DELL')){
                cy.wrap($ele).should('have.contain', productName2);
            }

        })
    }

    clickBrandCheckbox(index){
        cy.get('[id="brandsRefinements"] input').eq(index).check({force:true});
    }

    clickOnPriceRange(){
        cy.get('[id="p_36/range-slider_slider-item_upper-bound-slider"]').invoke('val','80').trigger('change',{force:true});
        cy.get('input[aria-label="Go - Submit price range"]').click();
    }

    verifyProductPrices(){
        cy.get('[class="a-price-whole"]').each(($price)=>{

            let x = '45,600'
            let y = x.replace(',','')
            let num = Number(y)

            let j = $price.text();
            let k = j.replace(',','')
            let value = Number(k);

            expect(value).to.be.lessThan(num);  
        })
    }

    clickOnProduct(prodName){
        // cy.get('[data-cy="title-recipe"]>a').eq(index).invoke('removeAttr','target').click();
        cy.get('[data-cy="title-recipe"] span').each(($ele)=>{
            
            if($ele.text().includes(prodName)){
                cy.wrap($ele).parents('a').invoke('removeAttr','target').click({force:true});
            }
        })
    }

    autoSuggestSearchDropdown(length,itemName){
        cy.get('[id="sac-autocomplete-results-container"] span').should('have.length', length);
        cy.get('[class="s-suggestion s-suggestion-ellipsis-direction"]').each(($ele)=>{
            const text = $ele.text();
            if(text==itemName){
                cy.wrap($ele).click({force:true});
            }
        })

        cy.get('input[id="twotabsearchtextbox"]').should('have.value',itemName);
        cy.url().should('include','laptop+stand+metal');
     
      //  cy.get('[class="s-suggestion s-suggestion-ellipsis-direction"]').contains('laptop stand metal').click();

    }


}
export default ProductSearch;