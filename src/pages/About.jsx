import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">About EduTech</h1>
        <Card className="mb-8">
          <CardContent className="prose max-w-none p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              At EduTech, we're on a mission to revolutionize education through innovative technology. 
              We believe that quality education should be accessible to everyone, everywhere. 
              Our cutting-edge tools and platforms are designed to empower both students and educators, 
              creating a more engaging and effective learning experience.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="prose max-w-none p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p>
              Our diverse team of educators, technologists, and innovators are passionate about 
              transforming the way we learn. With decades of combined experience in education and 
              technology, we're uniquely positioned to address the challenges facing modern education.
            </p>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default About;