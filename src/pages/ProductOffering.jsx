import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import ProductFeatures from '../components/ProductFeatures';
import UIGallery from '../components/UIGallery';

const ProductOffering = () => {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <motion.section 
          className="py-16 bg-blue-50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <div className="container mx-auto px-4">
            <motion.h1 className="text-5xl font-bold text-center text-purple-600 mb-6" variants={fadeInUpVariants}>Learning with Boomerang</motion.h1>
            <motion.h2 className="text-3xl font-semibold text-center text-purple-800 mb-8" variants={fadeInUpVariants}>Our Comprehensive Learning Solution</motion.h2>
            <motion.p className="text-xl text-center mb-12" variants={fadeInUpVariants}>
              Boomerang Learning offers a <span className="text-purple-600 font-semibold">revolutionary approach</span> to education, combining <span className="text-purple-600 font-semibold">AI technology</span> with proven pedagogical
              methods to create a <span className="text-purple-600 font-semibold">personalized learning experience</span> for every student.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['For Students', 'For Teachers', 'For Parents'].map((title, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUpVariants}
                  custom={index}
                >
                  <Card className="bg-white shadow-lg">
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-purple-600 mb-4">{title}</h3>
                      <ul className="space-y-2">
                        {title === 'For Students' && [
                          'Engaging, interactive lessons',
                          'Personalized learning paths',
                          'Instant feedback and explanations',
                          'Gamified learning experiences'
                        ].map((item, i) => <li key={i} className="flex items-center">• {item}</li>)}
                        {title === 'For Teachers' && [
                          'Comprehensive student progress tracking',
                          'AI-assisted lesson planning',
                          'Automated grading and assessment',
                          'Data-driven insights for targeted instruction'
                        ].map((item, i) => <li key={i} className="flex items-center">• {item}</li>)}
                        {title === 'For Parents' && [
                          'Real-time progress monitoring',
                          'Detailed performance analytics',
                          'Easy communication with teachers',
                          'Resources to support at-home learning'
                        ].map((item, i) => <li key={i} className="flex items-center">• {item}</li>)}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <ProductFeatures />

        <motion.section 
          className="py-24 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <div className="container mx-auto px-4">
            <motion.h2 className="text-3xl font-bold text-center text-purple-800 mb-8" variants={fadeInUpVariants}>MVP Demo</motion.h2>
            <motion.p className="text-center text-lg mb-12" variants={fadeInUpVariants}>Experience a preview of Boomerang Learning's capabilities with our Minimum Viable Product demonstration.</motion.p>
            <motion.div className="max-w-5xl mx-auto h-[600px]" variants={fadeInUpVariants}>
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Qno6Dw-u4RI"
                title="Boomerang Learning MVP Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </motion.div>
          </div>
        </motion.section>

        <UIGallery />

        <motion.section 
          className="py-16 bg-white"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUpVariants}
        >
          <div className="container mx-auto px-4">
            <motion.h2 className="text-4xl font-bold text-center text-purple-800 mb-8" variants={fadeInUpVariants}>Boomerang Learning: Empowering Education</motion.h2>
            <motion.div className="max-w-4xl mx-auto space-y-6 text-lg" variants={fadeInUpVariants}>
              <p>
                Boomerang Learning is an <span className="text-purple-600 font-semibold">innovative educational platform</span> designed to revolutionize the way students learn and teachers teach. Our mission is to provide a <span className="text-purple-600 font-semibold">comprehensive, personalized learning experience</span> that adapts to each student's unique needs and learning style.
              </p>
              <p>
                At the heart of Boomerang Learning is our <span className="text-purple-600 font-semibold">advanced AI technology</span>, which generates tailored questions and assignments based on individual student performance and state curriculum standards. This ensures that each student is consistently <span className="text-purple-600 font-semibold">challenged at the right level</span>, promoting optimal learning and growth.
              </p>
              <p>
                For teachers, Boomerang Learning offers <span className="text-purple-600 font-semibold">powerful tools</span> to streamline lesson planning, assessment, and progress tracking. Our platform provides <span className="text-purple-600 font-semibold">real-time insights</span> into student performance, allowing educators to identify areas where additional support may be needed and to tailor their instruction accordingly.
              </p>
              <p>
                Parents also benefit from Boomerang Learning's <span className="text-purple-600 font-semibold">comprehensive approach</span>. Through our user-friendly interface, parents can easily <span className="text-purple-600 font-semibold">monitor their child's progress</span>, understand their strengths and areas for improvement, and access resources to support learning at home.
              </p>
              <p>
                With Boomerang Learning, we're not just teaching – we're <span className="text-purple-600 font-semibold">transforming education</span>. Join us in our mission to empower students, support teachers, and involve parents in the learning journey like never before.
              </p>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductOffering;