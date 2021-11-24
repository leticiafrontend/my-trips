type ImageProps = {
  url: string
  height: number
  width: number
}

export interface PlaceTemplateProps {
  place: {
    slug: string
    name: string
    description?: {
      html: string
    }
    gallery: ImageProps[]
  }
}
