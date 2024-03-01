


/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe ('Test Suite', function (){
    it ('Testcase', function (){
   
   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
   

// child tabs handling

cy.frameLoaded('#courses-iframe')

cy.wait(3000)

cy.iframe().find('li.current').eq(0).click()
    // cy.get('.nav-item a').contains('About us').click()
    // cy.get('.section-title h2').contains('Welcome to QAClick Academy ').should('contain.text','Welcome to QAClick Academy ')




  
   
    })
   })