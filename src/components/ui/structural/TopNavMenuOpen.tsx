'use client';
import clsx from 'clsx';

import { Alter25Button } from '@/components/ui/alter25/Alter25Button';
import { SocialLinks } from '@/components/ui/SocialLinks';
import { TopNavMenuSectionDropDown } from '@/components/ui/structural/TopNavMenuSectionDropDown';
import { TopNavMenuSectionTop } from '@/components/ui/structural/TopNavMenuSectionTop';
import {
  topNavMenuOpenSectionDropDownItems,
  topNavMenuOpenSectionItems,
} from '@/data/top-nav.data';

interface TopNavMenuOpenProps {
  className?: string;
}

export const TopNavMenuOpen: React.FC<TopNavMenuOpenProps> = ({ className }) => {
  return (
    <div
      className={clsx(
        className,
        'mobileMenu',
        'z-50',
        'absolute right-0 block lg:hidden bg-white w-full md:max-w-[70%] '
      )}
    >
      <div className="container p-6">
        {topNavMenuOpenSectionItems.map((section) => (
          <TopNavMenuSectionTop section={section} key={section.id}></TopNavMenuSectionTop>
        ))}
      </div>
      <div className="text-center py-2">
        <Alter25Button
          href="/shop/swab-kit"
          text="See if You're a Candidate"
          size="lg"
          arrow={true}
        ></Alter25Button>
      </div>
      <div className="container p-6 flex justify-between items-center flex-col gap-6">
        {topNavMenuOpenSectionDropDownItems.map((section) => (
          <TopNavMenuSectionDropDown section={section} key={section.id}></TopNavMenuSectionDropDown>
        ))}
      </div>
      <div className="p-6">
        <SocialLinks />
      </div>
    </div>
  );
};
