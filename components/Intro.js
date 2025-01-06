import React from 'react';
import getConfig from 'next/config'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const parse = require('html-react-parser').default;
const { publicRuntimeConfig } = getConfig()

export const Intro = ({ title, description, image, buttons, icons, jobTitle }) => {
	return (
		<div className="bg-secondary py-5 px-5">
			<div className="container">
				<div className="row align-items-center">
					<div className="col-sm-6">
						<img
							className="img-fluid my-3 card-image" width="450"
							height="450" src={image}
							alt="profile of krista lowry"
						/>
					</div>

					<div className="col-sm-6 text-center">

						<h1 className="text-primary fw-bold display-3">{title}</h1>
						<p> {description}</p>
						{jobTitle.length > 0 ? (
							<p className="text-uppercase">
								<small className="text-muted">
									<ul className="list-inline">
										{jobTitle.map((value, index) => (
											<li key={index} className="list-inline-item position-relative">
												{value}
												{/* Add vertical line after each item except the last one */}
												{index < jobTitle.length - 1 && (
													<span>&nbsp; |</span>)}
											</li>
										))}
									</ul>
								</small>
							</p>
						) : (
							<p>No job titles available.</p>
						)}
						{/* <section className="mb-0">
							<a href="#" className="text-dark mx-3" role="button">
								<FontAwesomeIcon icon={faEnvelope} size="2x" />
							</a>
							<a href="#" className="text-dark mx-3" role="button">
								<FontAwesomeIcon icon={faLinkedin} size="2x" />
							</a>
							<a href="#" className="text-dark mx-3" role="button">
								<FontAwesomeIcon icon={faGithub} size="2x" />
							</a>
						</section> */}
						<div className="text-center mt-4">
							{buttons.map((value, index) => (
								<Link key={index} href={value.link} passHref>
									<a className={value.isPrimary ? "btn btn-primary my-1 mx-3" : "btn btn-outline-primary my-1 mx-3"} target={value.isPrimary ? undefined : "_blank"} rel={value.isPrimary ? undefined : "noreferrer"}>
										<FontAwesomeIcon icon={value.icon} className="me-2" />
										{value.title}
									</a>
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</div >
	);
}

export const About = ({ title, description = [], skills = [] }) => {
	return (
		<div id="about" className="bg-white py-5 px-5">
			<div className="container">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="row">
					{/* Description Section */}
					<div className="col-md-6">
						<div className="px-sm-1">
							{description.length > 0 ? (
								description.map((value, index) => (
									<p key={index}>{value}</p>
								))
							) : (
								<p>No description available.</p>
							)}
						</div>
					</div>

					{/* Skills Section as Tag Cloud */}
					<div className="col-md-6">
						{/* <h5 className="text-dark">Toolkit</h5> */}
						<div className="d-flex flex-wrap">
							{skills.length > 0 ? (
								skills.map((skill, index) => (
									<span key={index} className={`badge tag-cloud m-1 p-2 `} style={{ fontSize: `${1 + Math.random() * 0.5}rem` }}>
										{skill}
									</span>
								))
							) : (
								<p>No skills listed.</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

