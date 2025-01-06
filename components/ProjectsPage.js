import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const { publicRuntimeConfig } = getConfig()


export const ProjectsPage = ({ title, subhead, content, image, image2, lead, skillsused = [], context }) => {
	return (
		<div className="small-middle-container mt-5">
			<div className="text-left mb-3">
				<a href="/" className="text-dark mx-3" role="button">
					<button type="button" className="btn btn-outline-light text-light">
						<FontAwesomeIcon icon={faArrowLeft} size="1x" />
						All projects
					</button>	</a>
			</div>
			<h1 className="mb-4">Identifying User Segments and Predicting Conversions</h1>
			<dl className="row article-byline">
				<dt className="col-sm-2 text-muted">Skills used</dt>
				<dd className="col-sm-9">
					{skillsused.map((skillsused, index) => (
						<span key={index} className={`badge tag-cloud m-1`}>
							{skillsused}
						</span>
					))}</dd></dl>
			<dl className="row article-byline">
				<dt className="col-sm-2 text-muted">Context</dt>
				<dd className="col-sm-9">{context}</dd></dl>
			<p className="lead">
				{lead}
			</p>
			<hr />

			<div className="mb-5">
				<h3 className="mb-3">Objective</h3>
				<p>Our client wants to identify key predictors of whether a user will convert (purchase a product) so they can optimize their marketing campaign strategies and website conversion funnel.
				</p><p>In particular, they want to understand:</p>
				<p><ul>
					<li>optimal target audience</li>
					<li>best time of year to ramp up campaigns for maximum ROI</li>
				</ul></p>
				<p>In addition to this analysis, they also want an operational dashboard to monitor performance as they start fine-tuning their strategies based on these findings.</p>
			</div>
			<h3 className="mb-3">Deliverables</h3>
			<div className="list-group mb-5">
				<a href="#data" className="list-group-item list-group-item-action">
					<FontAwesomeIcon icon={faAngleRight} size="1x" />  Data Exporation <small className="text-muted">jump to R code</small></a>
				<a href="#tableau" className="list-group-item list-group-item-action">
					<FontAwesomeIcon icon={faAngleRight} size="1x" />  Tableau</a>
			</div>
			<h3 className="mb-3" id="data">Step 1: Data Exploration an Analysis</h3>
			<p>In this section of the project, I conducted exploratory data analysis, data cleaning, and evaluated 4 machine learning models before deciding that Logistic Regression was the optimal model to predict key features of conversions. Although the fit was not particularly strong, the accuracy and specificity was such that we could identify patterns in what features may be indicative of conversion.
			</p><p>
				These key features were: Returning Users, Special Days, Duration spent on product pages, and specific months of the year surrounding holidays. In other words, if a user has visited the client’s site multiple times and is visiting during a holiday period, they are more likely to convert.
				<div class="row text-center mt-5 mb-5">
					<figure className="figure">
						<img
							className="figure-img img-fluid shadow-sm" width="450"
							height="450" src={image}
							alt="profile of krista lowry"
						/>
						<figcaption className="figure-caption text-center">Caption</figcaption></figure></div></p><p>
				This conclusion is not ground breaking: it stands to reason that a user who is familiar with the product will visit on a holiday during a special promotion to purchase the product. The more important information this model help us understand is what’s not important. Noteably, operating system, browser and region are not key to the likelihood a user will purchase a product.
			</p><p>

				This insight gives us direction into building an operational and insightful Tableau dashboard for the client as they begin optimizing their campaigns and strategies for the next year.
			</p>

			<h3 className="mb-3" id="tableau">Step 2: Tableau</h3>
			<p>Given the client’s objective to determine the optimal target audience and time of year, I built a Tableau dashboard to show key performance indicator performance month-over-month, during the week and over holiday periods.
			</p><p>
				The dashboard features indicators of whether a particular segmentation is performing above or below the aggregate average conversion rate, and allows for in-depth analysis of new vs returning visitor performance through filter parameter selection.
			</p><p>
				<div class="row text-center mt-5 mb-5">
					<figure className="figure">
						<img
							className="figure-img img-fluid shadow-sm" src={image2}
							alt="profile of krista lowry"
						/>
						<figcaption className="figure-caption text-center">Caption</figcaption></figure></div>
				Although we know that operating system, region and browser are not particularly important to constructing an optimal target audience, we can use these datapoints to construct a view of where the user is coming from and what technology they are using. The user segments tab shows sessions and conversion rates by each dimension and indicates where conversion rates are falling below average, so that the client can investigate and resolve any potential user painpoints.
			</p><p>

				Next steps:
				<ul><li>
					Identify and present specific strategies the client can take in the next holiday season to maintain and improve conversion rates in their key returning uesrs market, and how they can increase conversion volume from new users.
				</li></ul></p>

		</div >
	);
}
export const Work = ({ title, summary, cards }) => {
	return (
		<div id="work" className="bg-secondary py-5 px-5">
			<div className="container mr-5">
				<h1 className="text-primary fw-bold">{title}</h1>
				{/* Description Section */}
				<p className="lead text-dark mr-150">{summary}</p>
			</div>
			<div className="d-flex flex-row flex-wrap justify-content-center">
				{cards.map((value, index) => (
					<Card
						key={index}
						title={value.title}
						description={value.description}
						icons={value.icons} />
				))}
			</div>
			{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			{/* </div> */}
		</div>
	);
}


// export const Card = ({title, description, icons}) => {
// 	return (
// 		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
// 			<h4 className="text-primary">{title}</h4>
// 			<p className="text-dark">{description}</p>
// 			<div className="text-end">
// 				{icons && icons.map((value, index) => (
// 					<Link key={index} href={value.link}>
// 						<a target="_blank" rel="noreferrer">
// 							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
// 						</a>
// 					</Link>
// 				))}
// 			</div>
// 		</div>
// 	);
// }

const icons = [
	{ icon: faGithub, link: "https://github.com", text: "GitHub" },
	{ icon: faLinkedin, link: "https://linkedin.com", text: "LinkedIn" }
];
export const Card = ({ title, description, icons, buttonLabel, onButtonClick }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
			<h4 className="text-primary">{title}</h4>
			<p className="text-dark">{description}</p>

			{/* Icons Section */}
			<div className="d-flex justify-content-around">
				{icons &&
					icons.map((value, index) => (
						<Link key={index} href={value.link}>
							<a target="_blank" rel="noreferrer" className="text-center">
								<FontAwesomeIcon className="icon-style" icon={value.icon} size="2x" />
								<div className="mt-1 small">{value.text}</div>
							</a>
						</Link>
					))}
			</div>
		</div>
	);
};
