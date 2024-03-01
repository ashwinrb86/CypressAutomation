


/// <reference types="Cypress" />

describe ('My First Test Suite', function (){
 it ('My first testcase', function (){

cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

cy.get('.search-keyword').type('C')
cy.wait(2000)

cy.get('.product:visible').should('have.length',7)

cy.get('.products').as('productsLocator')

cy.get('@productsLocator').find('.product').should('have.length',7)

cy.get('@productsLocator').find('.product').eq(3).contains('ADD TO CART').click()


    cy.get('@productsLocator').find('.product').each(($el, index, $list) => {
        // $el is a wrapped jQuery element
        const vegName = $el.find('.product-name').text()

        if (vegName.includes('Corn')) {
        cy.wrap($el).find('button').click()
        } 
        
        // else {
        // // do something else
        // }
        cy.get('.brand').should('have.text','GREENKART')
        cy.get('.brand').then( function(logoElelment){

            cy.log(logoElelment.text())

        })
    })






 })

 it ('My second testcase', function (){



    
 })



})