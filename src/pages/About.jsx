import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center">Our Team</h1>
        <p className="text-lg mb-8 text-center">
          Boomerang operates across 4 time zones, with passionate professionals from coast to coast in the US as well as overseas. Made up of passionate and talented professionals, we are democratizing learning by creating a platform for students, made by students.
        </p>

        <Card>
          <CardContent className="prose max-w-none p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc pl-6">
              <li><strong>Innovation:</strong> We constantly push the boundaries of what's possible in edtech.</li>
              <li><strong>Accessibility:</strong> We strive to make quality education available to all, regardless of background or location.</li>
              <li><strong>Personalization:</strong> We believe in tailoring the learning experience to each individual's needs and learning style.</li>
              <li><strong>Collaboration:</strong> We foster a community where educators and learners can share knowledge and grow together.</li>
              <li><strong>Continuous Improvement:</strong> We're committed to constantly refining our tools based on the latest research and user feedback.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default About;