import React, { useState } from "react";
import { FaArrowUp, FaArrowDown, FaGithub } from "react-icons/fa";
import { BiLinkExternal } from "react-icons/bi";
import { motion } from "framer-motion";
import amazon from "../../assets/project_img/amazon.png";
import rock from "../../assets/project_img/rock.png";
import todo from "../../assets/project_img/todo.png";
import tick from "../../assets/project_img/tick.png";
import weather from "../../assets/project_img/weather.png";
import resume from "../../assets/project_img/resume.png";
import portfolio from "../../assets/project_img/portfolio.png";
import jobtracker from "../../assets/project_img/jobtracker.png";
import brick from "../../assets/project_img/brick.png";




const projects = [
   {
    title: "My Portfolio",
    description:
      "A personal portfolio website to showcase projects, skills, and experience with a modern, responsive design and smooth animations.",
    tech: ["React", "Tailwind"],
    github: "https://github.com/AnnanyaArora/portfolio",
    live: "#",
    image: portfolio,
  },
  {
    title: "Smart Job Tracker",
    description:
      "A full-featured dashboard to organize and monitor job applications with advanced filters, statistics, and complete CRUD functionality.",
    tech: ["React", "Tailwind", "Spring Boot"],
    github: "https://github.com/AnnanyaArora/jobtracker-frontend",
    live: "https://jobtracker-frontend07.netlify.app/",
    image: jobtracker,
  },
 
  {
    title: "Resume frame",
    description:
      "Created by Resume using basic HTML,CSS ",
    tech: ["HTML","CSS"],
    github: "https://github.com/AnnanyaArora/resume",
    live: "https://resumeannanya.netlify.app/",
    image: resume,
  },
  {
    title: "Amazon Clone",
    description:
      "A simplified e-commerce platform inspired by Amazon, featuring product listings, a shopping cart, and secure checkout.",
    tech: ["React", "Firebase", "Tailwind"],
    github: "https://github.com/AnnanyaArora/Amazon-Clone",
    live: "https://amazon-clone-done.netlify.app/",
    image: amazon,
  },
  {
    title: "Rock-Paper-Scissors",
    description:
      "A fun, interactive Rock-Paper-Scissors game with smooth animations and score tracking against the computer.",
    tech: ["HTML","CSS","JAVASCRIPT"],
    github: "https://github.com/AnnanyaArora/rock-paper-scissors",
    live: "#",
    image: rock,
  },
  {
    title: "To-Do List",
    description:
      "A clean and minimalistic to-do app to manage daily tasks with features.",
    tech: ["HTML","CSS","JAVASCRIPT"],
    github: "https://github.com/AnnanyaArora/to-do-list",
    live: "#",
    image: todo,
  },
  {
    title: "Tic-Tac-Toe",
    description:
      "A responsive Tic-Tac-Toe game with two-player mode and dynamic win detection for an engaging user experience.",
    tech: ["HTML","CSS","JAVASCRIPT"],
    github: "https://github.com/AnnanyaArora/tic-tac-toe",
    live: "#",
    image: tick,
  },
  {
    title: "Weather App",
    description:
      "A real-time weather forecast app that displays current conditions, temperature, and search functionality with a stylish UI.",
    tech: ["React", "OpenWeather API"],
    github: "https://github.com/AnnanyaArora/weather-dashboard",
    live: "https://dapper-mochi-4db37f.netlify.app/",
    image: weather
  },
  {
    title: "Brick Breaker Game",
    description:
      "A classic Brick Breaker arcade game built using Java and Swing, featuring multiple levels and smooth controls.",
    tech: ["Java", "Swing"],
    github: "https://github.com/AnnanyaArora/brick-breaker",
    live: "#",
    image: brick,
  },
];


export default function Projects() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const prev = () => setSelectedIndex(i => (i - 1 + projects.length) % projects.length);
  const next = () => setSelectedIndex(i => (i + 1) % projects.length);

  return (
    <section
      id="Projects"
      className="min-h-screen flex flex-col items-center justify-center px-6 py-12
                 bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300"
    >
      {/* Frame (use whatever width/height you prefer; this respects the frame you took) */}
      <div className="relative w-full max-w-6xl h-[85vh] rounded-2xl
                      border border-gray-300 dark:border-gray-700 overflow-visible shadow-xl">

        {projects.map((p, i) => {
          const offset = i - selectedIndex;
          if (offset < -2 || offset > 2) return null;

          const scale = offset === 0 ? 1 : 0.82 - Math.abs(offset) * 0.08;
          const y = offset * 70; // vertical stack spacing
          const opacity = offset === 0 ? 1 : 0.38;
          const blur = offset === 0 ? "none" : "blur(2px)";
          const z = 10 - Math.abs(offset);

          return (
            <motion.article
              key={p.title}
              className="absolute inset-0 flex bg-white dark:bg-gray-800
                         rounded-xl shadow-lg overflow-hidden"
              style={{ zIndex: z }}
              initial={false}
              animate={{ y, scale, opacity, filter: blur }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
            >
              {/* LEFT: details (only interactive on selected) */}
              <div
                className={`w-1/2 p-10 flex flex-col justify-center gap-4
                           ${offset === 0 ? "pointer-events-auto" : "pointer-events-none"}`}
                style={{ opacity: offset === 0 ? 1 : 0 }}
              >
                <h2 className="text-4xl font-bold">{p.title}</h2>
                <p className="text-gray-700 dark:text-gray-300">{p.description}</p>

                <div className="flex flex-wrap gap-2">
                  {p.tech.map(t => (
                    <span key={t}
                      className="px-3 py-1 rounded-full text-sm
                                 bg-gray-200 dark:bg-gray-700
                                 text-gray-800 dark:text-gray-200">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-5 text-2xl text-gray-900 dark:text-gray-200">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noopener noreferrer"
                       className="hover:text-blue-600 dark:hover:text-blue-400" title="GitHub">
                      <FaGithub />
                    </a>
                  )}
                 
                </div>

                <a
                  href={p.live !== "#" ? p.live : "#"}
                  target="_blank" rel="noopener noreferrer"
                  className="mt-2 inline-block bg-blue-600 hover:bg-blue-700
                             text-white font-semibold rounded-full px-6 py-3
                             transition-colors duration-200 w-fit"
                >
                  🚀 Go Live
                </a>
              </div>

              {/* RIGHT: avatar/image */}
              <div className="w-1/2 relative flex items-center justify-center overflow-hidden">
                <motion.img
                  src={p.image}
                  alt={p.title}
                  className="w-80 h-80 object-cover rounded-xl shadow-lg"
                  whileHover={{ scale: offset === 0 ? 1.05 : 1 }}
                  transition={{ duration: 0.35 }}
                />
              </div>
            </motion.article>
          );
        })}

        {/* Navigation */}
        <button
          onClick={prev}
          aria-label="Previous project"
          className="absolute top-4 left-1/2 -translate-x-1/2 z-20
                     bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white
                     p-3 rounded-full hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          <FaArrowUp />
        </button>
        <button
          onClick={next}
          aria-label="Next project"
          className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20
                     bg-gray-300 dark:bg-gray-700 text-gray-900 dark:text-white
                     p-3 rounded-full hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
          <FaArrowDown />
        </button>
      </div>
    </section>
  );
}
