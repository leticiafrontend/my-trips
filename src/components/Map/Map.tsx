import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Container } from './styles'
import { MapProps } from './types'

export const Map = ({ places }: MapProps) => {
  return (
    <MapContainer
      center={[0, 0]}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places?.map(({ id, slug, name, location }) => {
        const { latitude, longitude } = location
        return <Marker position={[latitude, longitude]} key={id} title={name} />
      })}
    </MapContainer>
  )
}
