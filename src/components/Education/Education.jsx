import React from "react";
import cms from /src/assets/education_logo/CMS_logo.jpg;

const education = [
 
 
  {
    level: "B.Tech in Computer Science",
    institute: "KALINGA INSTITUTE OF NATIONAL TECHNOLOGY",
    year: "2026",
    logo: "src/assets/education_logo/kiit_logo.png",
    link: "#"
  },
   {
    level: "Higher Secondary (Class 12)",
    institute: "City Montessori School",
    year: "2021",
    logo: cms,
    link: "#"
  },
   {
    level: "High School (Class 10)",
    institute: "City Montessori School",
    year: "2019",
    logo:cms,
    link: "#"
  }
];

const Education = () => (
  <section
    id="education"
    className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-white py-12 px-6"
  >
    <h2 className="text-4xl font-bold mb-10 text-center">Education</h2>
    <div className="max-w-3xl mx-auto space-y-8">
      {education.map((edu, i) => (
        <div
          key={i}
          className="flex items-center gap-4 bg-gray-100 dark:bg-gray-800 p-4 rounded-xl shadow"
        >
          <a href={edu.link} target="_blank" rel="noopener noreferrer">
            <img
              src={edu.logo}
              alt={`${edu.institute} Logo`}
              className="w-20 h-20 object-contain rounded"
            />
          </a>
          <div>
            <h3 className="text-2xl font-semibold">{edu.level}</h3>
            <p className="text-lg">{edu.institute}</p>
            <p className="text-sm text-gray-600 dark:text-gray-400">{edu.year}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-8 flex justify-center"><a href="#contact" 
      className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
       Contact Me</a></div>
  </section>
);

export default Education;
