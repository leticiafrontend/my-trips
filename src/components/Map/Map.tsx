import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Container } from './styles'
import { MapProps } from './types'

export const Map = ({}: MapProps) => {
  const position = [51.505, -0.09]

  return (
    <MapContainer
      center={position}
      zoom={3}
      style={{ height: '100%', width: '100%' }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  )
}
