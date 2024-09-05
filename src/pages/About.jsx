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

        <h2 className="text-3xl font-bold mb-6 text-center">Co-founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3].map((index) => (
            <Card key={index} className="overflow-hidden">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src={`/placeholder.svg`}
                  alt={`Co-founder ${index}`}
                  className="object-cover w-full h-full"
                />
              </div>
              <CardContent className="p-4">
                <p className="text-center">Co-founder information goes here.</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;