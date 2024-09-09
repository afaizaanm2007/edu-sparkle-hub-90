import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Button } from "@/components/ui/button";

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
                {/* Placeholder for right side content */}
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
      </main>
      <Footer />
    </div>
  );
};

export default Home;