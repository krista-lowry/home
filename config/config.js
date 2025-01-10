
import profile from './profile.png';
import { aboutme_content } from '../config/aboutme.js';
import { funnelcro_content } from '../config/funnelcro.js';
import { da_logistic_reg_content } from '../config/da_logistic_reg.js';
import { faAppStore, faGithub, faGooglePlay, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faChartSimple, } from '@fortawesome/free-solid-svg-icons';
// import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

// export const test2 = {
//   title: "Healthversed Enhanced CTA v2",
//   recap: "This is a quick recap/summary of this test",
//   content: `This is a summary`,
//   v_images: [
//     './expo_c.png',
//     './expo_v.png',
//     './expo_v2.png',
//   ],
//   tags: [
//     "AYLF",
//     "RSOC",
//     "Healthversed",
//     "Google update 12.17"
//   ],
//   devices: "Mobile",
//   dates: "10/21-10/28",
//   data: './expo_data.png',
//   expLink: '/test-exp-page'
// }

// export const test = {
//   title: "Healthversed Enhanced CTA",
//   recap: "This is a quick recap/summary of this test",
//   content: `This is a summary`,
//   v_images: [
//     './expo_c.png',
//     './expo_v.png',
//     './expo_v2.png',
//   ],
//   tags: [
//     "AYLF",
//     "RSOC",
//     "Healthversed",
//     "Google update 12.17"
//   ],
//   devices: "Mobile",
//   dates: "10/21-10/28",
//   data: './expo_data.png',
//   expLink: '/test-exp-page'
// }


// export const land = {
//   title: 'Experiments',
//   testcards: [
//     {
//       title: test.title,
//       recap: test.recap,
//       tags: test.tags
//     },
//     {
//       title: test2.title,
//       recap: test2.recap,
//       tags: test2.tags
//     }]
// }

export const navigation = {
  name: "Krista Lowry",
  links: [
    {
      title: "About",
      link: "/aboutme"
    },
    {
      title: "Projects",
      link: "/portfolio-homepage",
    },
  ],
}
export const intro = {
  title: "Hi, I'm Krista",
  description: "I build and optimize digital products and marketing strategies through in-depth analysis, creative problem-solving, and efficient collaboration",
  jobTitle: [
    "Marketing Data Analyst",
    "Optimization Specialist",
    "Seattle, WA"],
  image: profile.src,
  buttons: [
    {
      title: "Contact me on LinkedIn",
      link: "https://www.linkedin.com/in/krista-lowry/",
      icon: faLinkedin,
      isPrimary: false,
    },
    {
      title: "My Projects",
      link: "/portfolio-homepage",
      isPrimary: true,
    },

  ],
}


export const about = {
  title: "Welcome to My Portfolio!",
  description:
    `<p>I could use catchphrases like passionate, driven, curious, strategic - and they are all accurate - but they cloud the simple facts of who I am and what drives me. So, instead, I'll summarize in one sentence:</p>
    <div class="card my-4 lead shadow-sm p-3 bg-body rounded">
    <div className="card-body">I take serious ownership over every product I work with, and I am obsessed about knowledge.</div></div>`
  ,
  skills: [
    "Tableau",
    "Power BI",
    "SQL",
    "R",
    "Python",
    "Google Analytics",
    "A/B testing",
    "Regex",
    "Agile",
    "Looker",
    "Atlassian Suite",
    "Google Tag Manager",
    "User Testing",
    "GitHub",
  ]
}

export const aboutme = {
  title: "My Core Tenents",
  content: aboutme_content.content,
  lead: "I take serious ownership over every product I work with, and I am obsessed about knowledge",
}

export const funnelcro = {
  title: "Funnel Conversion Rate Optimization and A/B Testing",
  subhead: "subheader content",
  project_images: [
    { url: './dash.png', tabName: 'Tableau' },
    { url: './scroll.png', tabName: 'scroll' },
  ],
  content: funnelcro_content.content,
  skillsused: [
    "Google Analytics",
    "Google Tag Manager",
    "Survey Monkey",
    "Popupsmart",
    "In-house experiment platform",
    "Sample size calculations",
    "Experiment Design",
    "Statistical Signficance Calculations",
    "Analysis",
    "A/B testing",
    "CRO best practices",
  ],
  context: ["In-house project"],
  teams: ["User Research, Stakeholders, Optimization, Front-end Development"],
  lead: "",
}


export const da_logistic_reg = {
  title: "Identifying User Segments and Predicting Conversions",
  subhead: "subheader content",
  content: da_logistic_reg_content.content,
  skillsused: [
    "Tableau",
    "R code",
    "Logistic Regression",
    "Bagged Decision Tree",
    "Knn"
  ],
  icons: [
    {
      icon: faChartSimple,
      link: "https://public.tableau.com/app/profile/krista.lowry/viz/OnlineShopperIntent-TableauDash/Performance",
      text: "Tableau"
    },
    {
      icon: faCode,
      link: "https://github.com/krista-lowry/data-analysis/blob/main/r-code-markdown.ipynb",
      text: "R code"
    },
  ],
  context: "Coursework from UW PCE Certificate",
  teams: "Solo Final Project",
  lead: "This project showcases my ability to perform in-depth data analysis using R code, transform findings into visualizations in Tableau, and offer data-driven recommendations to optimize marketing and CRO strategies.",
}

export const breadcrumb = {
  text: "All Projects",
  link: "/portfolio-homepage"
}

export const work = {
  title: "Projects",
  summary: "I've put together a few recent projects showcasing my technical and business acumen in data anaylsis, data visualization, strategic planning, and experiment design. I'm continually adding more: if you're curious about what else I have worked on, please reach out!",
  cards: [
    {
      title: da_logistic_reg.title,
      // title: "Identifying User Segments and Predicting Conversions",
      titleLink: "/project-predict-uw",
      description: "This project showcases my ability to perform in-depth data analysis using R code, transform findings into visualizations in Tableau, and offer data-driven recommendations to optimize marketing and CRO strategies.",
      icons: [
        {
          icon: faChartSimple,
          link: "https://public.tableau.com/app/profile/krista.lowry/viz/OnlineShopperIntent-TableauDash/Performance",
          text: "Tableau"
        },
        {
          icon: faCode,
          link: "https://github.com/krista-lowry/data-analysis/blob/main/r-code-markdown.ipynb",
          text: "R code"
        },
      ],
    },
    {
      title: "Funnel Conversion Rate Optimization and A/B testing",
      description: "This case study walks through the process of identifying an optimization opportunity through funnel analysis and UX research, to designing and executing an A/B test and providing recommendations on further iterations.",
      titleLink: "/project-funnel-cro",
    }
  ],
}


export const certificates = {
  title: "Certificates",
  summary: "",
  cards: [
    {
      title: "Certificate of Data Analytics: Techniques for Decision Making",
      description: "Studied exploratory data analysis techniques using RStudio and SQL. Conducted predictive analysis using machine learning models such as linear and logistic regression, KNN clustering, random forest",
    },
    {
      title: "Certificate of Mastery in Digital Behavior Change",
      description: "Studied behavioral change theories and psychological design patterns as they relate to digital experiences. Translated these principles into wireframes and user journey maps"
    },
    {
      title: "Certificate in Digital Marketing Analytics",
      description: "Studied digital marketing strategies and techniques across multiple channels such as paid acquisition, organic search, affiliate and social media marketing. Built marketing plans to measure ROI"
    }
    ,

  ],
}

// export const projects = {
//   cards: [
//     {
//       icons: [
//         {
//           icon: faAppStore,
//           link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
//         },
//         {
//           icon: faGithub,
//           link: "https://github.com/hashirshoaeb/star_book",
//         },
//       ]
//     },
//   ],
// }



// SEARCH ENGINE 
export const SEO = {
  // 50 - 60 char  
  title: "Krista Lowry | Marketing Data Analyst | Optimization Specialist",
  description: "I build and optimize digital products and marketing strategies through in-depth analysis, creative problem-solving, and efficient collaboration.",
  image: profile.src,
}

// export const projects = {
//   image: profile.src,
//   title: "@hashirshoaeb",
//   description: "Computer Engineer | Flutter | Reactjs Developer",
//   cards: [
//     {
//       title: "My website",
//       link: "https://hashirshoaeb.com/",
//       icons: [
//         {
//           icon: faGithub,
//           link: "https://github.com/hashirshoaeb/star_book",
//         }]
//     },
//     {
//       title: "QuranTalk App",
//       link: "https://www.qurantalk.app/",
//     },
//     {
//       title: "StarBook App",
//       link: "https://starbook.dev/",
//     },
//     {
//       title: "My GitHub",
//       link: "https://github.com/hashirshoaeb/",
//     },
//     {
//       title: "My LinkedIn",
//       link: "https://www.linkedin.com/in/hashirshoaeb/",
//     },
//   ]
// }