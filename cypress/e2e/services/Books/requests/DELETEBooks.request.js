/// <reference types="cypress" />

function deleteBook() {                 // (idBook)

    return cy.request ({
        method: 'DELETE' ,
        url: 'Books/1',   //         url: `Books/$(idBook)`,  // ta falhando verificar
        failOnStatusCode: false,
    })
}

export {deleteBook};


/* 
- não tem body , pois passamos a id na propria url, mas poderia ter dependendo. 
*/