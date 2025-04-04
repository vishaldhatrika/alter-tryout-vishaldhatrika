'use client';

import AlterLogotypeBlack from '@public/svg/alter-logotype-black.svg';
import clsx from 'clsx';
import type { Variants } from 'framer-motion';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import Alter25Menu from 'public/svg/navigation/alter-25-menu.svg';
import XMark from 'public/svg/navigation/x-mark.svg';
import { useState } from 'react';

import { Alter25Button } from '@/components/ui/alter25/Alter25Button';
import { TopNavMenuOpen } from '@/components/ui/structural/TopNavMenuOpen';

export const TopNav: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuVariants: Variants = {
    hidden: { x: '100%', opacity: 0, zIndex: 50 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
      zIndex: 50,
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
      },
      zIndex: 50,
    },
  };

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  return (
    <>
      <div className="bg-white w-100">
        <div className="container mx-auto bg-white">
          <nav className="h-[64px] bg-white py-4 flex justify-between items-center">
            <Link href="/" className="relative h-6 sm:h-7 md:h-8 shrink-0 mr-10">
              <AlterLogotypeBlack alt="Alter logotype" className="h-full w-auto" />
            </Link>
            <div className="container flex justify-between items-center">
              <span id="leftSideNaveItems" className="flex gap-8">
                <Link href="/why-alter" className="hidden md:block">
                  Why Alter
                </Link>
                <Link href="/learn/system" className="hidden md:block">
                  How It Works
                </Link>
                <Link href="/pricing" className="hidden md:block">
                  Pricing
                </Link>
              </span>
              <span id="rightSideNaveItems" className="flex items-center gap-6">
                <Link href="/login" className="hidden lg:block">
                  Sign In
                </Link>
                <Link href="/help" className="hidden lg:block">
                  Help
                </Link>
                <Alter25Button href="/shop/swab-kit" text="Buy Now"></Alter25Button>
                <button onClick={toggleMenu} className="block lg:hidden">
                  <Alter25Menu
                    alt="Alter Menu Button"
                    className={clsx(menuOpen ? 'hidden' : 'block')}
                  />
                  <XMark alt="Alter Menu Button" className={clsx(menuOpen ? 'block' : 'hidden')} />
                </button>
              </span>
            </div>
          </nav>
        </div>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              variants={menuVariants}
              initial="hidden"
              animate={menuOpen ? 'visible' : 'hidden'}
              exit="exit"
              style={{ position: 'fixed', top: 64, right: 0, bottom: 0, left: 0 }}
            >
              <TopNavMenuOpen className={clsx({ hidden: !menuOpen })}></TopNavMenuOpen>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};
