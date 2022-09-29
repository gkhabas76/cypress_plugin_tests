describe('visual test spec', () => {
  it('should test snapshot', () => {
    cy.visit('https://sitespractice.netlify.app/');
    cy.matchImage();
  });
});
