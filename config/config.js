
import profile from './profile.png';
import conversion from '../public/conversion.png';
import dash from './dash.png';
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
      link: "/portfolio-homepage",
    },
    {
      title: "Contact",
      link: "#contact",
    }
  ],
}
export const intro = {
  title: "Hi, I'm Krista",
  description: "I build and optimize digital products and marketing strategies through: <ul><li>In-depth analysis</li><li>Creative problem-solving</li><li>Efficient collaboration</li></ul>",
  image: profile.src,
  buttons: [
    {
      title: "My Projects",
      link: "/portfolio-homepage",
      icon: faCode,
      isPrimary: true,
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

export const projectspage2 = {
  title: "2",
  subhead: "subheader content",
  content: "<div className='mb-5'><h3 className='mb-3'>Objective</h3><p>Our client wants to identify key predictors of whether a user will convert (purchase a product) so they can optimize their marketing campaign strategies and website conversion funnel.				</p><p>In particular, they want to understand:</p>				<p><ul>					<li>optimal target audience</li>					<li>best time of year to ramp up campaigns for maximum ROI</li>				</ul></p>				<p>In addition to this analysis, they also want an operational dashboard to monitor performance as they start fine-tuning their strategies based on these findings.</p>			</div>			<h3 className='mb-3'>Deliverables</h3>			<div className='list-group mb-5'>				<a href='#data' className='list-group-item list-group-item-action'>					<FontAwesomeIcon icon={faAngleRight} size='1x' />  Data Exporation <small className='text-muted'>jump to R code</small></a>				<a href='#tableau' className='list-group-item list-group-item-action'>					<FontAwesomeIcon icon={faAngleRight} size='1x' />  Tableau</a>			</div>			<h3 className='mb-3' id='data'>Step 1: Data Exploration an Analysis</h3>			<p>In this section of the project, I conducted exploratory data analysis, data cleaning, and evaluated 4 machine learning models before deciding that Logistic Regression was the optimal model to predict key features of conversions. Although the fit was not particularly strong, the accuracy and specificity was such that we could identify patterns in what features may be indicative of conversion.			</p><p>				These key features were: Returning Users, Special Days, Duration spent on product pages, and specific months of the year surrounding holidays. In other words, if a user has visited the client’s site multiple times and is visiting during a holiday period, they are more likely to convert.				<div class='row text-center mt-5 mb-5'>				<div id='conversion-image-placeholder'></div>					<figcaption className='figure-caption text-center'>Caption</figcaption></figure></div></p><p>				This conclusion is not ground breaking: it stands to reason that a user who is familiar with the product will visit on a holiday during a special promotion to purchase the product. The more important information this model help us understand is what’s not important. Noteably, operating system, browser and region are not key to the likelihood a user will purchase a product.			</p><p>				This insight gives us direction into building an operational and insightful Tableau dashboard for the client as they begin optimizing their campaigns and strategies for the next year.			</p>			<h3 className='mb-3' id='tableau'>Step 2: Tableau</h3>			<p>Given the client’s objective to determine the optimal target audience and time of year, I built a Tableau dashboard to show key performance indicator performance month-over-month, during the week and over holiday periods.			</p><p>				The dashboard features indicators of whether a particular segmentation is performing above or below the aggregate average conversion rate, and allows for in-depth analysis of new vs returning visitor performance through filter parameter selection.			</p><p>				<div class='row text-center mt-5 mb-5'>					<figure className='figure'>						<div id='dash-image-placeholder'></div>			<figcaption className='figure-caption text-center'>Caption</figcaption></figure></div>				Although we know that operating system, region and browser are not particularly important to constructing an optimal target audience, we can use these datapoints to construct a view of where the user is coming from and what technology they are using. The user segments tab shows sessions and conversion rates by each dimension and indicates where conversion rates are falling below average, so that the client can investigate and resolve any potential user painpoints.			</p><p>				Next steps:				<ul><li>					Identify and present specific strategies the client can take in the next holiday season to maintain and improve conversion rates in their key returning uesrs market, and how they can increase conversion volume from new users.				</li></ul></p>		</div >",
  skillsused: [
    "Tableau"
  ],
  context: "course",
  lead: "This project showcases my ability to perform in-depth data analysis using R code, transform findings into visualizations in Tableau, and offer data-driven recommendations to optimize marketing and CRO strategies.",
}


export const projectspage = {
  title: "Identifying User Segments and Predicting Conversions",
  subhead: "subheader content",
  content: "<div className='mb-5'><h3 className='mb-3'>Objective</h3><p>Our client wants to identify key predictors of whether a user will convert (purchase a product) so they can optimize their marketing campaign strategies and website conversion funnel.				</p><p>In particular, they want to understand:</p>				<p><ul>					<li>optimal target audience</li>					<li>best time of year to ramp up campaigns for maximum ROI</li>				</ul></p>				<p>In addition to this analysis, they also want an operational dashboard to monitor performance as they start fine-tuning their strategies based on these findings.</p>			</div>			<h3 className='mb-3'>Deliverables</h3>			<div className='list-group mb-5'>				<a href='#data' className='list-group-item list-group-item-action'>					<FontAwesomeIcon icon={faAngleRight} size='1x' />  Data Exporation <small className='text-muted'>jump to R code</small></a>				<a href='#tableau' className='list-group-item list-group-item-action'>					<FontAwesomeIcon icon={faAngleRight} size='1x' />  Tableau</a>			</div>			<h3 className='mb-3' id='data'>Step 1: Data Exploration an Analysis</h3>			<p>In this section of the project, I conducted exploratory data analysis, data cleaning, and evaluated 4 machine learning models before deciding that Logistic Regression was the optimal model to predict key features of conversions. Although the fit was not particularly strong, the accuracy and specificity was such that we could identify patterns in what features may be indicative of conversion.			</p><p>				These key features were: Returning Users, Special Days, Duration spent on product pages, and specific months of the year surrounding holidays. In other words, if a user has visited the client’s site multiple times and is visiting during a holiday period, they are more likely to convert.				<div class='row text-center mt-5 mb-5'>				<div id='conversion-image-placeholder'></div>					<figcaption className='figure-caption text-center'>Caption</figcaption></figure></div></p><p>				This conclusion is not ground breaking: it stands to reason that a user who is familiar with the product will visit on a holiday during a special promotion to purchase the product. The more important information this model help us understand is what’s not important. Noteably, operating system, browser and region are not key to the likelihood a user will purchase a product.			</p><p>				This insight gives us direction into building an operational and insightful Tableau dashboard for the client as they begin optimizing their campaigns and strategies for the next year.			</p>			<h3 className='mb-3' id='tableau'>Step 2: Tableau</h3>			<p>Given the client’s objective to determine the optimal target audience and time of year, I built a Tableau dashboard to show key performance indicator performance month-over-month, during the week and over holiday periods.			</p><p>				The dashboard features indicators of whether a particular segmentation is performing above or below the aggregate average conversion rate, and allows for in-depth analysis of new vs returning visitor performance through filter parameter selection.			</p><p>				<div class='row text-center mt-5 mb-5'>					<figure className='figure'>						<div id='dash-image-placeholder'></div>			<figcaption className='figure-caption text-center'>Caption</figcaption></figure></div>				Although we know that operating system, region and browser are not particularly important to constructing an optimal target audience, we can use these datapoints to construct a view of where the user is coming from and what technology they are using. The user segments tab shows sessions and conversion rates by each dimension and indicates where conversion rates are falling below average, so that the client can investigate and resolve any potential user painpoints.			</p><p>				Next steps:				<ul><li>					Identify and present specific strategies the client can take in the next holiday season to maintain and improve conversion rates in their key returning uesrs market, and how they can increase conversion volume from new users.				</li></ul></p>		</div >",
  skillsused: [
    "Tableau",
    "R code",
    "Logistic Regression",
    "Bagged Decision Tree",
    "Knn"
  ],
  context: "course",
  lead: "This project showcases my ability to perform in-depth data analysis using R code, transform findings into visualizations in Tableau, and offer data-driven recommendations to optimize marketing and CRO strategies.",
}

export const breadcrumb = {
  text: "All Projects",
  link: "/portfolio-homepage"
}

export const work = {
  title: "Projects",
  summary: "Here you will find recent projects showcasing my technical and business acumen in data anaylsis, data visualization, strategic planning, and experiment design.",
  cards: [
    {
      title: "Identifying User Segments and Predicting Conversions",
      titleLink: "/project-predict-uw",
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
      titleLink: "/project-funnel-cro",
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