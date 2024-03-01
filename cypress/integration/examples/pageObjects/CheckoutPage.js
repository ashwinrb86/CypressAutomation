class CheckoutPage

{

getDeliveryLocation(){

    return cy.get('#country')

}

getcheckbox(){

    return cy.get('.checkbox > label')
}

getPurchseBtn(){

    return cy.get('.ng-untouched > .btn')
}


getMsg(){

    return cy.get('.alert')
}

}

export default CheckoutPage