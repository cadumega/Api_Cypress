/// <reference types="cypress" />

function allBooks() {

    return cy.request ({
        method: 'GET' ,
        url: 'Books',
        failOnStatusCode: false,
    })
}

export {allBooks};


/* 
- url pego do Swagger API, verificar questão de / se tiver ou não dependendo como foi config.
- para teste de UI é bom o failOnStatusCode se não retornar 200 quebrar., utilizamos essa tag
- toda funcao precisamos exportar.

*/