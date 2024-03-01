


/// <reference types="Cypress" />


describe ('Test Suite', function (){
    it ('Testcase', function (){
   
   cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
   

// table handling


//identify the css for complete column using nth-child and use each method to scah each element

cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
    // $el is a wrapped jQuery element
    let courseName = $el.text()

    // if condition to identify the required element, 
    // use eq method with index then use next() to move to next columne with same index.
    // use then to resolve promise then check the retrieved value

    if (courseName.includes('Advanced Selenium Framework Pageobject, TestNG, Maven, Jenkins,C')) 
        {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function (price)
                    {
                const priceText = price.text()
                expect(priceText).to.equal('20')

                    })
        } 

  
})
    })
   })