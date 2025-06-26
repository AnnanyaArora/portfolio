import myPicture from "../../assets/myPicture.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 bg-white dark:bg-gray-900 text-gray-800 dark:text-white px-6 py-12"
    >
      
      <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg">
        <img
          src={myPicture}
          alt="Annanya Profile"
          className="w-full h-full object-cover"
        />
      </div>

    
      <div className="max-w-xl text-center md:text-left">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hey there! 👋 I'm <span className="text-blue-500 font-semibold">Annanya</span>,
          a coding enthusiast who loves turning ideas into reality using code.
          Whether it's building quirky portfolios or full-stack apps, I’m always up for a tech adventure!
          <br /><br />
  I love to keep learning and pushing my limits — always challenging myself with something new, fun, and creative.
        </p>
        <a
          href="#Skills"
          className="inline-block mt-6 bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full transition duration-300"
        >
          Know More.
        </a>
      </div>
      
    </section>
  );
};

export default About;
