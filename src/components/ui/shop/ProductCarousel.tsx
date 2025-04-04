'use client';

import clsx from 'clsx';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';

import { ProductCarouselThumb } from '@/components/ui/shop/ProductCarouselThumb';
import { swabCarouselItems } from '@/data/swab-carousel.data';

export const ProductCarousel: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [emblaMainRef, emblaMainApi] = useEmblaCarousel({});
  const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
    containScroll: 'keepSnaps',
    dragFree: true,
  });

  const onThumbClick = useCallback(
    (index: number) => {
      if (!emblaMainApi || !emblaThumbsApi) return;
      emblaMainApi.scrollTo(index);
    },
    [emblaMainApi, emblaThumbsApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaMainApi || !emblaThumbsApi) return;
    setSelectedIndex(emblaMainApi.selectedScrollSnap());
    emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
  }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaMainApi) return;
    onSelect();

    emblaMainApi.on('select', onSelect).on('reInit', onSelect);
  }, [emblaMainApi, onSelect]);

  return (
    <div className="mb-6">
      <div className="embla">
        <div className="embla__viewport" ref={emblaMainRef}>
          <div className="embla__container">
            {swabCarouselItems.map((carouselItem, index) => (
              <div className="embla__slide" key={carouselItem.image.src}>
                <Image
                  src={carouselItem.image.src}
                  alt={carouselItem.image.alt}
                  width={carouselItem.image.width}
                  height={carouselItem.image.height}
                  className={clsx('embla__slide__image')}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="embla-thumbs">
          <div className="embla-thumbs__viewport" ref={emblaThumbsRef}>
            <div className="embla-thumbs__container">
              {/* {slides.map((index) => (
              <ProductCarouselThumb
                key={index}
                onClick={() => onThumbClick(index)}
                selected={index === selectedIndex}
                index={index}
              />
            ))} */}

              {swabCarouselItems.map((carouselItem, index) => (
                <ProductCarouselThumb
                  key={carouselItem.image.src}
                  onClick={() => onThumbClick(index)}
                  selected={index === selectedIndex}
                  index={index}
                  carouselItem={carouselItem}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
