import React from 'react';
import { motion } from "framer-motion";

const AboutHero = () => (
  <section className="bg-white py-16 border-b border-gray-200">
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4"
    >
      <h1 className="text-4xl font-bold mb-6 text-center text-[#004aad]">About Us</h1>
      <p className="text-lg mb-8 text-center max-w-3xl mx-auto text-gray-700">
        Boomerang operates across 4 time zones, with passionate professionals from coast to coast in the US as well as overseas. Made up of passionate and talented professionals, we are democratizing learning by creating a platform for students, made by students.
      </p>
    </motion.div>
  </section>
);

export default AboutHero;