import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";

const CoFounderCard = ({ name, role, description, linkedinUrl, instagramUrl, imageSrc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="aspect-w-1 aspect-h-1">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={name}
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <CardContent className="p-6 bg-white">
        <h3 className="text-2xl font-bold text-blue-600">{name}</h3>
        <p className="text-lg font-semibold text-gray-600 mb-2">{role}</p>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4 flex space-x-3">
          {linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          )}
          {instagramUrl && (
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const About = () => {
  const coFounders = [
    {
      name: "Kris Lau",
      role: "CEO",
      description: "Kris Lau is an ambitious learner. He runs a community service initiative providing student-led tutoring at the YMCA. He believes that quality education should be equally accessible to everyone.",
      linkedinUrl: "https://www.linkedin.com/mwlite/profile/in/kris-lau-542680261?trk=recent-searches",
      instagramUrl: "https://www.instagram.com/krislau101?igsh=MXN4dXdiZHBwYXpqdQ==",
      imageSrc: "/krispic.jpg"
    },
    {
      name: "Abdul-Aleem Mohammed",
      role: "CSO",
      description: "Abdul-Aleem Mohammed is a natural leader with an inclination for hard work.",
      linkedinUrl: "https://www.linkedin.com/mwlite/profile/in/abdul-aleem-mohammed-67671a2b0?trk=blended-typeahead",
      instagramUrl: "https://www.instagram.com/a_faizaan_mo?igsh=anZraHBqeDFvaXpp&utm_source=qr",
      imageSrc: "/mepic.jpg"
    },
    {
      name: "Parth Patel",
      role: "CFO",
      description: "Parth Patel has an eye for detail, which allows him to plan and execute long-term action.",
      instagramUrl: "https://www.instagram.com/notparthpatel?igsh=MTdhbTVkYTFxNWNmNw==",
      imageSrc: "/parthpic.jpg"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="bg-blue-600 text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
            <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
              Boomerang operates across 4 time zones, with passionate professionals from coast to coast in the US as well as overseas. Made up of passionate and talented professionals, we are democratizing learning by creating a platform for students, made by students.
            </p>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-blue-600">Co-founders</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {coFounders.map((founder, index) => (
                <CoFounderCard key={index} {...founder} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-blue-50 p-8 rounded-lg shadow-md"
              >
                <h2 className="text-3xl font-bold mb-6 text-blue-600">Background</h2>
                <p className="text-lg text-gray-700 mb-4">
                  Boomerang Learning was founded with a vision to revolutionize the educational landscape by leveraging technology to create a personalized and adaptive learning experience. We saw how difficult it was to understand a student's learning abilities, and easily access this. Which is why we have created Boomerang.
                </p>
                <p className="text-lg text-gray-700">
                  In a rapidly evolving educational environment, Boomerang Learning aims to help students seeking effective learning solutions, parents actively involved in their children's education, and teachers dedicated to personalized instruction. We hope to change the lives of students, engaging them in learning and sparking curiosity.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-green-50 p-8 rounded-lg shadow-md"
              >
                <h2 className="text-3xl font-bold mb-6 text-green-600">Our Mission</h2>
                <p className="text-lg text-gray-700">
                  We are dedicated to shaping education for individual needs, and equipping students, parents, and teachers with tools that promote academic success. Boomerang Learning is committed to cultivating a dynamic and supportive learning community that keeps everybody in the loop to ensure student proficiency.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;