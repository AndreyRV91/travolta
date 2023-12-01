import { describe, it, expect } from 'vitest'

import { render, screen } from '@testing-library/vue'
import HotelList from '@/components/HotelList.vue'
import { hotelsMock } from '@/components/__mocks__/'

describe('HotelList', async () => {
  it('renders with 10 hotels items', async () => {
    render(HotelList, {
      props: {
        hotels: hotelsMock
      }
    })

    expect(await screen.findAllByRole('listitem')).to.have.lengthOf(10)
  })
})
