/// <reference types="cypress" />

const { selectAutocompleteDropdown } = require("../support/selectAutocompleteValue")

describe('GoCompare test suite', () => {

    beforeEach(() => {
        cy.visit('/')
      })

    it('check title', () => { 
       
        cy.title().should('equal', 'Go Compare Money | Car Finance')
       
    })

    it('complete car finance journey', () => {
      
        cy.get('#cc-banner-btn-allow')
            .click()

        cy.get('[class="c-radio-button c-radio-button--lozenge c-radio-button--lozenge--columns-2"]')
            .contains('span', 'No')
            .click()

        cy.get('[data-qa-id="value"]')
            .type("10000")

        cy.get('[data-qa-id="depositAmount"]')
            .type("1000")

        cy.get('select').select(2)

        cy.get('[data-qa-id="car-details-form__submit"]')
            .click()

        cy.get('select').select(4)
        
        cy.get('#firstName')
            .type('John')
        
        cy.get('#lastName')
            .type('Doe')

        cy.get('#dateOfBirth__day')
            .type(17)

        cy.get('#dateOfBirth__month')
            .type(11)

        cy.get('#dateOfBirth__year')
            .type(1986)

        cy.get('#email')
            .type('JohnDoe@gmail.com')

        cy.get('#phoneNumber')
            .type('07356293005')

        cy.get('[data-qa-id="address-search-0-search-postcode"]')
            .type('B90 4PE')
        
        cy.get('[class="c-button c-button--secondary c-form-search__submit"]')
            .click()

        cy.get('.c-form-address-search__addresses__list')
            .contains('li', '57 Kerswell Drive')
            .scrollIntoView()
            .click()

        cy.get('.c-radio-button--lozenge__name')
            .contains('span', 'More than 3 years')
            .click()

        cy.get('[class="c-button c-button--primary c-button--progression"]')
            .click()

        cy.wait(4000);    

        cy.get('[data-qa-id="annualIncomeGross"]')
            .type(23000)
        
        cy.get('[data-qa-id="residentialStatus"]')
        .select('2: HomeOwnerMortgage')
        .should('have.value','2: HomeOwnerMortgage')
        .should('contain.text','Home Owner Mortgage')

        cy.get('[data-qa-id="employmentStatus"]')
        .select('1: Employed')
        .should('contain.text','Employed')

        cy.get('#employmentTitle')
            .type('IT Manager')

        selectAutocompleteDropdown('.c-form-input-autocomplete__list__button', 'IT Manager')

        cy.get('#employmentIndustry')
            .type('Finance')

        selectAutocompleteDropdown('.c-form-input-autocomplete__list__button', 'Finance Company')
       
        cy.get('[data-qa-id="employerName"]')
            .type('Revolut')

        cy.get('[data-qa-id="monthlyRentOrMortgage"]')
            .type(900)

        cy.get('.c-radio-button--circle__name')
            .contains('span', 'None')
            .click()
        
        cy.get('[class="c-button c-button--primary c-button--progression"]')
            .click()
        
        cy.get('.c-options-banner__heading__button')
            .contains(' Your car finance options ')
        
        cy.get('.c-results-header__count__text')
            .should('contain', 'personalised results found based on the information you’ve provided')
    })
})

