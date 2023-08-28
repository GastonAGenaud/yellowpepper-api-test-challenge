class CheckoutPage{
    addressLine1Field(){
        return cy.get("input#location-shoppingcart");
    }
    addressPhoneNumberField(){
        return cy.get("input#PhoneNumber-location-shoppingcart");
    }
    addressSaveAddressCheckbox(){
        return cy.get("input#save-address");
    }
    addressAcceptBtn(){
        return cy.get("#addAddress");
    }
    clearCartBtn(){
        return cy.get(".text-decoration-none.mx-2.delete__all__cart");
    }
    modalDeleteBtn(){
        return cy.get(".btn.mt-2.btn-action.iziToast-buttons-child.revealIn");
    }
}
export default CheckoutPage;