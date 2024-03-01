


/// <reference types="Cypress" />

describe ('Test Suite', function (){
    it ('Testcase', function (){
   
   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
   

// child tabs handling

cy.get('#opentab').invoke('removeAttr','target').click()


cy.origin('https://www.qaclickacademy.com/', () => {
    cy.get('.nav-item a').contains('About us').click()
    cy.get('.section-title h2').contains('Welcome to QAClick Academy ').should('contain.text','Welcome to QAClick Academy ')
  })
  
   
    })
   })