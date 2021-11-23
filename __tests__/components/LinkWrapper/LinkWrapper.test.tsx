import { render, screen } from '@testing-library/react'
import { LinkWrapper } from '../../../src/components/LinkWrapper'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    render(<LinkWrapper href="/my-link">Link</LinkWrapper>)

    const children = screen.getByRole('link', { name: /Link/i })

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  })
})
