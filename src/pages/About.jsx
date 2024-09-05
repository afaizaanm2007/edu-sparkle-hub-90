import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";

const ProfileCard = ({ name, role, linkedinUrl, instagramUrl, imageSrc }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
    <Card className="overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="aspect-w-1 aspect-h-1">
        {imageSrc && <img src={imageSrc} alt={name} className="object-cover w-full h-full" />}
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-[#004aad]">{name}</h3>
        <p className="text-lg font-semibold text-gray-600 mb-2">{role}</p>
        <div className="mt-4 flex space-x-3">
          <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#004aad] hover:text-[#c30083] transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#c30083] hover:text-[#004aad] transition-colors">
            <Instagram className="w-5 h-5" />
          </a>
        </div>
      </CardContent>
    </Card>
  </motion.div>
);

const Section = ({ title, children }) => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#004aad]">{title}</h2>
      {children}
    </div>
  </section>
);

const About = () => {
  const coFounders = [
    { name: "Kris Lau", role: "CEO", linkedinUrl: "https://www.linkedin.com/mwlite/profile/in/kris-lau-542680261?trk=recent-searches", instagramUrl: "https://www.instagram.com/krislau101?igsh=MXN4dXdiZHBwYXpqdQ==", imageSrc: "/krispic.jpg" },
    { name: "Abdul-Aleem Mohammed", role: "CSO", linkedinUrl: "https://www.linkedin.com/mwlite/profile/in/abdul-aleem-mohammed-67671a2b0?trk=blended-typeahead", instagramUrl: "https://www.instagram.com/a_faizaan_mo?igsh=anZraHBqeDFvaXpp&utm_source=qr", imageSrc: "/mepic.jpg" },
    { name: "Parth Patel", role: "CFO", linkedinUrl: "#", instagramUrl: "https://www.instagram.com/notparthpatel?igsh=MTdhbTVkYTFxNWNmNw==", imageSrc: "/parthpic.jpg" }
  ];

  const teamMembers = [
    { name: "Noah Boyd", role: "Lead Web Developer", linkedinUrl: "#", instagramUrl: "#", imageSrc: "/placeholder.svg" },
    { name: "Johnathan Baker", role: "Development Partner", linkedinUrl: "#", instagramUrl: "#", imageSrc: "/placeholder.svg" },
    { name: "David Clutter", role: "Development Partner", linkedinUrl: "#", instagramUrl: "#", imageSrc: "/placeholder.svg" },
    { name: "Arnav Bhute", role: "Development Partner", linkedinUrl: "#", instagramUrl: "#", imageSrc: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="bg-white py-16 border-b border-gray-200">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-6 text-center text-[#004aad]">About Us</h1>
            <p className="text-lg mb-8 text-center max-w-3xl mx-auto text-gray-700">
              Boomerang operates across 4 time zones, with passionate professionals from coast to coast in the US as well as overseas. Made up of passionate and talented professionals, we are democratizing learning by creating a platform for students, made by students.
            </p>
          </div>
        </section>

        <Section title="Our Team">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <ProfileCard key={index} {...member} />
            ))}
          </div>
        </Section>

        <Section title="Co-founders">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coFounders.map((founder, index) => (
              <ProfileCard key={index} {...founder} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default About;