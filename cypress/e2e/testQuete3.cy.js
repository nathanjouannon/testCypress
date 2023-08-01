    // début du challenge 3

describe('test de lAPI notes', () => {
    let user = require('../fixtures/userData.json')
    it('login', () => {
        // cy.login(user.email, user.password)
        cy.request('POST', 'https://practice.expandtesting.com/notes/api/users/login', {
            email: user.email,
            password: user.password
        })
            .then((response) => {
                expect(response.status).to.eq(200)
                expect(response.body).to.have.property('status')
                expect(response.body).to.have.property('data')
            })
        it('get profile', () => {
            cy.request('GET', 'https://practice.expandtesting.com/notes/api/users/profile')
                .then((response) => {
                    expect(response.body).to.have.property('status')
                    expect(response.body).to.have.property('data')
                    expect(response.body.message).to.eq('Profile successful')
                })
        })
        let note= require('../fixtures/notes.json')
        it('cereate note', () => {
            cy.request('POST', 'https://practice.expandtesting.com/notes/api/notes', {
                title: note.title,
                description: note.description,
                category: note.category
            })
                .then((response) => {
                    expect(response.body).to.have.property('status')
                    expect(response.body).to.have.property('data')
                    expect(response.body.data.title).to.eq(note.title)
                })
        })
        it('get notes', () => {
            cy.request('GET', 'https://practice.expandtesting.com/notes/api/notes')
                .then((response) => {
                    expect(response.body).to.have.property('status')
                    expect(response.body).to.have.property('data')
                    expect(response.body.message).to.eq('Notes successfully retrieved')
                    Cypress.env('noteID', response.body.data[0].id );
                })
        })
        it('delete note', () => {
            const noteID = Cypress.env('noteID')
            cy.request('DELETE', `https://practice.expandtesting.com/notes/api/notes/${noteID}`)
                .then((response) => {
                    expect(response.body).to.have.property('status')
                    expect(response.body.message).to.eq('Successful Request')
                })
        })
    })
})
