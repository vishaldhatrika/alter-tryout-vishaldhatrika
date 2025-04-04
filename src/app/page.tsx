import clsx from 'clsx';

import { ProductCarousel } from '@/components/ui/shop/ProductCarousel';
import { TopNav } from '@/components/ui/structural/TopNav';

export default function Home() {
  return (
    <>
      <TopNav />
      <div
        className={clsx(
          'container mx-auto my-10 ',
          'grid lg:grid-cols-2 grid-cols-1 lg:gap-10 gap-4'
          // 'bg-alter25-cream-a'
        )}
      >
        <div id="swabKitLeftSide">
          <ProductCarousel />
        </div>

        <div id="swabKitRightSide"></div>
      </div>
    </>
  );
}
