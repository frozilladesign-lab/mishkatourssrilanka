import React from 'react';
interface Props {
  images: string[];
  heroImage: string;
}
export function DestinationGallery({ images, heroImage }: Props) {
  // Handle empty or small arrays gracefully
  const galleryImages =
  images.length >= 3 ?
  images :
  [
  heroImage,
  '/images/tours/majestic-island/hero.jpg',
  '/images/tours/misty-mountains/hero.jpg',
  '/images/tours/yala-safari/hero.jpg'].
  slice(0, 4);
  return (
    <section className="py-16">
      <h2 className="font-heading text-4xl text-primary font-medium mb-12">
        Visual Journey
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {galleryImages.map((img, idx) => {
          // Asymmetric masonry-like layout
          let colSpan = 'md:col-span-4';
          if (idx === 0) colSpan = 'md:col-span-8';
          if (idx === 3) colSpan = 'md:col-span-12';
          return (
            <div
              key={idx}
              className={`${colSpan} relative h-64 md:h-80 rounded-2xl overflow-hidden group`}>
              
              <img
                src={img}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>);

        })}
      </div>
    </section>);

}