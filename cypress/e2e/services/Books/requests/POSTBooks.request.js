/// <reference types="cypress" />

function addBook() {

    const payloadAddBook = require('../payloads/add-book.json')

    return cy.request ({
        method: 'POST',
        url: 'Books',
        failOnStatusCode: false,
        body: payloadAddBook
    })
}

export {addBook};


/* 
- para o POST, preciso do body no json, parecido com o postman de pre script

*/