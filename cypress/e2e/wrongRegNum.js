/// <reference types="cypress" />

describe('Incorrect registration number', () => {

    it('Error message displayed', () => {
        cy.visit('/')     
        
        cy.get('#car-registration-search')
            .type('456tg')
        
        cy.get('[class="c-button c-button--secondary c-form-search__submit"]')
            .click()
        
        cy.get('[class="c-form-dialog"]')
            .find('.c-alert')
            .should('contain.text','We are sorry but no vehicles could be found.')

       })
       
    }) 
