import SearchForm from '@/components/SearchForm.vue'

describe('<SearchForm />', () => {
  it('renders SearchForm', () => {
    cy.mount(SearchForm)
  })

  it('should not submit invalid form', () => {
    cy.mount(SearchForm)

    cy.get('form').submit()

    cy.get('[data-test-id=search-destination]').should('contain', 'Please input destination')
    cy.get('[data-test-id=search-checkin]').should('contain', 'Please pick a date')
    cy.get('[data-test-id=search-checkout]').should('contain', 'Please pick a date')
  })

  it('submits form and redirects to /hotels', () => {
    cy.mount(SearchForm)

    cy.get('[data-test-id=search-destination]').type('Boston')
    cy.get('[data-test-id=search-checkin]').type('2223-12-01')
    cy.get('[data-test-id=search-checkout]').type('2223-12-15')
    cy.get('[data-test-id=submit-button]')
      .click()
      .then(() => {
        cy.url().should('include', '/hotels')
      })
  })
})
