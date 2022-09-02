import * as POSTBooks from '../requests/POSTBooks.request';

describe ('POST Books', () => {
    it('Add a new book', () => {
        POSTBooks.addBook().should((response) => {
            expect(response.status).eq(200);
            expect(response.body.title).to.eq("Book 1");
        });
    })
})


// pegamos a chave no json, verificar o nome de acordo