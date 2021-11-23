type Places = {
  id: string
  name: string
  slug: string
  location: {
    latitude: number
    longitude: number
  }
}
export interface MapProps {
  places?: Places[]
}
