import HotelList from '@/components/HotelList.vue'
import { hotelsMock } from '@/components/__mocks__/'

describe('<HotelList />', () => {
  it('renders additional 10 hotels on scrolling', () => {
    cy.mount(HotelList, { props: { hotels: hotelsMock } })
    cy.scrollTo(0, 3000)
    cy.get('[data-test-id="hotel-list"]').find('li').should('have.length', 20)
  })
})
