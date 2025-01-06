import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar.js';
import { Intro, About } from '../components/Intro.js';
import { ProjectsPage } from '../components/ProjectsPage.js';
import { Footer, Contact } from '../components/Footer.js';
import { about, contact, intro, navigation, projects, SEO, icons, work, skills, projectspage, skillsused, breadcrumb } from '../config/config.js';
import { Header } from '../components/Header.js';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <ProjectsPage
        title={projectspage.title}
        lead={projectspage.lead}
        subhead={projectspage.subhead}
        content={projectspage.content}
        // image={projectspage.image}
        // image2={projectspage.image2}
        skillsused={projectspage.skillsused}
        context={projectspage.context}
      />
      <Footer />
    </Fragment>
  );
}
