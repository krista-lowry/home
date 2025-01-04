
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { faCode, faChartSimple } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
  name: "Krista Lowry",
  links: [
    {
      title: "About",
      link: "#about",
    },
    {
      title: "Projects",
      link: "#projects",
    },
    {
      title: "Contact",
      link: "#contact",
    }
  ],
}
export const intro = {
  title: "Hi, I'm Krista",
  description: "I build and optimize digital products and marketing strategies through in-depth analysis, creative problem-solving, and efficient collaboration.",
  image: profile.src,
  buttons: [
    {
      title: "Contact Me",
      link: "#contact",
      icon: faCode,
      isPrimary: true,
    },
    {
      title: "Resume",
      link: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
      isPrimary: false,
    },
  ],
}


export const about = {
  title: "Welcome to My Portfolio!",
  description: [
    "I am a curious, driven analytics professional with 10 years experience building and optimizing digital products and marketing strategies through in-depth analysis, creative problem-solving, and efficient collaboration.",
    "My toolkit includes SQL, Tableau, R, and a breadth of web analytics technologies from tag management to heatmap software. I am a lifelong and eager learner, continually pursuing new courses and certifications to expand my skillset."]
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
    "VWO",
    "GitHub"
  ]
}



export const work = {
  title: "Projects",
  summary: "Here you will find recent projects showcasing my technical and business acumen in data anaylsis, data visualization, strategic planning, and experiment design.",
  cards: [
    {
      title: "Identifying User Segments and Predicting Conversions",
      link: "https://krista-lowry.github.io/data-analysis/",
      description: "This project showcases my ability to perform in-depth data analysis using R code, transform findings into visualizations in Tableau, and offer data-driven recommendations to optimize marketing and CRO strategies.",
      icons: [
        {
          icon: faCode,
          link: "https://github.com/krista-lowry/data-analysis/blob/main/r-code-markdown.ipynb",
          text: "R code"
        },
        {
          icon: faChartSimple,
          link: "https://public.tableau.com/app/profile/krista.lowry/viz/OnlineShopperIntent-TableauDash/Performance",
          text: "Tableau"
        },
        {
          icon: faGithub,
          link: "https://krista-lowry.github.io/data-analysis/",
          text: "GitHub"
        },
      ],
    },
    {
      title: "Funnel Conversion Rate Optimization and A/B testing",
      description: "In this case study, I leveraged data-driven optimization techniques to improve our product's performance. Through comprehensive funnel analysis, I identified conversion bottlenecks and developed hypotheses for improvement.",
      icons: [
        {
          icon: faGithub,
          link: "https://krista-lowry.github.io/funnel-cro/",
          text: "GitHub"
        },
      ],
    }
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