import type {
  TopNavMenuOpenSectionDropDownItem,
  TopNavMenuOpenSectionItem,
} from '@/models/top-nav.model';

export const topNavMenuOpenSectionItems: TopNavMenuOpenSectionItem[] = [
  {
    id: 'whyAlter',
    title: 'Why Alter',
    link: '/why-alter',
  },
  {
    id: 'howItWorks',
    title: 'How It Works',
    link: '/pricing',
  },
  {
    id: 'pricing',
    title: 'Pricing',
    link: '/pricing',
  },
  {
    id: 'signIn',
    title: 'Sign In',
    link: '/login',
  },
  {
    id: 'help',
    title: 'Help',
    link: '/help',
  },
];

export const topNavMenuOpenSectionDropDownItems: TopNavMenuOpenSectionDropDownItem[] = [
  {
    id: 'information',
    title: 'INFORMATION',
    links: [
      {
        id: 'faqs',
        title: 'FAQs',
        link: '/faq',
      },
      {
        id: 'alterSystemFaqs',
        title: 'Alter',
        link: '/alter-faq',
      },
    ],
  },
  {
    id: 'company',
    title: 'COMPANY',
    links: [
      {
        id: 'press',
        title: 'Press',
        link: '/press',
      },
      {
        id: 'whoWeAre',
        title: 'Who We Are',
        link: '/who-we-are',
      },
      {
        id: 'alterCares',
        title: 'Alter Cares',
        link: '/alter-cares',
      },
      {
        id: 'careers',
        title: 'Careers',
        link: 'https://try.alterme.com/jobs/',
        badge: 'HIRING',
      },
    ],
  },
  {
    id: 'resources',
    title: 'RESOURCES',
    links: [
      {
        id: 'contactUs',
        title: 'Contact Us',
        link: '/contact',
      },
      {
        id: 'privadyPolicy',
        title: 'Privacy Policy',
        link: '/privacy-policy',
      },
      {
        id: 'termsOfUse',
        title: 'Terms Of Use',
        link: '/terms-of-use',
      },
      {
        id: 'limitedWarranty',
        title: 'Limited Warranty',
        link: '/limited-warranty',
      },
    ],
  },
];
