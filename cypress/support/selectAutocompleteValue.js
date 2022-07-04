export const selectAutocompleteDropdown = (id, value) => {
    cy.get(id).each(( listItem ) => {
        if(listItem.text().includes(value)){
                
            cy.wrap(listItem).click();
         }
    })
};