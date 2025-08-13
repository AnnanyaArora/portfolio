import { motion } from "framer-motion";
import Character from "../Character/Character";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 overflow-hidden
      text-gray-900 dark:text-white transition-colors duration-500"
      style={{
        backgroundImage: "url('/src/assets/backgrounds/hero-bg.png')", // ✅ Same background as all pages
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

      {/* 🏷️ Animated Heading */}
      <motion.h1
        className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight
        bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: -50, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1.5, type: "spring" }}
      >
        Hi, I'm <span className="underline decoration-wavy">Annanya</span>
      </motion.h1>

      {/* ✨ Subtitle with Fade-in */}
      <motion.p
        className="text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        Crafting <span className="text-blue-500">beautiful</span> and
        <span className="text-purple-500"> interactive</span> web experiences 🚀
      </motion.p>

      {/* 🔘 Crazy Animated Button */}
      <motion.a
        href="#about"
        className="px-8 py-4 rounded-full text-lg font-semibold text-white
        bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-pink-500 shadow-xl
        transition-all duration-500 transform hover:scale-110 hover:rotate-2"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        Decode Annanya
      </motion.a>

      {/* 👇 Floating Character */}
      <motion.div
        className="absolute bottom-0 right-0 mb-4 mr-6"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <Character />
      </motion.div>
    </section>
  );
}
