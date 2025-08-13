import { motion } from "framer-motion";
import myPicture from "../../assets/myPicture.jpg";

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen flex flex-col md:flex-row items-center justify-center gap-12 text-gray-800 dark:text-white px-6 py-12"
      style={{
        backgroundImage: "url('/src/assets/backgrounds/hero-bg.png')", // ✅ same as Hero
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* 🔵 Animated Background Shapes */}
      <motion.div
        className="absolute top-[-50px] left-[-50px] w-72 h-72 bg-blue-400 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, 50, 0], y: [0, 50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-[-50px] right-[-50px] w-72 h-72 bg-purple-500 rounded-full blur-3xl opacity-30"
        animate={{ x: [0, -50, 0], y: [0, -50, 0] }}
        transition={{ duration: 8, repeat: Infinity }}
      />

      {/* 👤 Profile Image */}
      <div className="w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-lg z-10">
        <img
          src={myPicture}
          alt="Annanya Profile"
          className="w-full h-full object-cover"
        />
      </div>

      {/* 📄 About Text */}
      <div className="max-w-xl text-center md:text-left z-10">
        <h2 className="text-4xl font-bold mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          Hey there! 👋 I'm{" "}
          <span className="text-blue-500 font-semibold">Annanya</span>, a coding
          enthusiast who loves turning ideas into reality using code. Whether
          it's building quirky portfolios or full-stack apps, I’m always up for
          a tech adventure!
          <br />
          <br />
          I love to keep learning and pushing my limits — always challenging
          myself with something new, fun, and creative.
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
