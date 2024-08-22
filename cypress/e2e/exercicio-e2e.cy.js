/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
  });

  afterEach(() => {
    cy.screenshot()
  });

  it('Deve fazer o login corretamente', () => {
    cy.get('#username').type('teste.joao@teste.com.br')
    cy.get('#password').type('kilerucv12')
    cy.get('.woocommerce-form > .button').click()
    cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, teste.joao (não é teste.joao? Sair)')
  });

  describe('Funcionalidade: Produtos', () => {
    beforeEach(() => {
      cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });

    it.only('deve selecionar 4 produtos da lista ', () => {
      cy.get('.product-block')
        .eq(2)
        .click()
      cy.get('.product_title').should('contain' , 'Aether Gym Pant')


    });
  });  
})