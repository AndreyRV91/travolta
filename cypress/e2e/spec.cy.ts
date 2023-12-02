describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:5173')
  })

  it('submits form, redirects to /hotels, search for Back Bay Suites and finds 2 items', () => {
    cy.visit('http://localhost:5173')

    cy.get('[data-test-id=search-destination]').type('Boston')
    cy.get('[data-test-id=search-checkin]').type('2223-12-01')
    cy.get('[data-test-id=search-checkout]').type('2223-12-15')
    cy.get('[data-test-id=submit-button]')
      .click()
      .then(() => {
        cy.url().should('include', '/hotels')
      })

    cy.get('[data-test-id=hotel-search-input]').type('Back Bay Suites')

    cy.get('[data-test-id="hotel-list"]').find('li').should('have.length', 2)
  })
})
