import { CloseOutline } from '@styled-icons/evaicons-outline'
import { LinkWrapper } from 'components/LinkWrapper'
import React from 'react'
import { Body, Container, Heading } from './styles'
import { PageTemplateProps } from './types'

export const PagesTemplate = ({ heading, body }: PageTemplateProps) => {
  return (
    <Container>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Close" />
      </LinkWrapper>
      <Heading>{heading}</Heading>
      <Body>
        <div dangerouslySetInnerHTML={{ __html: body }} />
      </Body>
    </Container>
  )
}
