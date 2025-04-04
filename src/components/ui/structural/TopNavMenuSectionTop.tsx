'use client';
import ArrowRightIcon from '@public/svg/navigation/arrow-right.svg';
import clsx from 'clsx';
import Link from 'next/link';

import type { TopNavMenuOpenSectionItem } from '@/models/top-nav.model';

interface TopNavMenuSectionTopProps {
  section: TopNavMenuOpenSectionItem;
}

export const TopNavMenuSectionTop: React.FC<TopNavMenuSectionTopProps> = ({ section }) => {
  return (
    <Link
      href={section.link}
      className={clsx('flex justify-between items-center py-3', 'text-2xl leading-4xl')}
    >
      <div>{section.title}</div>
      <ArrowRightIcon className="text-alter25-button-dark ms-2"></ArrowRightIcon>
    </Link>
  );
};
