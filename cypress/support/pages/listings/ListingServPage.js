class ListingServPage {

    listingName() {
        return cy.get('#name')
    }
    description() {
        return cy.get('#description')
    }
    hourleyoffering() {
        return cy.get('#hourlyPrice')
    }
    addYouTubeUrl() {
        return cy.get('#url-0')
    }
    addVideoUrlBtn() {
        return cy.get('.cursor-pointer.add-video.ml-2')
    }
    goToDetails() {
        return cy.get('#go-detail-button')
    }
    englishCheck() {
        return cy.get('#checkbox-0-0')
    }
    remoteCheck() {
        return cy.get('#checkbox-1-0')
    }
    webDevelopmentCheck() {
        return cy.get('#checkbox-1-0')
    }
    goToAvailability() {
        return cy.get('#go-availability-button')
    }
    daysField() {
        return cy.get('.dropdown-item.cursor-pointer.d-flex.align-items-center.justify-content-between')
    }
    fromField() {
        return cy.get('#availableTimeFrom')
    }
    toField() {
        return cy.get('#availableTimeTo')
    }
    addAvailableDays() {
        return cy.get('.d-block.cursor-pointer.add-available-time-slot.text-center')
    }
    publishBtn() {
        return cy.get('.btn.btn-height.btn-secondary.btn-icon-left.publish-button')
    }
    addNewBtn() {
        return cy.get('#add-new-btn')
    }
    selectDaysField() {
        return cy.get('#multi-select-button')
    }

    selectDate31() {
        return cy.get('span[data-date="1690772400000"]').first()
    }

    selectHour() {
        return cy.get('span[data-time="11:45"]')
    }

    hireButton() {
        return cy.get('#hire-avt-btn')
    }

    startDate(element) {
        return cy.get('#hourly-start').find('option').contains(element)
    }


}
export default ListingServPage;