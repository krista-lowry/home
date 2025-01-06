import React, { Fragment } from 'react';
import { Nav } from '../components/Navbar';
import { Intro, About } from '../components/Intro';
import { Skills, Projects, Work } from '../components/Work';
import { Footer, Contact } from '../components/Footer';
import { about, contact, intro, navigation, projects, SEO, icons, work, skills } from '../config/config.js';
import { Header } from '../components/Header';

// const express = require('express');
// const path = require('path');
// const app = express();

// app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', async (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'home.html'));
// });

// app.listen(8080, () => {
//   console.log("Server successfully running on port 8080");
// });

export default function Home() {
  return (
    <Fragment>
      <Header seo={SEO} />
      <Nav
        title={navigation.name}
        links={navigation.links}
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
