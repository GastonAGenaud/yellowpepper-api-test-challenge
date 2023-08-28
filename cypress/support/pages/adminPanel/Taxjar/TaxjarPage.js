class TaxjarPage {
    getPaginatedCategories() {
        const categories = [];
        cy.get("a.page-link:not(.prev-button):not(.next-button)").as("pages");
        cy.get("@pages").its("length").then(len => [...Array(len).keys()]).each(index => {
            cy.get("@pages").eq(index).click();
            cy.get("#taxjar_table_rows > tr.categories-row > td:first-child").each(categoryTd => {
                categories.push(categoryTd.text());
            });
        });
        return categories;
    }
}
export default TaxjarPage;