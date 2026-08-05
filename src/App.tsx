import React from "react";
import "./App.css";

import { Img } from "./components/Img/Img";
import { Text } from "./components/Text/Text";
import { Button } from "./components/Button/Button";
import { Card } from "./components/Card/Card";

type Project = {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
};

type Resource = {
  title: string;
  summary: string;
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Pokémon on Rails",
    description:
      "A Ruby on Rails application for browsing and searching Pokémon, moves, abilities, and types stored in a relational database.",
    image: "/images/Pokemon_Rails.png",
    link: "https://github.com/ttaylor45/Pokemon-on-Rails",
    technologies: ["Ruby", "Ruby on Rails", "PostgreSQL", "HTML", "CSS"],
  },
  {
    title: "Tag Keys",
    description:
      "An e-commerce website for digital Steam game keys with products, categories, shopping carts, orders, and provincial taxes.",
    image: "/images/Tag_keys.png",
    link: "https://github.com/ttaylor45/Tag-Temepsi",
    technologies: ["Ruby on Rails", "PostgreSQL", "Git", "GitHub"],
  },
];

const resources: Resource[] = [
  {
    title: "React Documentation",
    summary:
      "The official React documentation helped me learn components, properties, state, and application structure.",
    image: "/images/React.png",
    link: "https://react.dev/",
  },
  {
    title: "Ruby on Rails Guides",
    summary:
      "The Rails Guides helped me learn models, controllers, views, migrations, validations, and associations.",
    image: "/images/Ruby.png",
    link: "https://guides.rubyonrails.org/",
  },
  {
    title: "Docker Documentation",
    summary:
      "Docker documentation helped me learn how to build images, run containers, expose ports, and deploy applications.",
    image: "/images/Docker.png",
    link: "https://docs.docker.com/",
  },
];

function openLink(link: string) {
  window.open(link, "_blank", "noopener,noreferrer");
}

function App() {
  return (
    <div
      className="portfolio"
      style={{
        backgroundImage: 'url("/images/Galaxy.gif")',
      }}
    >
      <header className="site-header">
        <div className="header-content">
          <p className="header-label">Portfolio</p>
          <h1>Trent Taylor</h1>
          <p className="header-description">
            Full Stack Web Development Student
          </p>

          <nav aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#resources">Resources</a>
            <a href="#setup">Developer Setup</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="about" className="portfolio-section">
          <div className="section-container about-container">
            <div className="about-photo">
              <Img src="/images/Trent.png" alt="Trent Taylor" />
            </div>

            <div className="about-text">
              <h2>Basic Information</h2>

              <Text
                text="I am a Full Stack Web Development student with experience creating front-end, back-end, database, testing, security, and deployment projects."
                backgroundColor="transparent"
              />

              <Text
                text="I have worked with React, TypeScript, Ruby on Rails, Python, Flask, SQL, PostgreSQL, Git, GitHub, and Docker."
                backgroundColor="transparent"
              />

              <Text
                text="My professional interests include software development, cybersecurity, and game development."
                backgroundColor="transparent"
              />

              <div className="information-grid">
                <Card
                  title="Program"
                  text="Full Stack Web Development"
                  backgroundColor="#ffffff"
                />

                <Card
                  title="Location"
                  text="Winnipeg, Manitoba"
                  backgroundColor="#ffffff"
                />

                <Card
                  title="Career Goal"
                  text="Build practical software and continue developing professional experience."
                  backgroundColor="#ffffff"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="work" className="portfolio-section alternate-section">
          <div className="section-container">
            <h2>Work</h2>

            <Text
              text="These projects demonstrate the development, testing, database, security, and deployment skills I have developed throughout my program."
              backgroundColor="transparent"
            />

            <div className="project-grid">
              {projects.map((project) => (
                <article className="project-card" key={project.title}>
                  <div className="project-image">
                    <Img src={project.image} alt={project.title} />
                  </div>

                  <div className="project-content">
                    <h3>{project.title}</h3>

                    <Text
                      text={project.description}
                      backgroundColor="transparent"
                    />

                    <h4>Technologies</h4>

                    <ul className="technology-list">
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>

                    <Button
                      text="View Project"
                      backgroundColor="#2563eb"
                      onClick={() => openLink(project.link)}
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="portfolio-section">
          <div className="section-container">
            <h2>Skills</h2>

            <Text
              text="My skills include user interface development, server-side development, database design, automated testing, version control, containerization, and introductory cybersecurity testing."
              backgroundColor="transparent"
            />

            <div className="skills-grid">
              <article className="skill-card">
                <h3>Languages and Frameworks</h3>

                <ul>
                  <li>HTML and CSS</li>
                  <li>JavaScript and TypeScript</li>
                  <li>React</li>
                  <li>Ruby and Ruby on Rails</li>
                  <li>Python, Flask, and Dash</li>
                  <li>SQL</li>
                </ul>
              </article>

              <article className="skill-card">
                <h3>Tools</h3>

                <ul>
                  <li>Git and GitHub</li>
                  <li>Docker and Nginx</li>
                  <li>Storybook and Jest</li>
                  <li>ESLint and Prettier</li>
                  <li>Husky and GitHub Actions</li>
                  <li>PostgreSQL</li>
                  <li>Visual Studio Code</li>
                  <li>Kali Linux</li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="resources" className="portfolio-section alternate-section">
          <div className="section-container">
            <h2>Resources</h2>

            <div className="resource-grid">
              {resources.map((resource) => (
                <article className="resource-card" key={resource.title}>
                  <div className="resource-image">
                    <Img src={resource.image} alt={`${resource.title} icon`} />
                  </div>

                  <h3>{resource.title}</h3>

                  <Text text={resource.summary} backgroundColor="transparent" />

                  <Button
                    text="Visit Resource"
                    backgroundColor="#2563eb"
                    onClick={() => openLink(resource.link)}
                  />
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="setup" className="portfolio-section">
          <div className="section-container">
            <h2>Developer Setup</h2>

            <div className="setup-grid">
              <Card
                title="VS Code Setup"
                text="I use Visual Studio Code with ESLint, Prettier, Docker, GitLens, Ruby LSP, and Python extensions. Format on Save helps keep my code consistent."
                backgroundColor="#ffffff"
              />

              <Card
                title="Terminal Setup"
                text="I use Windows Terminal and PowerShell for React, Git, npm, and Docker. I use WSL Ubuntu for Ruby on Rails and PostgreSQL."
                backgroundColor="#ffffff"
              />

              <Card
                title="Preferred Editor Font"
                text="My preferred editor font is Cascadia Code because it is clear, readable, and designed for development environments."
                backgroundColor="#ffffff"
              />
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>Created by Trent Taylor</p>

        <Button
          text="Visit My GitHub"
          backgroundColor="#2563eb"
          onClick={() => openLink("https://github.com/ttaylor45")}
        />
      </footer>
    </div>
  );
}

export default App;
