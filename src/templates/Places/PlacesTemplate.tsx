import Image from 'next/image'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import { LinkWrapper } from 'components/LinkWrapper'
import { Body, Container, Gallery, Heading, Wrapper } from './styles'
import { PlacesTemplateProps } from './types'
import { useRouter } from 'next/dist/client/router'

export const PlacesTemplate = ({ place }: PlaceTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <LinkWrapper href="/">
        <CloseOutline size={32} aria-label="Close" />
      </LinkWrapper>
      <Wrapper>
        <Container>
          <Heading>{place.name}</Heading>
          <Body
            dangerouslySetInnerHTML={{ __html: place.description?.html || '' }}
          />
          <Gallery>
            {place.gallery.map(({ url, name, slug }) => (
              <Image
                src={url}
                alt={name}
                key={slug}
                width={1000}
                height={600}
                quality={75}
              />
            ))}
          </Gallery>
        </Container>
      </Wrapper>
    </>
  )
}
