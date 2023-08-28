class FooterPage {
    footerOption(text) {
        return cy.contains(text);
    }

    socialMediaLinksFooter() {
        return {
            Facebook: 'https://www.facebook.com',
            Linkedin: 'https://www.linkedin.com',
            Twitter: 'https://www.twitter.com',
            Instagram: 'https://www.instagram.com',
        };
    }

    facebookBtn() {
        return cy.get('i.fa-facebook-square').parents('a').invoke('removeAttr', 'target');
    }

    twitterBtn() {
        return cy.get('i.fa-twitter').parents('a').invoke('removeAttr', 'target');

    }

    linkedinBtn() {
        return cy.get('i.fa-linkedin').parents('a').invoke('removeAttr', 'target');
    }

    instagramBtn() {
        return cy.get('i.fa-instagram').parents('a').invoke('removeAttr', 'target');
    }
    faq() {
        return cy.get('#faq-footer-text-customize');
    }

    privacyPolicy() {
        return cy.get('#privacy-footer-text-customize');
    }

    contactUs() {
        return cy.get('#contact-footer-text-customize');
    }

    aboutUs() {
        return cy.get('#about-footer-text-customize');
    }
}


export default FooterPage;
