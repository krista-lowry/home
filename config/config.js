
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faChartSimple, } from '@fortawesome/free-solid-svg-icons';
// import ReactMarkdown from 'react-markdown';
import Image from 'next/image';

export const navigation = {
  name: "Krista Lowry",
  links: [
    {
      title: "About",
      link: "/",
    },
    {
      title: "Projects",
      link: "/portfolio-homepage",
    },
  ],
}
export const intro = {
  title: "Hi, I'm Krista",
  description: "I build and optimize digital products and marketing strategies through: In-depth analysis, creative problem-solving, and efficient collaboration",
  jobTitle: [
    "Marketing Data Analyst",
    "Optimization Specialist",
    "Seattle, WA"],
  image: profile.src,
  buttons: [
    {
      title: "Contact me on LinkedIn",
      link: "/portfolio-homepage",
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
  title: "Funnel Conversion Rate Optimization and A/B Testing",
  subhead: "subheader content",
  content: ` <h2>Objective</h2>
  <p>This project materialized after my team made an observation over multiple previous CRO experiments, that a few distinct user patterns were emerging. We were noticing the following user types and associated behavior patterns:</p>
  <ul>
      <li>Bouncers (users who don’t convert)</li>
      <li>Clickers (users who convert)</li>
  </ul>
  <p>Although these user segments are obvious (anyone who doesn’t convert is a bouncer, right?), they were important for us to distinguish because we needed to intentionally optimize for the non-converter behavior pattern. It was clear in our past winning experiments that we had optimized for the Clickers user segment well, but were missing the mark on the Bouncers. To approach this problem, we needed a clearer view of the Bouncers and their behavior patterns: Did they spend time on the page and leave, or did they leave right away? If they did spend time on the page, what were they doing?</p>

  <h2>Deliverables</h2>
  <ul>
      <li><a href="#research">Research</a></li>
      <li><a href="#user-survey">User Survey</a></li>
      <li><a href="#findings">Findings</a></li>
      <li><a href="#test">A/B Test</a></li>
      <li><a href="#recommendation">Recommendation</a></li>
  </ul>

  <h2 id="research">Research</h2>
  <p>To approach this issue, I gathered data from Google Analytics and a user survey.</p>

  <h3>Google Analytics data</h3>
  <p>Using GA4 data, I grouped users into segments depending on events in their session. I utilized Google Tag Manager event tracking and GA4 custom dimensions I had set up previously:</p>
  <ul>
      <li>Scroll tracking, using Google Tag Manager’s default scroll trigger</li>
      <li>Ad visibility, using Element Visibility triggers</li>
      <li>Ad click, using click listener triggers</li>
  </ul>

  <h3>User Survey</h3>
  <p>I also put together a proposal for a user survey. This was the first survey we had run on this domain, so I needed to get explicit stakeholder approval. My proposal included the project background, goal, proposed survey design, and supporting data.</p>
  <p>After gaining approval, I collaborated with a UX researcher to design a SurveyMonkey survey asking users if they were able to find the information they were looking for. To mitigate any negative impact on the Clickers user segment, we ran two surveys with triggers aimed at the Bouncers:</p>
  <ol>
      <li>Time-delayed Survey, displayed after 20 seconds</li>
      <li>Exit-intent Survey, triggered when the user moves to exit the browser</li>
  </ol>

  <h2 id="findings">Research Findings</h2>
  <p>The survey results showed that users' primary pain point is missing information. They were frustrated that the article did not contain key information that they expected, naturally leading to a bounce instead of a conversion.</p>
  
  <p>After combining the survey data with GA4 data, a distinct pattern emerged: Bouncers are scrolling quickly, spending less than 20 seconds on the page, and are not converting. These are roughly 30% of users.</p>

  <img src="scroll.png" alt="Scroll Behavior">

  <p>The next question is: How can we capture the bouncers' attention before they leave?</p>

  <h2 id="test">A/B Test Related Post widget</h2>
  <p>I designed an idea for a Related Posts popup. This would serve a dual purpose of capturing the user’s attention at a key point in the funnel and offering them the information they are presumably missing.</p>

  <strong>Hypothesis:</strong> If we can capture the user’s attention at key point in the funnel and offer relevant information via a related posts popup, then users will continue in our funnel and convert.

  <img src="widget.png" alt="Related Posts Popup">

  <h3>Proof-of-Concept Test Details</h3>

  <strong>Scope:</strong>
  <ul>
      <li>To reduce the scope, we will run a very limited experiment with only one article. The article will have a high volume of traffic with diverse traffic sources.</li>
      <li>No dev work needed upfront:
          <ul>
              <li>Related posts will be hand-picked for relevancy</li>
              <li>Popup will be created and deployed through a third-party tool and managed through their platform</li>
          </ul>
      </li>
  </ul>

  <strong>Design:</strong>
  <ul>
      <li>Experiment Length: 7 days</li>
      <li>MDE: 8%</li>
      <li>Power: 95%</li>
      <li>Confidence: 95%</li>
      <li>Sample size: x,xxx sessions</li>
      <li>Number of variants: 2 (Control and Popup)</li>
  </ul>

  <strong>Success Criteria:</strong> Revenue KPI deltas must be greater than 8% to detect a significant effect.

  <h2 id="results">Experiment Results</h2>
  <p>Ultimately, the data showed that we can’t detect any effect over the control towards the negative or positive: Revenue KPI deltas were below the defined MDE of 8%.</p>

  <p>Popup data: The popup had a very low CTR (&lt;5%), but intent was high in the users who did click on a related post. In fact, after the user clicked on a related post, they exhibited behaviors similar to Clickers:</p>
  <ul>
      <li>Conversions on Related Posts were higher than average</li>
      <li>Scroll depth on Related Posts was lower than average</li>
      <li>Users who converted on a Related Post did so within 20 seconds</li>
  </ul>

  <h2 id="looking-forward">Looking forward</h2>
  <p>We planned to expand this test on a larger scale. If we increase popup impressions by rolling this out on more pages and sustain the high conversion rate on click-through posts, then we could generate significant total revenue lift.</p>`,
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
  context: "In-house project",
  teams: "User Research, Stakeholders, Optimization",
  lead: "",
}


export const projectspage = {
  title: "Identifying User Segments and Predicting Conversions",
  subhead: "subheader content",
  content: "<div className='mb-5'><h3 className='mb-3'>Objective</h3><p>Our client wants to identify key predictors of whether a user will convert (purchase a product) so they can optimize their marketing campaign strategies and website conversion funnel.				</p><p>In particular, they want to understand:</p>				<p><ul>					<li>optimal target audience</li>					<li>best time of year to ramp up campaigns for maximum ROI</li>				</ul></p>				<p>In addition to this analysis, they also want an operational dashboard to monitor performance as they start fine-tuning their strategies based on these findings.</p>			</div>			<h3 className='mb-3'>Deliverables</h3>			<div className='list-group mb-5'>				<a href='#data' className='list-group-item list-group-item-action'>					<FontAwesomeIcon icon={faAngleRight} size='1x' />  Data Exporation </a>				<a href='#tableau' className='list-group-item list-group-item-action'>					<FontAwesomeIcon icon={faAngleRight} size='1x' />  Tableau</a>			</div>			<h3 className='mb-3' id='data'>Step 1: Data Exploration an Analysis</h3>			<p>In this section of the project, I conducted exploratory data analysis, data cleaning, and evaluated 4 machine learning models before deciding that Logistic Regression was the optimal model to predict key features of conversions. Although the fit was not particularly strong, the accuracy and specificity was such that we could identify patterns in what features may be indicative of conversion.			</p><p>				These key features were: Returning Users, Special Days, Duration spent on product pages, and specific months of the year surrounding holidays. In other words, if a user has visited the client’s site multiple times and is visiting during a holiday period, they are more likely to convert.				<div class='row text-center mt-5 mb-5'>				<img src='dash.png' alt='Scroll Behavior'>	</div></p><p>				This conclusion is not ground breaking: it stands to reason that a user who is familiar with the product will visit on a holiday during a special promotion to purchase the product. The more important information this model help us understand is what’s not important. Noteably, operating system, browser and region are not key to the likelihood a user will purchase a product.			</p><p>				This insight gives us direction into building an operational and insightful Tableau dashboard for the client as they begin optimizing their campaigns and strategies for the next year.			</p>			<h3 className='mb-3' id='tableau'>Step 2: Tableau</h3>			<p>Given the client’s objective to determine the optimal target audience and time of year, I built a Tableau dashboard to show key performance indicator performance month-over-month, during the week and over holiday periods.			</p><p>				The dashboard features indicators of whether a particular segmentation is performing above or below the aggregate average conversion rate, and allows for in-depth analysis of new vs returning visitor performance through filter parameter selection.			</p><p>				<div class='row text-center mt-5 mb-5'>					<figure className='figure'>						<div id='dash-image-placeholder'></div>			<figcaption className='figure-caption text-center'>Caption</figcaption></figure></div>				Although we know that operating system, region and browser are not particularly important to constructing an optimal target audience, we can use these datapoints to construct a view of where the user is coming from and what technology they are using. The user segments tab shows sessions and conversion rates by each dimension and indicates where conversion rates are falling below average, so that the client can investigate and resolve any potential user painpoints.			</p><p>				Next steps:				<ul><li>					Identify and present specific strategies the client can take in the next holiday season to maintain and improve conversion rates in their key returning uesrs market, and how they can increase conversion volume from new users.				</li></ul></p>		</div >",
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