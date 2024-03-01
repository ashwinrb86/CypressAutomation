


/// <reference types="Cypress" />

describe ('Test Suite', function (){
    it ('Testcase', function (){
   
   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
   

// move hover using invoke jquery method

cy.get('.mouse-hover-content').invoke('show')
cy.contains('Top').click()
cy.url().should('have.stringcypress ','top')


// cy.contains('Top').click({force: true})



  
   
    })
   })