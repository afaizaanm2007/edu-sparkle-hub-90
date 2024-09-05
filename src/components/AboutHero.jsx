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
        Boomerang operates across <strong>4 time zones</strong>, with passionate professionals from <strong><span className="text-[#004aad]">coast to coast in the US as well as overseas</span></strong>. Made up of <strong>passionate and talented professionals</strong>, we are <strong><span className="text-[#c30083]">democratizing learning</span></strong> by creating a platform for students, <strong>made by students</strong>.
      </p>
    </motion.div>
  </section>
);

export default AboutHero;