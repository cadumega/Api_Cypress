import * as GETBooks from '../requests/GETBooks.request';

describe ('GET Books', () => {
    it('Listar todos os livros', ()=> {
        GETBooks.allBooks().should((response) => {
            cy.log(response.status)
            cy.log(response.statusText)
            cy.log(response.body)

            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null
        })
    })
})



// Só validamos se o response veio 200
// Iremos fazer + um expect, o retorno não pode ser nulo, como uma array vazia q poderia vir.
// Primeiro test concluído para utilizarmos eles.