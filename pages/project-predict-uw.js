import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar.js';
import { Intro, About } from '../components/Intro.js';
import { ProjectsPage } from '../components/ProjectsPage.js';
import { Footer, Contact } from '../components/Footer.js';
import { about, contact, intro, navigation, projects, SEO, icons, work, skills, da_logistic_reg, skillsused, breadcrumb } from '../config/config.js';
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
        title={da_logistic_reg.title}
        lead={da_logistic_reg.lead}
        subhead={da_logistic_reg.subhead}
        content={da_logistic_reg.content}
        icons={da_logistic_reg.icons}
        // image={da_logistic_reg.image}
        // image2={da_logistic_reg.image2}
        skillsused={da_logistic_reg.skillsused}
        context={da_logistic_reg.context}
        teams={da_logistic_reg.teams}
      />
      <Footer />
    </Fragment>
  );
}
