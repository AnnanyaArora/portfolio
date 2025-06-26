import { motion } from "framer-motion";
import Character from "../Character/Character";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 relative overflow-hidden"
    >
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        Hi, I'm <span className="text-blue-500">Annanya</span>
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        A passionate developer building creative web experiences ✨
      </motion.p>

      <a
        href="#about"
        className="px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
      >
        Decode Annanya
      </a>

      {/* 👇 Animated character in bottom-right corner */}
      <div className="absolute bottom-0 right-0 mb-2 mr-4">
        <Character />
      </div>
    </section>
  );
}
