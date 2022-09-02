# Api_Cypress
 Testes na fakerestapi



describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})


/// <reference types="cypress" />

describe("Teste", () => {
    it("GET: Verificar Usuários", () => {
        Usuarios.usuarios().should((response) => {
            expect(response.status).to.eq(200);
        })
    })
})


function usuarios() {
    return cy.request({
        method:'GET',
        url:`${Cypress.env("apiUrl")}/users`
    })
}


/* FakeRESTApi.Web V1
https://fakerestapi.azurewebsites.net/index.html

Testar camada de dados , as requests e suas responses.
Status code, tempo da response, retorno de mensagem, tipagem coerente com a documentação, valor máx e mín de retorno,
que nem os testes de UI. Testar antecipadamente do que os testes de UI que exigem mais do front. 
ex. Consulta de CEP ou dado de cartão. (oculto na camada de dados e na UI)

Testar fluxos de dados sem precisar entrar na interface.
Garantir que o CRUD esta funcional.

Alterar scripts no package.json
  "scripts": {
    "cypress:open": "./node_modules/.bin/cypress open",
    "cypress:run": "./node_modules/.bin/cypress run"
  },
executar:
  npm run cypress:open

Boa prática criar os testes que representam a funcionalidade, dentro de services. Separamos por endpoints.
Configurar a baseUrl, no swagger da doc. clicar em try it out...
https://fakerestapi.azurewebsites.net/api


payloads - colocar os json, tudo que vou enviar

verbo do método, o endpoint e o motivo do arquivo e por fim a extensão.
*/