import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";
import { Home as HomeIcon, FileText, BarChart2, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
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
                <div className="bg-gray-200 h-96 rounded-lg flex items-center justify-center">
                  <p className="text-gray-600">Placeholder for image or additional content</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-indigo-100">
          <div className="container mx-auto px-4">
            <p className="text-2xl text-indigo-700 text-center font-semibold leading-relaxed max-w-4xl mx-auto">
              Boomerang Learning is an Indiana-based educational platform that offers AI-generated gamified assignments, personalized diagnostic testing, and multi-faceted AI assistance to bridge knowledge gaps for students, teachers, parents, and afterschool programs.
            </p>
          </div>
        </section>

        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Platform Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-4xl font-bold text-indigo-600 mb-2">2-6 Grade</h3>
                <p className="text-xl text-gray-600">Elementary and Middle School</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-indigo-600 mb-2">300+ Questions</h3>
                <p className="text-xl text-gray-600">AI-generated and Personalized</p>
              </div>
              <div className="text-center">
                <h3 className="text-4xl font-bold text-indigo-600 mb-2">2 Subjects</h3>
                <p className="text-xl text-gray-600">Indiana State Curriculum</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">Our Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
                <HomeIcon className="w-16 h-16 text-indigo-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Student Friendly Platform</h3>
                <p className="text-gray-600">Intuitive interface designed for young learners.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
                <FileText className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Simple Proficiency Diagnostics</h3>
                <p className="text-gray-600">Quick and effective skill assessment tools.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
                <BarChart2 className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Instantaneous Student Progress Data</h3>
                <p className="text-gray-600">Real-time insights into student performance.</p>
              </div>
              <div className="text-center p-6 bg-gray-50 rounded-lg shadow-md">
                <Zap className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                <h3 className="text-2xl font-semibold mb-2">AI-Generated and Teacher Approved Content</h3>
                <p className="text-gray-600">Cutting-edge AI meets expert educator oversight.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;