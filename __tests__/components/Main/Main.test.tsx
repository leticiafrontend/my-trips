import { render, screen } from '@testing-library/react'
import { Main } from '../../../src/components/Main'

describe('<Main />', () => {
  it('should render page', () => {
    const { container } = render(<Main />)

    expect(screen.getByText('My Trips')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
