class HowItWorksPage {

    howItWorksImageOne() {
        return cy.get('#nav-buyer > div > div:nth-child(1) > div > div.img-container > img')
    }
    howItWorksImageTwo() {
        return cy.get('#nav-buyer > div > div:nth-child(2) > div > div.img-container > img')
    }
    howItWorksImageThree() {
        return cy.get('#nav-buyer > div > div:nth-child(3) > div > div.img-container > img')
    }
}

export default HowItWorksPage;