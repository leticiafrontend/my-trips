import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

const Home = () => {
  const places = [
    {
      id: '1',
      name: 'São Paulo',
      slug: 'sao-paulo',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
  ]
  return <Map places={places} />
}

export default Home
