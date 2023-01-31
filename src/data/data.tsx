import {
  AcademicCapIcon,
  CalendarIcon,
  DownloadIcon,
  // FlagIcon,
  MapIcon,
  OfficeBuildingIcon,
  SparklesIcon,
} from '@heroicons/react/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
// import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'I\'m Jeremiah Hsing',
  description: "This is a personal page about Jeremiah Hsing.",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Jeremiah Hsing.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Canberra based <strong className="text-stone-100">Advanced Computing Undergraduate Student</strong>, currently in my honors year
        at <strong className="text-stone-100">ANU</strong> 
      </p>
      {/* helping build a modern, mobile-first, domain registrar and site builder. */}
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        In my free time, you can catch me training in <strong className="text-stone-100">tennis</strong>,
        chilling on <strong className="text-stone-100">billiards</strong>, or exploring beautiful indigenous{' '}
        <strong className="text-stone-100">Ngunnawal and Ngambri</strong> land.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: DownloadIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `As a coder and knowledge seeker, I am eager to pursue opportunities in 
  software engineering. My passion lies in exploring cutting-edge technologies, 
  particularly blockchain, and using them to create solutions that promote 
  hyperlocal resilience, self-sustainability, and dynamism. I am a dedicated learner 
  who seeks to expand my skill set and deepen my understanding of these exciting fields. 
  Additionally, I am committed to building and sharing my knowledge with others through 
  evangelizing these technologies, systems, and movements.`,
  aboutItems: [
    {label: 'Location', text: 'Canberra, AU', Icon: MapIcon},
    {label: 'Age', text: `${new Date().getFullYear() - 2002}`, Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Canadian / Irish', Icon: FlagIcon},
    {label: 'Interests', text: 'Pooling, Tennis', Icon: SparklesIcon},
    {label: 'Study', text: 'Australian National University', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Open to work', Icon: OfficeBuildingIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'Typescript',
        level: 7,
      },
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Tailwind',
        level: 6,
      },
    ],
  },
  {
    name: 'CI/CD',
    skills: [
      {
        name: 'AWS',
        level: 7,
      },
      {
        name: 'Git',
        level: 9,
      },
      {
        name: 'Docker',
        level: 5,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 8,
      },
      {
        name: 'Python',
        level: 7,
      },
      {
        name: 'C++',
        level: 6,
      },
      {
        name: 'Java',
        level: 5,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 2,
      },
      {
        name: 'Swift',
        level: 3,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'To be determined...',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'To be determined...',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'To be determined...',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'To be determined...',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'To be determined...',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'To be determined...',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'To be determined...',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'To be determined...',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'To be determined...',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'To be determined...',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'To be determined...',
    url: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'July 2022 - Present',
    location: 'Australian National University',
    title: 'Bachelor of Advanced Computing (Honors)',
    content: <p>
      Specialized in system and architecture, with a focus on web developing.
      </p>,
  },
  {
    date: 'March 2013',
    location: 'School of Business',
    title: 'How to Make Fried Rice 101',
    content: <p>
      Lorem ipsum dolor sit amet. Aut modi eaque non ipsam consectetur nam minima 
      labore est porro totam est atque repellat. Est iste dolorem et Quis galisum est
      repudiandae aspernatur aut doloribus ipsam ut distinctio tempora At molestias 
      laboriosam id voluptatem quia. Est sunt sequi cum corrupti sunt et nesciunt molestiae 
      et officiis dolore!
    </p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2018 - Present',
    location: 'Awesome Development Company',
    title: 'Senior Software Engineer',
    content: (
      <p>
        In sapiente modi vel quasi autem eos consectetur laboriosam! 
        Est atque dolorem ut praesentium doloribus et facere facere non consequatur 
        consequatur.
      </p>
    ),
  },
  {
    date: 'March 2015 - February 2018',
    location: 'Garage Startup Studio',
    title: 'Junior Bug Fixer',
    content: (
      <p>
        Et vitae quasi aut dicta voluptas a alias neque aut saepe aliquam. 
        Sed aspernatur unde et dolores enim et exercitationem repellendus ut iste 
        nulla qui expedita aliquid vel magni alias At repellat illo. 
        Est officiis illo id nostrum iste non autem enim.
      </p>
    ),
  },
  {
    date: 'May 2013 - Present',
    location: 'Netflix, Los Gatos, California, US',
    title: 'Account Manager',
    content: (
      <p>
        Responsible for managing (and paying for) accounts shared by 5 globally distributed family members.
        Exceeded market benchmarks by typing passwords using Roku remote at 481% accuracy or more significance.
        Multi-year recipient of suggestions for movies I've already watched.
      </p>
    ),
  },
  {
    date: 'April 2011 - Present',
    location: 'Apple Inc. Cupertino, California, US',
    title: 'Uncertified Genius',
    content: (
      <p>
        Led remote tech support for older family members throughout the country.
        Maintained Siri comprehension rate of over 55% for three consecutive years.
        Once put off a software update for over 8 months.
      </p>
    ),
  },
  {
    date: 'Augest 2009 - Present',
    location: 'Amazon, Seattle, Washington, US',
    title: 'Prime Member',
    content: (
      <p>
        Increased order volume by 823% over 7 years
        Researched diverse product catalog, spanning departments from Simplehuman bag liners to cat food.
        Regularly reported on product quality using review portal.
      </p>
    ),
  },
  {
    date: 'March 2002 - Present',
    location: 'Facebook, Menlo Park, California, US',
    title: 'Senior Advertising Target',
    content: (
      <p>
        Recruited as early user for my experience with having an @edu email address.
        Received a "Facebook Beanie" award for performance in 2006 March Madness bracket.
        Consistently retargeted by F500 brands such as Samsung, Proctor & Gamble, and Verizon.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Satoshi Catamoto',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
      image: 'https://cdn.commercialandlegal-legalservices.com.au/wp-content/uploads/2018/03/Unknown-Person-Image-1-e1562653526174.png',
    },
    {
      name: 'Trevor Philips',
      text: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/116.jpg',
    },
    {
      name: 'Ms. Unknown',
      text: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Share any details about your ideas, or any other information you would like to share with potential clients/employees/partners/friends.',
  items: [
    {
      type: ContactType.Email,
      text: 'jeremiah.hsing@gmail.com',
      href: 'mailto:jeremiah.hsing@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Canberra ACT, Australia',
      href: 'https://www.google.com/maps/place/Canberra+ACT+2601/@-35.2842178,149.1191194,15.23z',
    },
    {
      type: ContactType.Instagram,
      text: '@jez_hsing',
      href: 'https://www.instagram.com/jez_hsing/',
    },
    {
      type: ContactType.Github,
      text: 'Jeremiah Hsing',
      href: 'https://github.com/JeremiahXing',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/JeremiahXing'},
  // {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/jeremiahhsing/'},
  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/jez_hsing/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/jez_hsing'},
];
