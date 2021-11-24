import Image from 'next/image'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import { LinkWrapper } from 'components/LinkWrapper'
import { Body, Container, Gallery, Heading, Wrapper } from './styles'
import { PlaceTemplateProps } from './types'
import { useRouter } from 'next/dist/client/router'
import { NextSeo } from 'next-seo'

export const PlacesTemplate = ({ place }: PlaceTemplateProps) => {
  const router = useRouter()

  if (router.isFallback) return null

  return (
    <>
      <NextSeo
        title={`${place.name} - My Trips`}
        description={
          place.description?.text ||
          'A simple project to show in a map the places that I went and show more informations and photos when clicked.'
        }
        canonical="https://mytrips.leitcia.vercel.com"
        openGraph={{
          url: 'https://mytrips.leitcia.vercel.com',
          title: `${place.name} - My Trips`,
          description:
            place.description?.text ||
            'A simple project to show in a map the places that I went and show more informations and photos when clicked.',
          images: [
            {
              url: place.gallery[0].url,
              width: place.gallery[0].width,
              height: place.gallery[0].height,
              alt: `${place.name}`
            }
          ]
        }}
      />
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
            {place.gallery.map((image, index) => (
              <Image
                key={`photo-${index}`}
                src={image.url}
                alt={place.name}
                width={image.width}
                height={image.height}
                quality={75}
              />
            ))}
          </Gallery>
        </Container>
      </Wrapper>
    </>
  )
}
