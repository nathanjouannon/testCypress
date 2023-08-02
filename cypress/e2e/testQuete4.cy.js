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



// describe('test Quete 4 upload file', () => {
//     beforeEach(() => {
//         cy.visit('https://filebin.net/')
//     })
//     it("Upload file and download it in Zip format", () => {
//         cy.get('#fileField').selectFile('/Users/nathanjouannon/Desktop/suivieCyber.ods', {action: 'drag-drop'});
//         cy.contains("Download files").click();
//         cy.contains("Zip")
//           .invoke("attr", "href")
//           .then((downloadLink) => {
//             const absulteLink = "https://filebin.net/" + downloadLink;
//             cy.log(absulteLink);
//             cy.downloadFile(
//               absulteLink,
//               "mydownloads/zipFiles",
//               "downloadedFromCypress.zip"
//             );
//             cy.readFile("mydownloads/zipFiles/downloadedFromCypress.zip");
//           });
//       });

//       it("Upload file and download it in Tar format", () => {
//         cy.get('#fileField').selectFile('/Users/nathanjouannon/Desktop/suivieCyber.ods', {action: 'drag-drop'});
//         cy.contains("It contains 1 uploaded file").should("be.visible");
//         cy.contains("Download files").click();
//         cy.contains("Tar")
//           .invoke("attr", "href")
//           .then((downloadLink) => {
//             const absulteLink = "https://filebin.net/" + downloadLink;
//             cy.log(downloadLink);
//             cy.downloadFile(
//               absulteLink,
//               "mydownloads/tarFiles",
//               "downloadedFromCypress.tar"
//             );
//             cy.readFile("mydownloads/tarFiles/downloadedFromCypress.tar");
//           });
//       });
// })