class SwimplePage {

    homeSearchButtonSwimple() {
        return cy.get('#search-btn-location-carousel')
    }

    homeSearchSwimple(){
        return cy.get('#location-address-rental-carousel')
    }

    hostButton(){
        return cy.get('.nav-item.nav-link.secondary-font.px-0.cl-white')
    }
}



export default SwimplePage;