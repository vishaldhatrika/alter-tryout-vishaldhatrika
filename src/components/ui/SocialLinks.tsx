import FacebookIcon from '@public/svg/social/facebook.svg';
import InstagramIcon from '@public/svg/social/instagram.svg';
import LinkedinIcon from '@public/svg/social/linkedin.svg';
import YoutubeIcon from '@public/svg/social/youtube.svg';
import Link from 'next/link';

import { FACEBOOK_URL, INSTAGRAM_URL, LINKEDIN_URL, YOUTUBE_URL } from '@/data/social.data';

export const SocialLinks: React.FC = () => {
  return (
    <div className="container text-alter25-black-b font-light text-sm flex justify-between items-start sm:items-center sm:flex-row flex-col">
      <span className="order-1 sm:order-2 mb-8 sm:mb-0">
        <Link
          href={FACEBOOK_URL}
          rel="noreferrer"
          target="_blank"
          draggable={false}
          className="inline-block me-4"
        >
          <div className="bg-alter25-button-dark p-2 rounded-3xl">
            <FacebookIcon width={24} height={24} />
          </div>
        </Link>
        <Link
          href={INSTAGRAM_URL}
          rel="noreferrer"
          target="_blank"
          draggable={false}
          className="inline-block me-4"
        >
          <div className="bg-alter25-button-dark p-2 rounded-3xl">
            <InstagramIcon width={24} height={24} />
          </div>
        </Link>
        <Link
          href={LINKEDIN_URL}
          rel="noreferrer"
          target="_blank"
          draggable={false}
          className="inline-block me-4"
        >
          <div className="bg-alter25-button-dark p-2 rounded-3xl">
            <LinkedinIcon width={24} height={24} />
          </div>
        </Link>
        <Link
          href={YOUTUBE_URL}
          rel="noreferrer"
          target="_blank"
          draggable={false}
          className="inline-block"
        >
          <div className="bg-alter25-button-dark p-2 rounded-3xl">
            <YoutubeIcon width={24} height={24} />
          </div>
        </Link>
      </span>
    </div>
  );
};
