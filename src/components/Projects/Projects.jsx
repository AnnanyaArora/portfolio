import React from "react";
import { FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";

const projects = [
  {
    title: "Smart Job Tracker",
    description: "A dashboard to manage and track job applications with stats, filters, and CRUD features.",
    tech: ["React", "Tailwind", "Spring Boot"],
    github: "https://github.com/AnnanyaArora/job-tracker",
    live: "#"
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasts with search and animated UI. Built as a learning project.",
    tech: ["React", "OpenWeather API"],
    github: "https://github.com/AnnanyaArora/weather-app",
    live: "#"
  },
  {
    title: "To-Do App",
    description: "Simple and responsive task tracker with local storage support.",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "#",
    live: "#"
  },
  {
  title: "Amazon Web Clone",
  description: "A full-stack clone of Amazon with product listings, user auth, and cart functionality.",
  tech: ["HTML", "CSS", "JavaScript"],
  github:"#",
  live: "#",
},
{
  title: "Rock Paper Scissors",
  description: "A simple and fun game built using React with score tracking.",
  tech: ["HTML", "CSS","JavaScript"],
  github:"#",
  live: "#",
},
{
  title: "Tic-Tac-Toe",
  description: "Classic 2-player game with logic for win/draw and reset.",
  tech: ["HTML", "CSS", "JavaScript"],
  github:"#",
  live: "#",
},
{
  title: "Brick Breaker Game",
  description: "A classic arcade-style Brick Breaker game built using pure Java and Swing.",
  tech: ["Java", "Swing"],
  github: "https://github.com/AnnanyaArora/brick-breaker", // Replace with your actual repo link
  live: "#", 
},


];

const Projects = () => {
  return (
    <section id="Projects"
    className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 shadow hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">{proj.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {proj.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-gray-200 dark:bg-gray-700 text-xs rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4 text-xl">
              {proj.github && (
                <a href={proj.github} target="_blank" rel="noopener noreferrer" title="GitHub"> 
                {/* nooperner noreferrer => is is used top prevent window.opener, thus prevent from phishing ---- when target=blank */}
                  <FaGithub />
                </a>
              )}
              {proj.live && proj.live !== "#" && (
                <a href={proj.live} target="_blank" rel="noopener noreferrer" title="Live Site">
                  <BiLinkExternal />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
