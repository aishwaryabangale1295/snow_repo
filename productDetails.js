class ProductDetails
{
    verifyProductName(text){
        cy.get('span[id="productTitle"]').contains(text).should('be.visible')
    }

    verifyProductPrice(price){
        cy.get('[class*="priceToPay"] span span:nth-child(2)').should('have.text',price)
    }

    verifyProductDisc(disc){
        cy.get('[id="feature-bullets"] ul>li:nth-child(7)').should('have.contain',disc)
    }

    verifyProductImage(length){
        cy.get('[id="imgTagWrapperId"] img').click({force:true});
        cy.get('[id="ivThumbs"] [class="ivRow"] [id*="ivImage"]').should('have.length',length).and('be.visible')
    }

    verifyProductSpec(data){
        cy.get('[id="productOverview_feature_div"] table tbody tr').each((row,rowIndex)=>{
            cy.wrap(row).find('td').each((col, colIndex)=>{
                cy.wrap(col).should('have.contain',data[rowIndex][colIndex]);
            })
        })
  
    }



}
export default ProductDetails;