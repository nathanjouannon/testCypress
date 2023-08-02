  // début challenge 4

describe('upload image', () => {
  beforeEach(() => {
    cy.visit('https://imgur.com/upload')
  })
  it('upload image', () => {
    cy.get('body').selectFile('/Users/nathanjouannon/Desktop/image.jpeg', {action: 'drag-drop'});
    cy.contains('Add image')
  })
})

  // fin challenge 4