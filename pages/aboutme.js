import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar.js';
import { Intro, About } from '../components/Intro.js';
import { ProjectsPage } from '../components/ProjectsPage.js';

import { AboutMe } from '../components/AboutMe.js';
import { Footer, Contact } from '../components/Footer.js';
import { about, contact, intro, aboutme, navigation, projects, SEO, icons, work, skills, projectspage, funnelcro, skillsused } from '../config/config.js';
import { Header } from '../components/Header.js';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <AboutMe
        title={aboutme.title}
        lead={aboutme.lead}
        content={aboutme.content}
      />
      <Footer />
    </Fragment>
  );
}
