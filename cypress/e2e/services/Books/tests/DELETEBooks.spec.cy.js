import * as GETBooks from '../requests/GETBooks.request';
import * as DELETEBooks from '../requests/DELETEBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';

describe ('DELETE Book', () => {
    it('Delete a book', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            DELETEBooks.deleteBook(resAllBooks.body[0].ID).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    })

    it('Create and Delete a book', () => {
        POSTBooks.addBook().then((resAddBook) => {
            DELETEBooks.deleteBook(resAddBook.body.ID).should((resDeleteBook) => {
                expect(resDeleteBook.status).to.eq(200);
            })
        })
    })

})


/*
- funcao para excluir um livro,
- importar o GETBooks de outro arq. para conseguirmos consultar
- o assert irá ser só no deletebooks
- request dentro de outra request dar nomes claros de responses
verificar a response de all books e a posição do livro que foi criado.
Se fosse usar mais de uma vez, guardaria em uma variavel.


describe ('DELETE Books', () => {
    it('Delete a book', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            cy.log(resAllBooks.body[0].ID)
        })
    })
})

PUT será uma compilação de todas as outras, passar o GET e o delete
*/