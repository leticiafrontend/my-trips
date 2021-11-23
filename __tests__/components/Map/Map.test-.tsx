import { render, screen } from '@testing-library/react'
import Map from '../../../src/components/Map'

describe('<Map />', () => {
  it('should render Map', () => {
    render(<Map />)

    expect(screen.getByText('Map')).toBeInTheDocument()
  })
})
