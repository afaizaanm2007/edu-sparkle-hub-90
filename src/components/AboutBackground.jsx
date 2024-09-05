import React from 'react';
import { motion } from "framer-motion";

const AboutBackground = () => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#004aad]">Background</h2>
          <p className="text-gray-700 mb-4">
            Boomerang Learning was founded with a vision to <strong>revolutionize the educational landscape</strong> by leveraging technology to create a <strong><span className="text-[#004aad]">personalized and adaptive learning experience</span></strong>. We saw how difficult it was to understand a student's learning abilities, and easily access this. Which is why we have created Boomerang.
          </p>
          <p className="text-gray-700">
            In a rapidly evolving educational environment, Boomerang Learning aims to help <strong>students seeking effective learning solutions</strong>, <strong>parents actively involved in their children's education</strong>, and <strong>teachers dedicated to personalized instruction</strong>. We hope to <strong><span className="text-[#c30083]">change the lives of students</span></strong>, engaging them in learning and sparking curiosity.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white p-8 rounded-lg shadow-sm"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#c30083]">Our Mission</h2>
          <p className="text-gray-700">
            We are dedicated to <strong><span className="text-[#004aad]">shaping education for individual needs</span></strong>, and equipping students, parents, and teachers with tools that promote <strong>academic success</strong>. Boomerang Learning is committed to cultivating a <strong>dynamic and supportive learning community</strong> that keeps everybody in the loop to ensure <strong><span className="text-[#c30083]">student proficiency</span></strong>.
          </p>
        </motion.div>
      </div>
    </div>
  </section>
);

export default AboutBackground;