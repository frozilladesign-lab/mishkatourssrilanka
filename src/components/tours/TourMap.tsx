import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import L from 'leaflet';
import { Tour } from '../../lib/tours';
interface Props {
  tour: Tour;
}
export function TourMap({ tour }: Props) {
  // Synthesize a rough route based on the region for visual storytelling
  // In a real app, coordinates would be in the data
  const basePos: [number, number] = [7.8731, 80.7718];
  let route: [number, number][] = [];
  if (tour.region === 'Cultural Triangle') {
    route = [
    [7.184, 79.884],
    [7.8592, 80.6545],
    [7.957, 80.7603],
    [7.9333, 81.0],
    [7.2906, 80.6337]];

  } else if (tour.region === 'South Coast') {
    route = [
    [7.184, 79.884],
    [6.4207, 79.9984],
    [6.0328, 80.2149],
    [5.9483, 80.4536]];

  } else if (tour.region === 'Hill Country') {
    route = [
    [7.184, 79.884],
    [7.2906, 80.6337],
    [6.9497, 80.7828],
    [6.8667, 80.0489]];

  } else {
    // Multiple regions / default
    route = [
    [7.184, 79.884],
    [7.957, 80.7603],
    [7.2906, 80.6337],
    [6.8667, 80.0489],
    [6.3683, 81.5198],
    [6.0328, 80.2149]];

  }
  return (
    <section className="py-12">
      <h2 className="font-heading text-4xl text-primary font-medium mb-8">
        Journey Route
      </h2>
      <div className="h-[450px] w-full rounded-3xl overflow-hidden shadow-subtle border border-primary/5 relative z-0">
        <MapContainer
          center={basePos}
          zoom={7}
          scrollWheelZoom={false}
          className="h-full w-full">
          
          <TileLayer
            attribution="&copy; OpenStreetMap"
            url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png" />
          
          <Polyline
            positions={route}
            color="#0A2F47"
            weight={3}
            opacity={0.6}
            dashArray="10, 10" />
          
          {route.map((pos, idx) =>
          <Marker key={idx} position={pos}>
              <Popup>
                <div className="font-heading font-medium text-primary">
                  Stop {idx + 1}
                </div>
              </Popup>
            </Marker>
          )}
        </MapContainer>
      </div>
    </section>);

}