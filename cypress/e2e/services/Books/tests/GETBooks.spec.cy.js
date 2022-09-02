import * as GETBooks from '../requests/GETBooks.request.cy';

describe ('GET Books', () => {
    it('Listar todos os livros', ()=> {
        GETBooks.allBooks().should((response) => {
            cy.log(response.status)
            cy.log(response.statusText)
        })
    })
})