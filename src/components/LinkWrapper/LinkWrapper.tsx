import Link from 'next/link'
import { Container } from './styles'
import { LinkWrapperProps } from './types'

export const LinkWrapper = ({ href, children }: LinkWrapperProps) => {
  return (
    <Container>
      <Link href={href}>{children}</Link>
    </Container>
  )
}
