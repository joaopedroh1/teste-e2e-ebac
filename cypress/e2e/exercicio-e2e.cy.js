/// <reference types="cypress" />
import { faker } from '@faker-js/faker';
import joaoProdutosPage from '../support/page_objects/joao-produtos.page';
const perfil = require('../fixtures/perfil.json')


context('Exercicio - Testes End-to-end - Fluxo de pedido', () => {
  /*  Como cliente 
      Quero acessar a Loja EBAC 
      Para fazer um pedido de 4 produtos 
      Fazendo a escolha dos produtos
      Adicionando ao carrinho
      Preenchendo todas opções no checkout
      E validando minha compra ao final */

      
  it.only('Deve fazer o login corretamente - Usando Fixture', () => {
    cy.visit('/minha-conta')
    cy.fixture('perfil').then(dados => {
      cy.get('#username').type(dados.usuario)
      cy.get('#password').type(dados.senha)
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' ,'Olá, teste.joao (não é teste.joao? Sair)')
      joaoProdutosPage.buscarProduto('Abominable Hoodie')
      joaoProdutosPage.addProdutoCarrinho('M', 'Blue', 4)
      cy.get('.woocommerce-message').should('contain', '4 × “Abominable Hoodie” foram adicionados no seu carrinho.')
    })
  });

  //describe('Funcionalidade: Produtos', () => {
    //beforeEach(() => {});

    //it('deve buscar produto com sucesso ', () => {
      //cy.visit('/produtos')
      //joaoProdutosPage.buscarProduto('Abominable Hoodie')
      //cy.get('.product_title').should('contain', 'Abominable Hoodie')
    //});

    //it('deve selecionar 4 produtos da lista ', () => {
      //joaoProdutosPage.buscarProduto('Abominable Hoodie')
      //joaoProdutosPage.addProdutoCarrinho('M', 'Blue', 4)
      //cy.get('.woocommerce-message').should('contain', '4 × “Abominable Hoodie” foram adicionados no seu carrinho.') 
    //});

  //});  
})