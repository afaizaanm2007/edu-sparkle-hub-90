import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, FileText, BarChart2, Zap } from 'lucide-react';
import InstagramFeed from '../components/InstagramFeed';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <AboutSection />
        <InstagramSection />
      </main>
      <Footer />
    </div>
  );
};

const HeroSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
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
        </div>
        <div className="w-full md:w-1/2">
          <InstagramFeed />
        </div>
      </div>
    </div>
  </section>
);

const FeaturesSection = () => (
  <section className="py-20 bg-blue-50">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Platform Highlights</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureItem title="2-6 Grade" description="Elementary and Middle School" />
        <FeatureItem title="300+ Questions" description="AI-generated and Personalized" />
        <FeatureItem title="2 Subjects" description="Indiana State Curriculum" />
      </div>
    </div>
  </section>
);

const FeatureItem = ({ title, description }) => (
  <div className="text-center">
    <h3 className="text-4xl font-bold text-indigo-600 mb-2">{title}</h3>
    <p className="text-xl text-gray-600">{description}</p>
  </div>
);

const AboutSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2 mb-10 md:mb-0">
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
        </div>
        <div className="w-full md:w-1/2">
          <img 
            src="/chequepic.jpg" 
            alt="Boomerang Learning Team" 
            className="w-full h-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  </section>
);

const InstagramSection = () => (
  <section className="py-20 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-10">Follow Us on Instagram</h2>
      <InstagramFeed />
    </div>
  </section>
);

export default Home;