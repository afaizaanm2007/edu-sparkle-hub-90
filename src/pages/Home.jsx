import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";
import Header from '../components/Header';
import Footer from '../components/Footer';
import InstagramFeed from '../components/InstagramFeed';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import { Button } from "@/components/ui/button";
import { Linkedin } from 'lucide-react';

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <UIPreview />
        <IntroSection />
        <TestimonialsCarousel />
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

const UIPreview = () => (
  <motion.section
    className="py-16 mt-8 bg-white"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUpVariants}
  >
    <div className="container mx-auto px-4">
      <motion.div variants={fadeInUpVariants}>
        <img 
          src="/demo.png" 
          alt="Boomerang Learning UI Preview" 
          className="w-full max-w-4xl mx-auto h-auto object-contain"
        />
      </motion.div>
    </div>
  </motion.section>
);

const IntroSection = () => (
  <motion.section 
    className="py-20 bg-white"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUpVariants}
  >
    <div className="container mx-auto px-4">
      <motion.div 
        className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto"
        variants={fadeInUpVariants}
      >
        <p className="text-3xl md:text-4xl text-gray-700 text-center leading-relaxed font-medium">
          Boomerang Learning is an Indiana-based educational platform that offers <span className="text-[#004aad] font-bold">AI-generated gamified assignments</span>, <span className="text-[#c30083] font-bold">personalized diagnostic testing</span>, and <span className="text-[#004aad] font-bold">multi-faceted AI assistance</span> to bridge knowledge gaps for students, teachers, parents, and afterschool programs.
        </p>
      </motion.div>
    </div>
  </motion.section>
);

const HeroSection = () => (
  <motion.section 
    className="py-20 bg-white"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUpVariants}
  >
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center gap-12">
        <motion.div className="w-full md:w-1/2" variants={fadeInUpVariants}>
          <h1 className="text-5xl font-bold mb-6 text-gray-900">
            Personalized Learning Platform
          </h1>
          <p className="text-xl mb-6 text-gray-600">
            All-in-one educational platform for students, parents, and educators alike.
          </p>
          <p className="text-lg mb-8 text-gray-600">
            AI-assisted learning, adaptive quizzes, personalized progress tracking, dynamic challenges, quick diagnostics, and instant feedback for student success.
          </p>
          <Link to="/product-offering">
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg text-lg">
              Learn More
            </Button>
          </Link>
        </motion.div>
        <motion.div className="w-full md:w-1/2" variants={fadeInUpVariants}>
          <img 
            src="/logo.png" 
            alt="Boomerang Logo" 
            className="w-full max-w-2xl h-auto mx-auto object-contain"
          />
        </motion.div>
      </div>
    </div>
  </motion.section>
);

const FeaturesSection = () => (
  <motion.section 
    className="py-20 bg-blue-50"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUpVariants}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Platform Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureItem title="2-6 Grade" description="Elementary and Middle School" />
        <FeatureItem title="300+ Questions" description="AI-generated and Personalized" />
        <FeatureItem title="2 Subjects" description="Indiana State Curriculum" />
      </div>
    </div>
  </motion.section>
);

const FeatureItem = ({ title, description }) => (
  <motion.div className="text-center" variants={fadeInUpVariants}>
    <h3 className="text-4xl font-bold text-indigo-600 mb-2">{title}</h3>
    <p className="text-xl text-gray-600">{description}</p>
  </motion.div>
);

const AboutSection = () => (
  <motion.section 
    className="py-20 bg-white"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUpVariants}
  >
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <motion.div className="w-full md:w-1/2 mb-10 md:mb-0" variants={fadeInUpVariants}>
          <h2 className="text-4xl font-bold mb-6 text-gray-900">About Boomerang Learning</h2>
          <p className="text-lg mb-6 text-gray-700">
            Boomerang Learning was founded by a group of students who were frustrated with the traditional education system and wanted to find a better way to address student-educator interactions, in and out of the classroom, in a way that makes education seamless and fun for the student while providing tutors and teachers with all the information they could ever need on the student.
          </p>
          <p className="text-lg mb-8 text-gray-700">
            We understand first-hand the challenges that students and teachers face in education, and we are committed to helping them succeed. Our team is dedicated to making education more engaging, effective, and accessible for everyone.
          </p>
          <Link to="/about">
            <Button className="bg-[#004aad] hover:bg-[#003c8f] text-white px-8 py-3 rounded-lg text-lg">
              Meet Our Team
            </Button>
          </Link>
        </motion.div>
        <motion.div className="w-full md:w-1/2" variants={fadeInUpVariants}>
          <img 
            src="/chequepic.jpg" 
            alt="Boomerang Learning Team" 
            className="w-full h-auto rounded-lg shadow-lg mx-auto object-cover"
          />
        </motion.div>
      </div>
    </div>
  </motion.section>
);

const InstagramSection = () => (
  <motion.section 
    className="py-20 bg-gray-100"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUpVariants}
  >
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Instagram Column */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center mb-10">Follow Us on Instagram</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
            <InstagramFeed />
          </div>
        </div>
        
        {/* LinkedIn Column */}
        <div className="flex flex-col items-center">
          <h2 className="text-4xl font-bold text-center mb-10">Connect on LinkedIn</h2>
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-xl w-full">
            <div className="flex flex-col items-center text-center">
              <Linkedin className="w-20 h-20 text-[#0A66C2] mb-6" />
              <h3 className="text-2xl font-semibold mb-4">Boomerang Learning</h3>
              <p className="text-gray-600 mb-6">Follow us on LinkedIn to stay updated with our latest developments and educational insights.</p>
              <a 
                href="https://www.linkedin.com/company/boomerang-learning/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0A66C2] text-white px-8 py-3 rounded-lg hover:bg-[#084e95] transition-colors duration-300 flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                Follow Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </motion.section>
);

export default Home;
