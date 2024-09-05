import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin } from 'lucide-react';

const CoFounderCard = ({ name, role, description, linkedinUrl, instagramUrl, imageSrc }) => (
  <Card className="overflow-hidden">
    <div className="aspect-w-1 aspect-h-1">
      {imageSrc && (
        <img
          src={imageSrc}
          alt={name}
          className="object-cover w-full h-full"
        />
      )}
    </div>
    <CardContent className="p-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-lg font-semibold text-gray-600">{role}</p>
      <p className="mt-2">{description}</p>
      <div className="mt-4 flex space-x-2">
        {linkedinUrl && (
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
            <Linkedin className="w-6 h-6" />
          </a>
        )}
        {instagramUrl && (
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-800">
            <Instagram className="w-6 h-6" />
          </a>
        )}
      </div>
    </CardContent>
  </Card>
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
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-4 text-center">About Us</h1>
        <p className="text-lg mb-8 text-center">
          Boomerang operates across 4 time zones, with passionate professionals from coast to coast in the US as well as overseas. Made up of passionate and talented professionals, we are democratizing learning by creating a platform for students, made by students.
        </p>

        <h2 className="text-3xl font-bold mb-6 text-center">Co-founders</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {coFounders.map((founder, index) => (
            <CoFounderCard key={index} {...founder} />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">Background</h2>
            <p className="text-lg">
              Boomerang Learning was founded with a vision to revolutionize the educational landscape by leveraging technology to create a personalized and adaptive learning experience. We saw how difficult it was to understand a student's learning abilities, and easily access this. Which is why we have created Boomerang.
            </p>
            <p className="text-lg mt-4">
              In a rapidly evolving educational environment, Boomerang Learning aims to help students seeking effective learning solutions, parents actively involved in their children's education, and teachers dedicated to personalized instruction. We hope to change the lives of students, engaging them in learning and sparking curiosity.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-lg">
              We are dedicated to shaping education for individual needs, and equipping students, parents, and teachers with tools that promote academic success. Boomerang Learning is committed to cultivating a dynamic and supportive learning community that keeps everybody in the loop to ensure student proficiency.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;