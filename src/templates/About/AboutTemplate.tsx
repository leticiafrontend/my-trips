import { CloseOutline } from '@styled-icons/evaicons-outline'
import { LinkWrapper } from 'components/LinkWrapper'
import React from 'react'
import { Body, Container, Heading } from './styles'

export const AboutTemplate = () => {
  return (
    <Container>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Close" />
      </LinkWrapper>
      <Heading>My Trips</Heading>
      <Body>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        doloribus velit reprehenderit possimus excepturi a quis pariatur
        nesciunt aliquid? Officia, quidem perspiciatis! Alias qui totam magnam,
        numquam id enim quidem!
      </Body>
    </Container>
  )
}
