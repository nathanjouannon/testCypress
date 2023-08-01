
function randomMail() {
    const random = Date.now().toString()
    return `mailtest${random}@gmail.com`
}
function randomPassword() {
    const random = Date.now().toString()
    return `Password1234!!${random}`
}

let mail = randomMail()
let password = randomPassword()

describe('create account', () => {
    it('register', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('button[data-qa="accept-cta"]').click()
        cy.get('input[id="firstName"]').type('test')
        cy.get('input[id="lastName"]').type('test')
        cy.get('input[id="signup-email"]').type(mail)
        cy.get('input[id="signup-password"]').type(password)
        cy.get('._2OVE0h6V').click()
        cy.get('[data-qa="signup-submit-button"]').click()
        cy.wait(5000)
        cy.contains('Mes commandes')
    })
})


describe('connect to account ', () => {
    it('visit back market', () => {
        cy.visit('https://preprod.backmarket.fr/register')
        cy.get('button[data-qa="accept-cta"]').click()
        cy.get('#signin-email').type(mail)
        cy.get('#signin-password').type(password)
        cy.get('[data-qa="signin-submit-button"]').click()
        cy.contains('Mes commandes')
    })
})

