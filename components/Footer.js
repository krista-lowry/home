import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


export const Contact = ({ title, description, buttons }) => {
	return (
		<div id="contact" className="bg-white py-5 px-5">
			<div className="container-md align-center">
				<h1 className="text-primary fw-bold">{title}</h1>
				<div className="px-sm-5">
					<p>{description}</p>
					<div className="">
						{buttons.map((value, index) => (
							(value.isPrimary) ?
								<Link key={index} href={value.link}>
									<a className="btn btn-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
								:
								<Link key={index} href={value.link}>
									<a className="btn btn-outline-primary my-1 mx-3">
										{value.title}
									</a>
								</Link>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

export const Footer = () => {
	return (
		<footer className="bg-dark text-white py-4">
			<div className="container d-flex justify-content-between align-items-center">
				{/* Text block with your name */}
				<div className="text-muted">
					<small>&copy; 2024 {" "}
						Krista Lowry
					</small>
				</div>

				{/* Social media icons aligned to the right */}
				<section className="mb-0">
					<a href="https://www.linkedin.com/in/krista-lowry/" className="text-white mx-3" role="button">
						<FontAwesomeIcon icon={faLinkedin} size="2x" />
					</a>
					<a href="https://github.com/krista-lowry/portfolio" className="text-white mx-3" role="button">
						<FontAwesomeIcon icon={faGithub} size="2x" />
					</a>
				</section>
			</div>
		</footer>
	);
}
