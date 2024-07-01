import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import Skills from '../components/Resume/Skills';

import degrees from '../data/resume/degrees';
import work from '../data/resume/work';
import skills from '../data/resume/skills';

// NOTE: sections are displayed in order defined.
const sections = {
  Education: () => <Education data={degrees} />,
  Experience: () => <Experience data={work} />,
  Skills: () => <Skills data={skills} />,
};

const Resume = () => (
  <Main
    title="Resume"
    description="Kaili Zhang Resume"
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2>
            <Link to="resume">Resume</Link>
          </h2>
          <div className="link-container">
            {Object.keys(sections).map((sec) => (
              <h4 key={sec}>
                <a href={`#${sec.toLowerCase()}`}>{sec}</a>
              </h4>
            ))}
          </div>
        </div>
      </header>
      {Object.entries(sections).map(([name, Section]) => (
        <Section key={name} />
      ))}
      <section id="pdf">
        <h2>PDF Resume</h2>
        <p>
          <a href={`${process.env.PUBLIC_URL}/Kaili_Zhang_Resume.pdf`} target="_blank" rel="noopener noreferrer">
            View Resume PDF
          </a>
        </p>
      </section>
    </article>
  </Main>
);

export default Resume;
