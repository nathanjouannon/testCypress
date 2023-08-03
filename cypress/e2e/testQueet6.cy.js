import { MailSlurp } from 'mailslurp-client';

// function randomMail() {
//     const random = Date.now().toString()
//     return `mail.test${random}@gmail.com`
// }

function randomPassword() {
    const random = Date.now().toString()
    return `Password1234!!${random}`
}

// isert your api key here or decoment the line 15 and comment the line 14 si vous tester apres 3/09/23 (ma cle API à atteint les quotas menseul)
const mailslurp = new MailSlurp({ apiKey: "your API key" });
// const mailslurp = new MailSlurp({ apiKey: "1cfd678b7d5ecb9ec3de37f32f7c4c4c727c6a59974b4db5b46ce1304a342cfd" });
const createInbox = async () => {
    const inbox = await mailslurp.inboxController.createInbox({});
    expect(inbox.emailAddress).contain('@mailslurp');
    const inboxInfos = [inbox.id, inbox.emailAddress]
    return inboxInfos;
};

let newmail = '';
let password = '';
let inboxID = '';

describe('gestion utilisateur', () => {
    before(async () => {
        const inboxInfos = await createInbox();
        newmail = inboxInfos[1];
        inboxID = inboxInfos[0];
        console.log(newmail)
        console.log(inboxID)
        password = randomPassword();
    });
    describe('create account', () => {
        it('register', () => {
            cy.visit('https://preprod.backmarket.fr/register')
            cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click()
            cy.get('input[id="firstName"]').type('test')
            cy.get('input[id="lastName"]').type('test')
            cy.get('input[id="signup-email"]').type(newmail)
            cy.get('input[id="signup-password"]').type(password)
            cy.get('._2OVE0h6V').click()
            cy.get('[data-qa="signup-submit-button"]').click()
            cy.contains('Mes commandes')
            cy.wait(100)
        })
    })

    describe('connect to account ', () => {
        it('visit back market', () => {
            cy.visit('https://preprod.backmarket.fr/register')
            cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click()
            cy.get('#signin-email').type(newmail)
            cy.get('#signin-password').type(password)
            cy.get('[data-qa="signin-submit-button"]').click()
            cy.contains('Mes commandes')
        })
    })

    describe('envoi du mail de reinitialisataion ', () => {
        it('visit back market', () => {
            cy.visit('https://preprod.backmarket.fr/register')
            cy.get('[data-qa="accept-cta"] > .MkLAMntR > ._2GvJDBxS').click()
            cy.get('form > :nth-child(3) > .cK_xUFG6').click()
            cy.get('#email').type(newmail)
            cy.get('[data-test="password-reset-submit-button"]').click()
            cy.wait(300)
        })
    })

    describe('réinitialisation le mot de passe', () => {
        it('récupéré le liens dans le mail',async () => {
            const latestEmail = await mailslurp.waitController.waitForLatestEmail({
                inboxId: inboxID,
                timeout: 30000,
                unreadOnly: true,
            });
              
            const pattern = 'https://clicks.backmarket.com/f/a/\\S+'; // Pattern for the specific link
            expect(latestEmail.body).to.contain('Mon mot de passe');
          
            const result = await mailslurp.emailController.getEmailContentMatch({
              contentMatchOptions: { pattern },
              emailId: latestEmail.id,
            });
            
            const link = result.matches[0];
            console.log(link);
            console.log(result);
            cy.visit(link);              
        });
    })
})
