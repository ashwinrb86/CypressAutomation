


/// <reference types="Cypress" />

describe ('My Third Test Suite', function (){
    it ('My third testcase', function (){
   
   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
   

// checkboxes
   cy.get('#checkBoxOption1').check().should('be.checked')
   cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
   cy.get('input[type="checkbox"]').check(['option2','option3'])


// dropdowns


cy.get('#dropdown-class-example').select('Option1').should('have.value','option1')


// dynamic dropdown - we are using each menthod
cy.get('#autocomplete').type('Ind')
cy.get('.ui-menu-item div').each(($el, index, $list) => {
    
    const option = $el.text()
       if (option === 'India') {
               cy.wrap($el).click()
               } 
            })

cy.get('#autocomplete').should('have.value','India')


// visiblity and invisiblity

cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
   
//    radio buttons


cy.get('input[value="radio1"]').check().should('be.checked')
   
    })
   
   
   
   
   })