import { describe, it, expect } from 'vitest'

import { render, screen } from '@testing-library/vue'
import HotelItem from '@/components/HotelItem.vue'

const hotel = {
  id: 677476,
  name: 'Smart 2BR in Brighton by Sonder',
  address: 'Commonwealth Avenue and Chestnut Hill av',
  city: 'Boston',
  state: 'MA',
  country_code: 'US',
  hotel_rating: 3.5,
  phone_number: null,
  website: null
}

describe('HotelItem', () => {
  it('renders with correct hotel name', async () => {
    render(HotelItem, {
      props: {
        hotel
      }
    })

    expect(screen.getByText(hotel.name).textContent).toContain(hotel.name)
  })

  it('renders with correct hotel address', async () => {
    render(HotelItem, {
      props: {
        hotel
      }
    })

    expect(screen.getByText(hotel.address).textContent).toContain(hotel.address)
  })
})
