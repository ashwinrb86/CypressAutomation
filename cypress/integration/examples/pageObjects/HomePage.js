class HomePage

{

getNameEditBox(){

    return cy.get('input[name="name"]:nth-child(2)')
}

getgender(){

   return cy.get('#exampleFormControlSelect1')
}


getTwoWayDataBinding(){

    return cy.get('input[name="name"]:nth-child(1)')
}


getEntrepreneur(){

    return cy.get('#inlineRadio3')
}

getShopTab(){

    return cy.get(':nth-child(2) > .nav-link')
}

}

export default HomePage