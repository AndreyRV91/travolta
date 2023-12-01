import SearchForm from '@/components/SearchForm.vue'

describe('<SearchForm />', () => {
  it('renders SearchForm', () => {
    cy.mount(SearchForm)
  })

  it('should not submit invalid form', () => {
    cy.mount(SearchForm)

    cy.get('form').submit()

    cy.get('[data-testid=search-destination]').should('contain', 'Please input destination')
    cy.get('[data-testid=search-checkin]').should('contain', 'Please pick a date')
    cy.get('[data-testid=search-checkout]').should('contain', 'Please pick a date')
  })

  it('submits form and redirects to /hotels', () => {
    cy.mount(SearchForm)

    cy.get('[data-testid=search-destination]').type('Boston')
    cy.get('[data-testid=search-checkin]').type('2223-12-01')
    cy.get('[data-testid=search-checkout]').type('2223-12-15')
    cy.get('[data-testid=submit-button]')
      .click()
      .then(() => {
        cy.url().should('include', '/hotels')
      })
  })
})
