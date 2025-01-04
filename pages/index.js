import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { Skills, Projects, Work } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import { about, contact, intro, navigation, projects, SEO, icons, work, skills } from '../config/config';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
      />
      <Intro
        title={intro.title}
        description={intro.description}
        image={intro.image}
        buttons={intro.buttons}
      />
      <About
        title={about.title}
        description={about.description}
        skills={about.skills}
      />
      <Work
        title={work.title}
        summary={work.summary}
        cards={work.cards}
      />
      <Footer />
    </Fragment>
  );
}
