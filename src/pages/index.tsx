import { MapProps } from 'components/Map/types'
import { client } from 'services/graphql/client'
import { GetPlacesQuery } from 'services/graphql/generated/graphql'
import { GET_PLACES } from 'services/graphql/queries'
import { HomeTemplate } from 'templates/Home'

const Home = ({ places }: MapProps) => <HomeTemplate places={places} />

export const getStaticProps = async () => {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES)

  return { props: { places } }
}

export default Home
