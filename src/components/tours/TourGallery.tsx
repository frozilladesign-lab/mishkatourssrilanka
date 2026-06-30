import React from 'react';
interface Props {
  images: string[];
  heroImage: string;
}
export function TourGallery({ images, heroImage }: Props) {
  const galleryImages =
  images.length >= 3 ?
  images :
  [
  heroImage,
  '/images/tours/misty-mountains/hero.jpg',
  '/images/tours/yala-safari/hero.jpg',
  '/images/tours/colombo-city-tour/hero.jpg'].
  slice(0, 4);
  return (
    <section className="py-12">
      <h2 className="font-heading text-4xl text-primary font-medium mb-8">
        Visual Preview
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {galleryImages.map((img, idx) =>
        <div
          key={idx}
          className={`relative rounded-2xl overflow-hidden group ${idx === 0 ? 'col-span-2 row-span-2 h-[400px]' : 'h-[192px]'}`}>
          
            <img
            src={img}
            alt={`Gallery ${idx}`}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
          
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>
        )}
      </div>
    </section>);

}