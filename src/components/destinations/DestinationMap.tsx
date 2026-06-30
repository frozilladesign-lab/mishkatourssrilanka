import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
// Fix for default marker icon in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl:
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl:
  'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png'
});
interface Props {
  name: string;
  region: string;
}
export function DestinationMap({ name, region }: Props) {
  // Synthesize rough coordinates based on region/name for visual purposes
  let position: [number, number] = [7.8731, 80.7718]; // Default center of Sri Lanka
  if (name.toLowerCase().includes('sigiriya')) position = [7.957, 80.7603];else
  if (name.toLowerCase().includes('kandy')) position = [7.2906, 80.6337];else
  if (name.toLowerCase().includes('ella'))
  position = [6.8667, 80.0489]; // Approx
  else if (name.toLowerCase().includes('yala')) position = [6.3683, 81.5198];else
  if (name.toLowerCase().includes('mirissa')) position = [5.9483, 80.4536];else
  if (name.toLowerCase().includes('nuwara')) position = [6.9497, 80.7828];
  return (
    <section className="py-16">
      <h2 className="font-heading text-4xl text-primary font-medium mb-8">
        Location
      </h2>
      <div className="h-[400px] w-full rounded-2xl overflow-hidden shadow-subtle border border-primary/10 relative z-0">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-full w-full">
          
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
          
          <Marker position={position}>
            <Popup>
              <div className="font-heading font-semibold text-primary">
                {name}
              </div>
              <div className="text-sm text-dark/70">{region}</div>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </section>);

}