

/// <reference types="Cypress" />


import HomePage from '../examples/pageObjects/HomePage'
import ProductsPage from '../examples/pageObjects/ProductsPage'
import ProductsReview from '../examples/pageObjects/ProductsReview'
import CheckoutPage from '../examples/pageObjects/CheckoutPage'


describe ('Test Suite', function (){



    before (function() {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)
        {
            this.data=data
        })
      })

    it ('Testcase', function (){
        const hp= new HomePage();
        const pp= new ProductsPage();
        const pr= new ProductsReview();
        const co= new CheckoutPage();
//    cy.visit("https://rahulshettyacademy.com/angularpractice/")
   cy.visit(Cypress.env('url')+"/angularpractice/")

   hp.getNameEditBox().type(this.data.Name)
   hp.getgender().select(this.data.Gender)
   hp.getTwoWayDataBinding().should('have.value',this.data.Name)
   hp.getNameEditBox().should('have.attr','minlength','2')
   hp.getEntrepreneur().should('be.disabled')
   hp.getShopTab().click()

this.data.ProdName.forEach(function(element){
    cy.SelectProduct(element)
})

pp.getProductsReview().click()

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
expect(Number(total)).to.equal(sum)

})



pr.getCheckoutPage().click()
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
})

