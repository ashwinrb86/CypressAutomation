

/// <reference types="Cypress" />


import HomePage from '../../pageObjects/HomePage'
import ProductsPage from '../../pageObjects/ProductsPage'
import ProductsReview from '../../pageObjects/ProductsReview'
import CheckoutPage from '../../pageObjects/CheckoutPage'

import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";


const hp= new HomePage();
const pp= new ProductsPage();
const pr= new ProductsReview();
const co= new CheckoutPage();

let name
// Scenario: Ecommerce product orrdering and delivery
//Given I open ecommerce home page and provide details 
Given ('I open ecommerce home page and provide details', function (dataTable){
    name=dataTable.rawTable[1][0]
    cy.visit(Cypress.env('url')+"/angularpractice/")
    hp.getNameEditBox().type(name)
    hp.getgender().select(dataTable.rawTable[1][1])
    


})

// When I select the product and add them to Cart
When ('I select the product and add them to Cart', function (){

    hp.getShopTab().click()

    this.data.ProdName.forEach(function(element){
        cy.SelectProduct(element)
    })
    
    pp.getProductsReview().click()

})


//  When And validate the total price
When ('validate the total price', function (){

    var sum=0
cy.get('td.col-md-1:nth-child(4)').each(($el, index, $list) => {
    var resText = $el.text()
    var res = resText.split(" ")
    res=res[1].trim()
    
   sum=Number(sum)+Number(res)     
               
            }).then(function(){
                cy.log(sum)
            })
cy.get('h3 > strong').then(function(element) {
    var resText1 = element.text()
    var res1 = resText1.split(" ")
    var total =res1[1].trim()
expect(Number(total)).to.equal(sum)})

pr.getCheckoutPage().click()

 })


//  Then select the country of delivery submit verify confirmation message
 Then ('select the country of delivery submit verify confirmation message', function (){


    co.getDeliveryLocation().click().type('Ind')
    //    cy.SelectProduct('Nokia Edge')
    //    cy.SelectProduct('Blackberry')
    //  cy.wait(4000)
    Cypress.config('defaultCommandTimeout', 8000)
    cy.log("waiting")
     cy.get('.suggestions ul li a').each(($el, index, $list) => {
        
        const option = $el.text()
           if (option === 'India') {
                   cy.wrap($el).click()
                   } 
                })
    co.getcheckbox().click({force: true})      
    co.getPurchseBtn().click()  
    co.getMsg().should('contain.text',' Thank you! Your order will be delivered in next few weeks :-).')


 })


 //Scenario: Fill the form and move to Shopping page
//  Given I open ecommerce home page - already defined above scenario



 //  When And Validate the details on the page
 When ('Validate the details on the page', function (){

    hp.getTwoWayDataBinding().should('have.value',name)
    hp.getNameEditBox().should('have.attr','minlength','2')
    hp.getEntrepreneur().should('be.disabled')

 })

//  Then move to Shopping page
Then ('move to Shopping page', function (){

    hp.getShopTab().click()

})

