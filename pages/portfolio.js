import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { ProjectsPage } from '../components/ProjectsPage';
import { Footer, Contact } from '../components/Footer';
import { about, contact, intro, navigation, projects, SEO, icons, work, skills, projectspage, skillsused } from '../config/config';
import { Header } from '../components/Header';

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
        image={projectspage.image}
        image2={projectspage.image2}
        skillsused={projectspage.skillsused}
        context={projectspage.context}
      />
      <Footer />
    </Fragment>
  );
}
