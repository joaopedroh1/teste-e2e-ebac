class ProdutosPage {

    visitarUrl(){
        cy.visit('produtos')
    }

    buscarProduto(nomeProduto){
        cy.get('[name="s"]').eq(1).type(nomeProduto)   
        cy.get('.button-search').eq(1).click()   
    }

    addProdutoCarrinho() {
        cy.visit('produtos')
        cy.get('.button-variable-item-XL').click()
        cy.get('.button-variable-item-Green').click()
        cy.get('.input-text').type(4)
        cy.get('.single_add_to_cart_button').click()
    }

}

export default new ProdutosPage()