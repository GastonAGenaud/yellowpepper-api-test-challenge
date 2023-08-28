class AddressesPage {

    addressesTab(text) {
        return cy.get(".flex-column.d-inline-flex").contains(text)
    }
    addressesLineField() {
        return cy.get("#location-address")
    }
    cityField() {
        return cy.get("#locality-location-address")
    }
    stateField() {
        return cy.get("#StateNameLong-location-address")
    }
    zipField() {
        return cy.get("#ZipCode-location-address")
    }
    phoneNumber() {
        return cy.get("#PhoneNumber-location-address")
    }
    nameAddressField() {
        return cy.get("#Name")
    }
    addAddress() {
        return cy.get(".col-lg-4.d-flex.align-items-center > a > span")
    }
    successMessage() {
        return cy.get(".iziToast-title.slideIn")
    }
    editButton() {
        return cy.contains('button', 'Edit');
    }
    editNameField() {
        return cy.get("#editName")
    }
    acceptBtn() {
        return cy.get(".btn.btn-primary.btn-og")
    }
    deleteBtn() {
        return cy.contains('button', 'Delete');
    }
    confirmDelete() {
        return cy.get(".btn.mt-2.btn-action.iziToast-buttons-child.revealIn")
    }

    addAddressButton() {
        return cy.get("#linkNewInternationalAddress")
    }

    addAddressText() {
        return cy.get('#location-address-international')
    }

    fulNameText() {
        return cy.get('#Name')
    }

    fullNameTextProducts() {
        return cy.get('#Name-international')
    }

    savedAddresses() {
        return cy.get(".d-flex.justify-content-between.align-items-center");
    }

    phoneNumberText() {
        return cy.get('#PhoneNumber-location-address-international')
    }

    cityTextField() {
        return cy.get('#locality-location-address-international')
    }

    stateTextField() {
        return cy.get('#StateNameLong-location-address-international')
    }

    zipTextField() {
        return cy.get('#ZipCode-location-address-international')
    }

    saveButton() {
        return cy.get('#addInternationalAddress')
    }

    waitProfileLoad() {
        return cy.get('#username-loginbar')
    }

    editSaveButton() {
        return cy.get('#editInternationalAddress')
    }

    editButtonInServices() {
        return cy.get('#address > div > div > div > div:nth-child(2) > a.cl-primary.mr-3');
    }

    deleteButtonInServices() {
        return cy.contains('a', 'Delete');
    }

    zipInternationalField() {
        return cy.get("#ZipCode-location-address-international")
    }

    saveAddress() {
        return cy.get("#addInternationalAddress")
    }

    addInternationalAddress() {
        return cy.get('[data-wording="profilesettings-addresses-add-button-add"]')
    }

    addressesInternationalLineField() {
        return cy.get("#location-address-international")
    }
    countryField() {
        return cy.get("#Country-location-address-international")
    }
    internationalPhoneNumber() {
        return cy.get("#PhoneNumber-location-address-international")
    }
    fullNameAddressField() {
        return cy.get("#Name-international")
    }

    addressLine1() {
        return cy.get('#location-address')
    }

    useThisAddress() {
        return cy.get('#btn-use-this-address')
    }

}

export default AddressesPage;