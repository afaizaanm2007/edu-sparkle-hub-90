import React from 'react';
import { motion } from "framer-motion";

const AboutStory = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="bg-gray-50 p-8 rounded-lg shadow-sm"
      >
        <h2 className="text-3xl font-bold mb-8 text-center text-[#004aad]">Our Story</h2>
        <div className="space-y-6 text-gray-700">
          <p>
            Our journey began in October 2023 with the inception of Boomerang Learning. As volunteer tutors at a local YMCA in the Evansville Promise Zone, we encountered a significant challenge: many students were falling behind state learning standards. Despite our best efforts, it was difficult to address the diverse learning needs of numerous students in our limited time.
          </p>
          <p>
            The lack of continuity between different volunteer tutors and the absence of a centralized system to track student progress became apparent. This realization sparked the idea for Boomerang Learning—a hub of learning information for both <span className="font-semibold">students and those who support them</span>.
          </p>
          <p>
            We envisioned Boomerang as a solution that harnesses AI and technology to tackle these educational challenges. By generating questions based on state curricula, we aim to create a comprehensive database for students to practice anytime, anywhere—not just within classroom confines.
          </p>
          <p>
            Our platform utilizes AI and analytics to monitor student progress and proficiency across various learning standards. This ensures that teachers, afterschool programs, and parents remain informed about each student's educational journey, allowing for targeted support both within and outside our app.
          </p>
          <p>
            Boomerang Learning's potential was recognized at the U.E. Changemaker Challenge, where we secured over $200,000 in renewable scholarships. We're deeply involved with our local community, schools, and tutoring centers to expand Boomerang's reach. Currently, we're seeking seed funding to develop our app and realize our vision of nationwide implementation in schools.
          </p>
        </div>
        <div className="mt-8 bg-white p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-4 text-center text-[#004aad]">Boomerang Learning's Core Mission:</h3>
          <p className="text-lg font-semibold text-center text-[#c30083]">
            Increase student proficiency by making learning efficient
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutStory;