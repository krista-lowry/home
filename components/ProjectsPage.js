import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'
import Image from 'next/image';
import conversion from '../public/conversion.png';
import dash from '../config/dash.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faArrowLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
const parse = require('html-react-parser').default;
const { publicRuntimeConfig } = getConfig()

export const BreadCrumb = ({ text, link }) => {
	return (
		<div className="text-left mb-3">
			<a href={link} className="text-dark mx-3" role="button">
				<button type="button" className="btn btn-outline-light text-light">
					<FontAwesomeIcon icon={faArrowLeft} size="1x" />
					{text}
				</button>	</a></div>
	);
}

export const ProjectsPage = ({ title, subhead, content, image, image2, lead, skillsused = [], context }) => {
	const options = {
		replace: (domNode) => {
			if (domNode.attribs && domNode.attribs.id === 'conversion-image-placeholder') {
				return (
					<Image
						src={conversion}
						alt="Conversion graph"
						className="figure-img img-fluid shadow-sm"
					/>
				);
			}
			if (domNode.attribs && domNode.attribs.id === 'dash-image-placeholder') {
				return (
					<Image
						src={dash}
						alt="Conversion graph"
						className="figure-img img-fluid shadow-sm"
					/>
				);
			}
		}
	};
	return (
		<div className="small-middle-container mt-5">
			<div className="text-left mb-3">
				<a href="/portfolio-homepage" className="text-dark mx-3" role="button">
					<button type="button" className="btn btn-outline-light text-light">
						<FontAwesomeIcon icon={faArrowLeft} size="1x" />
						All projects
					</button>	</a>
			</div>
			<h1 className="mb-4">{title}</h1>
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
				<p>{parse(content, options)}</p></div ></div>

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
