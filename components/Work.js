import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import { faAppStore, faGithub, faGooglePlay, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// export const Skills = ({ title, cards }) => {
// 	return (
// 		<div id="skills" className="bg-secondary py-5 px-5">
// 			<div className="container">
// 				<h1 className="text-primary fw-bold">{title}</h1>
// 				<div className="d-flex flex-row flex-wrap justify-content-center">
// 					{cards.map((value, index) => (
// 						<Card
// 							key={index}
// 							title={value.title}
// 							description={value.description}
// 							link={value.link} />
// 					))}
// 				</div>
// 			</div>
// 		</div>
// 	);
// }
// export const Projects = ({ link, cards }) => {
// 	return (
// 		<div id="projects" className="bg-primary py-5 px-5">
// 			<div className="container">
// 				<div className="d-flex flex-row flex-wrap justify-content-center">
// 					<a href={value.link}>
// 						{cards.map((value, index) => (
// 							<Card
// 								key={index}
// 								icons={value.icons}/>
// 						))}</a>
// 				</div>
// 				{/* <div className="text-center">
// 					<button type="button" className="btn btn-outline-light">See More</button>
// 				</div> */}
// 			</div>
// 		</div>
// 	);
// }
export const Certificates = ({ title, summary, cards, icons }) => {
	return (
		<div id="work" className="bg-white py-5 px-5">
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
						icons={value.icons}
						titleLink={value.titleLink}
						link={value.link} />
				))}
			</div>
			{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			{/* </div> */}
		</div >
	);
}

export const Work = ({ title, summary, cards, icons }) => {
	return (
		<div id="work" className="bg-secondary py-5 px-5">
			<div className="container mr-5">
				<h1 className="text-primary fw-bold">{title}</h1>
				{/* Description Section */}
				<p className="lead text-dark mr-150">{summary} <Link href="/">
					<small className="ml-3 text-primary">
						Contact me on LinkedIn. </small></Link></p>
			</div>
			<div className="d-flex flex-row flex-wrap justify-content-center">
				{cards.map((value, index) => (
					<Card
						key={index}
						title={value.title}
						description={value.description}
						icons={value.icons}
						titleLink={value.titleLink}
						link={value.link} />
				))}
			</div>
			{/* <div className="text-center">
					<button type="button" className="btn btn-outline-light">See More</button>
				</div> */}
			{/* </div> */}
		</div >
	);
}

{/* 
export const Card = ({ title, description, icons }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
			<h4 className="text-primary">{title}</h4>
			<p className="text-dark">{description}</p>
			<div className="text-end">
				{icons && icons.map((value, index) => (
					<Link key={index} href={value.link}>
						<a target="_blank" rel="noreferrer">
							<FontAwesomeIcon className="icon-style mx-1" icon={value.icon} size="2x" />
						</a>
					</Link>
				))}
			</div>
		</div>
	);
} */}

const icons = [
	{ icon: faGithub, link: "https://github.com", text: "GitHub" },
	{ icon: faLinkedin, link: "https://linkedin.com", text: "LinkedIn" }
];
export const Card = ({ title, description, icons, buttonLabel, onButtonClick, titleLink }) => {
	return (
		<div className="card py-3 px-3 mx-sm-4 my-4 card-work" style={{ width: "20rem" }}>
			<h4 className="text-primary">
				<a className="text-primary" href={titleLink} style={{ textDecoration: 'none' }}>
					{title}
				</a>
			</h4>
			<p className="text-dark">{description}</p>
			<a href={titleLink} className='btn btn-outline-primary my-1 mx-3 mb-3'>Read more</a>
			{icons && icons.length > 0 && (
				<div className="d-flex justify-content-around">
					<ul className="list-group list-group-horizontal">
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
				</div>
			)}

		</div >
	);
};
