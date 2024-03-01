


/// <reference types="Cypress" />

describe ('My Second Test Suite', function (){
    it ('My second testcase', function (){
   
   cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
   
   cy.get('.search-keyword').type('C')
   cy.wait(2000)
   cy.get('.products').as('productsLocator')
   cy.get('@productsLocator').find('.product').should('have.length',7)
   
       cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
           // $el is a wrapped jQuery element
           const vegName = $el.find('.product-name').text()
   
           if (vegName.includes('Corn')) {
           cy.wrap($el).find('button').click()
           } 
           cy.get('.brand').should('have.text','GREENKART')
           cy.get('.brand').then(function(logoElelment){
   
               cy.log(logoElelment.text())
   
           })

           

       })
   
       cy.get('.cart-icon').click()
       cy.get('.cart-preview .action-block button').click()
       cy.get('button').contains('Place Order').click()
   
   
   
   
    })
   
   
   
   
   })