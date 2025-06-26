import React from "react";
import {
  SiJavascript, SiHtml5, SiCss3, SiSpringboot,
  SiReact, SiTailwindcss, SiMongodb, SiMysql
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";

const languages = [
  { icon: <FaJava className="text-orange-600" />, name: "Java" },
  { icon: <SiJavascript className="text-yellow-400" />, name: "JavaScript" },
  { icon: <SiHtml5 className="text-orange-500" />, name: "HTML5" },
  { icon: <SiCss3 className="text-blue-500" />, name: "CSS3" },
  { icon: <FaDatabase className="text-purple-500" />, name: "SQL" }
];

const frameworks = [
  { icon: <SiSpringboot className="text-green-600" />, name: "Spring Boot" },
  { icon: <SiReact className="text-cyan-400" />, name: "React" },
  { icon: <SiTailwindcss className="text-sky-400" />, name: "Tailwind CSS" },
  { icon: <SiMongodb className="text-green-500" />, name: "MongoDB" },
  { icon: <SiMysql className="text-blue-600" />, name: "MySQL" }
];

const Skills = () => {
  return (
    <section  id="Skills" 
    className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-6">
      <h2 className="text-4xl font-bold mb-10 text-center">Skills</h2>

      {/* Languages Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-semibold mb-6 text-center">Languages</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {languages.map((lang, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl shadow hover:scale-105 transition-transform"
            >
              <div className="text-5xl">{lang.icon}</div>
              <p className="mt-2 text-sm font-semibold">{lang.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Frameworks & Tools Section */}
      <div>
        <h3 className="text-2xl font-semibold mb-6 text-center">Frameworks & Tools</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {frameworks.map((tool, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 p-4 rounded-2xl shadow hover:scale-105 transition-transform"
            >
              <div className="text-5xl">{tool.icon}</div>
              <p className="mt-2 text-sm font-semibold">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex justify-center"><a href="#Projects" 
      className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
        Explore Projects →</a></div>
    </section>
    
  );
};

export default Skills;
