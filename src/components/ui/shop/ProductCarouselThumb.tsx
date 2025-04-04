'use client';

import Image from 'next/image';

import type { CarouselItem } from '@/models/carousel.model';

type ProductCarouselThumbProps = {
  selected: boolean;
  onClick: () => void;
  index: number;
  carouselItem: CarouselItem;
};

export const ProductCarouselThumb: React.FC<ProductCarouselThumbProps> = ({
  selected,
  index,
  onClick,
  carouselItem,
}) => {
  return (
    <div className={'embla-thumbs__slide'.concat(selected ? ' embla-thumbs__slide--selected' : '')}>
      <Image
        src={carouselItem.image.src}
        alt={carouselItem.image.alt}
        width={carouselItem.image.width}
        height={carouselItem.image.height}
        onClick={onClick}
        className="embla-thumbs__slide__image"
        // className={clsx(
        //   'w-auto',
        //   'BASE_CLASSES',
        //   'sm:SMALL_CLASSES',
        //   'md:MEDIUM_CLASSES',
        // )}
      />
    </div>
  );
};
