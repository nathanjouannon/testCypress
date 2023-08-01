Cypress.Commands.add('login', (email, password) => {
    cy.request('POST', 'https://practice.expandtesting.com/notes/api/users/login', {
        email: email,
        password: password
    })
})