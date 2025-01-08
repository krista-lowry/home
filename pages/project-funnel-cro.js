import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar.js';
import { Intro, About } from '../components/Intro.js';
import { ProjectsPage } from '../components/ProjectsPage.js';
import { Footer, Contact } from '../components/Footer.js';
import { about, contact, intro, navigation, projects, SEO, icons, work, skills, projectspage, funnelcro, skillsused } from '../config/config.js';
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
        title={funnelcro.title}
        lead={funnelcro.lead}
        subhead={funnelcro.subhead}
        content={funnelcro.content}
        skillsused={funnelcro.skillsused}
        context={funnelcro.context}
        teams={funnelcro.teams}
        project_images={funnelcro.project_images}
      />
      <Footer />
    </Fragment>
  );
}
