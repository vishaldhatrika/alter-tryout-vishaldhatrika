'use client';
import ChevronUp from '@public/svg/navigation/chevron-up.svg';
import clsx from 'clsx';
import Link from 'next/link';
import { useState } from 'react';

import type { TopNavMenuOpenSectionDropDownItem } from '@/models/top-nav.model';

interface TopNavMenuSectionDropDownProps {
  section: TopNavMenuOpenSectionDropDownItem;
}

export const TopNavMenuSectionDropDown: React.FC<TopNavMenuSectionDropDownProps> = ({
  section,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="w-full ">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={clsx(
          'w-full flex items-center justify-between my-2',
          'tracking-[0.64px] font-semibold'
        )}
      >
        <div>{section.title}</div>
        <ChevronUp
          className={clsx(`transform transition-transform duration-300`, 'w-6 h-6', {
            'rotate-180': !isOpen,
          })}
        />
      </button>
      {isOpen &&
        section.links.map((sectionLink) => (
          <Link
            key={sectionLink.id}
            href={sectionLink.link}
            className={clsx('flex justify-start items-center my-2')}
          >
            {sectionLink.title}
            {sectionLink.badge && (
              <span className="ms-2 rounded-[57px] bg-badge-gray px-3 py-1 text-xs font-semibold leading-[18px] tracking-[0.48px]">
                {sectionLink.badge}
              </span>
            )}
          </Link>
        ))}
    </div>
  );
};
