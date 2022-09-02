/// <reference types="cypress" />


const payLoadChangeBook = require('../payloads/change-book.json')

function changeBook() {                 // (idBook)
    return cy.request ({
        method: 'PUT' ,
        url: `Books/1`,   //         url: `Books/$(idBook)`,  // ta falhando verificar
        headers: {
            'Content-Type' : 'application/json',
        },
        failOnStatusCode: false,
        body: payLoadChangeBook
    })
}

export {changeBook};


/* 
- não tem body , pois passamos a id na propria url, mas poderia ter dependendo. 

*/