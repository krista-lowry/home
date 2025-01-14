import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'
import { Tabs, Tab } from 'react-bootstrap';
import Image from 'next/image';
// import ReactMarkdown from 'react-markdown';
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

export const ProjectsPage = ({ icons, title, subhead, project_images, content, lead, teams, skillsused = [], context }) => {
	const options = {
		replace: (domNode) => {
			// if (domNode.attribs && domNode.attribs.id === 'widget-image-placeholder') {
			// 	return (
			// 		<Image src={widget} alt="Conversion graph" className="figure-img img-fluid shadow-sm"
			// 		/>
			// 	);
			// }
			// if (domNode.attribs && domNode.attribs.id === 'scroll-image-placeholder') {
			// 	return (
			// 		<Image src={scroll} alt="Conversion graph" className="figure-img img-fluid shadow-sm"
			// 		/>
			// 	);
			// }
			// if (domNode.attribs && domNode.attribs.id === 'conversion-image-placeholder') {
			// 	return (
			// 		<Image src={conversion} alt="Conversion graph" className="figure-img img-fluid shadow-sm"
			// 		/>
			// 	);
			// }
			// if (domNode.attribs && domNode.attribs.id === 'dash-image-placeholder') {
			// 	return (
			// 		<Image src={dash} alt="Dashboard graph" className="figure-img img-fluid shadow-sm"
			// 		/>
			// 	);
			// }
			if (domNode.type === 'text' && domNode.data.includes('[angle-right]')) {
				return (
					<FontAwesomeIcon icon={faAngleRight} />
				);
			}
		}
	};
	return (
		<div className="container-sm fluid">
			<div className="text-left mb-3 mt-3">
				<Link href="/portfolio-homepage" className="text-dark mx-3" role="button">
					<div>
						<button type="button" className="btn btn-outline-light text-light">
							<FontAwesomeIcon icon={faArrowLeft} size="1x" />    All projects
						</button>	</div></Link>
			</div>
			<h1 className="mb-4 mt-5">{title}</h1>
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
			<dl className="row article-byline">
				<dt className="col-sm-2 text-muted">Teams</dt>
				<dd className="col-sm-9">{teams}</dd></dl>
			{icons && icons.length > 0 && (
				// <div className="d-flex justify-content-around">
				<ul className="list-group list-group-horizontal mb-3">
					<li className="list-group-item"><small className="text-muted">Jump to</small></li>
					{icons.map((value, index) => (
						<Link key={index} href={value.link}>
							<li className="list-group-item">
								<a target="_blank" rel="noreferrer" className="text-center">
									<FontAwesomeIcon className="icon-style" icon={value.icon} />
									<small> {value.text}</small>
								</a>
							</li>
						</Link>
					))}
				</ul>
				// </div>
			)}
			<p className="lead">
				{lead}
			</p>

			<hr />
			<div className="mb-5">
				{typeof content === 'string' && content.length > 0 ? (
					<>{parse(content, options)}</> // Wrap in Fragment if parse returns multiple elements
				) : (
					<p>No content available.</p>
				)}
			</div>
			<div className="text-left mb-3">
				<Link href="/portfolio-homepage" className="text-dark mx-3" role="button">
					<div>
						<button type="button" className="btn btn-outline-light text-light">
							<FontAwesomeIcon icon={faArrowLeft} size="1x" />   All projects
						</button>	</div></Link>
			</div>

			{/* <Tabs defaultActiveKey="tab0" id="image-tabs" className="mb-3">
				{project_images?.map((image, index) => (
					<Tab
						key={index}
						eventKey={`tab${index}`}
						title={image.tabName || `Variant ${index + 1}`}
					>
						<div className="v-img my-6 mx-6">
							<img
								src={image.url || image}
								style={{ maxHeight: '500px' }}
								className="v_img" // Adjust as needed
							/>
						</div>
					</Tab>
				))}
			</Tabs> */}


		</div>

	);
}

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
							<div>
								<a target="_blank" rel="noreferrer" className="text-center">
									<FontAwesomeIcon className="icon-style" icon={value.icon} size="2x" />
									<div className="mt-1 small">{value.text}</div>
								</a></div>
						</Link>
					))}
			</div>
		</div>
	);
};
