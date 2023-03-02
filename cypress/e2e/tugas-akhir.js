/// <reference types="cypress"/>

import 'cypress-iframe'
const {Given,When,Then} = require('@badeball/cypress-cucumber-preprocessor');

    Given("I open the website",()=>{
    cy.visit("https://demo.midtrans.com/")
    cy.url().should("include","https://demo.midtrans.com/")
    })

    When("I select credit debit card method",()=>{
    cy.frameLoaded('#snap-midtrans')
    cy.iframe().contains('Credit/debit card').click()
    })

    When("I click the buy button",()=>{
    cy.get('.buy').click()
    })

    When("I click the check out button",()=>{
    cy.get('.cart-checkout').click()
    })
    
    When("I fill the information with valid data",()=>{
    cy.iframe().find('.card-number-input-container').type('1234123412341234')
    cy.iframe().find('#card-expiry').type('0228')
    cy.iframe().find('#card-cvv').type('123')
    })

    When("I fill the information with invalid data",()=>{
    cy.iframe().find('.card-number-input-container').type('1111111111111111')
    cy.iframe().find('#card-expiry').type('0228')
    cy.iframe().find('#card-cvv').type('321')
    cy.iframe().find('.card-pay-button-part').click()
    })
    
    When("I click pay now button",()=>{
    cy.iframe().find('.card-pay-button-part').click()
    })
    
    Then("I should see my order",()=>{
    cy.iframe().contains('Credit/debit card').scrollIntoView().should('be.visible')    
    })
    Then("I should see unable to proceed",()=>{
    cy.iframe().contains('Credit/debit card').scrollIntoView().should('be.visible')    
    })

    When("I select bank transfer method",()=>{
    cy.frameLoaded('#snap-midtrans')
    cy.iframe().contains('Bank transfer').click()
    })
     
    When("I select BCA",()=>{
    cy.iframe().contains('BCA').click()
    })

    Then("I should see va code",()=>{
    cy.iframe().contains('Virtual account number').should('be.visible')    
    })

    When("I select gopay method",()=>{
    cy.frameLoaded('#snap-midtrans')
    cy.iframe().contains('GoPay').click()
    })

    Then("I should see gopay qr code",()=>{
    cy.iframe().contains('GoPay').should('be.visible')    
    })

    When("I select kredivo method",()=>{
    cy.frameLoaded('#snap-midtrans')
    cy.iframe().contains('Kredivo').click()
    })
    
    When("I click pay now button in kredivo",()=>{
    cy.iframe().find('.button-down').click()
    })

    When("I input phone number and pin",()=>{
    cy.get('#phoneNumber').type('081123123123')
    cy.get('#pin').type('123456')
    cy.contains('Next').click()
    })

    When("I input valid phone number and pin",()=>{
    cy.get('#phoneNumber').type('081123123123')
    cy.get('#pin').type('123456')
    cy.contains('Next').click()
    })

    When("I input invalid phone number and pin",()=>{
    cy.get('#phoneNumber').type('081321321321')
    cy.get('#pin').type('123456')
    cy.contains('Next').click()
    })

    When("I input otp number",()=>{
    cy.get('#otp').type('1234')
    cy.contains('Next').click()
    })
    
    Then("I should see notification Transaction is Successful",()=>{
    cy.contains('Transaction is Successful').should('be.visible')    
    })

    Then("I should see notification Transaction is Denied",()=>{
    cy.contains('Transaction is Denied').should('be.visible')    
    })
    
    When("I select alfa group method",()=>{
    cy.frameLoaded('#snap-midtrans')
    cy.iframe().contains('Alfa Group').click()
    })
        
    Then("I should see alfa payment code",()=>{
    cy.iframe().contains('Alfa Group').should('be.visible')    
    })
