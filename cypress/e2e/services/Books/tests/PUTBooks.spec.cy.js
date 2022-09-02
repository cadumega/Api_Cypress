import * as GETBooks from '../requests/GETBooks.request';
import * as POSTBooks from '../requests/POSTBooks.request';
import * as DELETEBooks from '../requests/DELETEBooks.request';

import * as PUTBooks from '../requests/PUTBooks.request';


describe ('Change Books', () => {
    it('Change a book', () => {
        GETBooks.allBooks().then((resAllBooks) => {
            PUTBooks.changeBook(resAllBooks.body[0].ID).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null
                expect(resChangeBook.body.title).to.eq("Book Change");
            })
        })
    })

    it('Create and change the book', () => {
        POSTBooks.addBook().then((resAddBooks) => {
            PUTBooks.changeBook(resAddBooks.body.ID).should((resChangeBook) => {
                expect(resChangeBook.status).to.eq(200);
                expect(resChangeBook.body).to.be.not.null
                expect(resChangeBook.body.title).to.eq("Book Change");
            })
        })
    })

})


/*
- não sabemos quais livros existem, preciso chamar os outros metodos
- nao sera uma array , apenas um objeto ao add o book
*/