/// <reference types="cypress" />

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
      cy.visit('/')
  });

  it('Deve fazer o login corretamente', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    cy.get('#username').type('teste.joao@teste.com.br')
    cy.get('#password').type('kilerucv12')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, teste.joao (não é teste.joao? Sair)')
  });
   
  it.only('Deve adicionar um produto no carrinho ', () => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name > a').click()
    cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name > a').click()
    cy.get('.post-2559 > .product-block > .caption > .meta > .infor > .name > a').click()
    cy.get('.single_add_to_cart_button').click()
  });


})