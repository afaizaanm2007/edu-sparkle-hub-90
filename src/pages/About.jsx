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
        <h3 className="text-2xl font-bold text-[#004aad]">{name}</h3>
        <p className="text-lg font-semibold text-gray-600 mb-2">{role}</p>
        <p className="text-gray-700">{description}</p>
        <div className="mt-4 flex space-x-3">
          {linkedinUrl && (
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-[#004aad] hover:text-[#c30083] transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          )}
          {instagramUrl && (
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="text-[#c30083] hover:text-[#004aad] transition-colors">
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
        <section className="bg-[#004aad] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold mb-6 text-center">About Us</h1>
            <p className="text-xl mb-8 text-center max-w-3xl mx-auto">
              Boomerang operates across 4 time zones, with passionate professionals from coast to coast in the US as well as overseas. Made up of passionate and talented professionals, we are democratizing learning by creating a platform for students, made by students.
            </p>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-12 text-center text-[#004aad]">Co-founders</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {coFounders.map((founder, index) => (
                <CoFounderCard key={index} {...founder} />
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#004aad] p-8 rounded-lg shadow-md text-white"
              >
                <h2 className="text-3xl font-bold mb-6">Background</h2>
                <p className="text-lg mb-4">
                  Boomerang Learning was founded with a vision to revolutionize the educational landscape by leveraging technology to create a personalized and adaptive learning experience. We saw how difficult it was to understand a student's learning abilities, and easily access this. Which is why we have created Boomerang.
                </p>
                <p className="text-lg">
                  In a rapidly evolving educational environment, Boomerang Learning aims to help students seeking effective learning solutions, parents actively involved in their children's education, and teachers dedicated to personalized instruction. We hope to change the lives of students, engaging them in learning and sparking curiosity.
                </p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#c30083] p-8 rounded-lg shadow-md text-white"
              >
                <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg">
                  We are dedicated to shaping education for individual needs, and equipping students, parents, and teachers with tools that promote academic success. Boomerang Learning is committed to cultivating a dynamic and supportive learning community that keeps everybody in the loop to ensure student proficiency.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-[#004aad] p-8 rounded-lg shadow-md text-white"
            >
              <h2 className="text-4xl font-bold mb-8 text-center">Our Story</h2>
              <div className="space-y-6">
                <p>
                  Our journey began in October 2023 with the inception of Boomerang Learning. As volunteer tutors at a local YMCA in the Evansville Promise Zone, we encountered a significant challenge: many students were falling behind state learning standards. Despite our best efforts, it was difficult to address the diverse learning needs of numerous students in our limited time.
                </p>
                <p>
                  The lack of continuity between different volunteer tutors and the absence of a centralized system to track student progress became apparent. This realization sparked the idea for Boomerang Learning—a hub of learning information for both <span className="font-semibold">students and those who support them</span>.
                </p>
                <p>
                  We envisioned Boomerang as a solution that harnesses AI and technology to tackle these educational challenges. By generating questions based on state curricula, we aim to create a comprehensive database for students to practice anytime, anywhere—not just within classroom confines.
                </p>
                <p>
                  Our platform utilizes AI and analytics to monitor student progress and proficiency across various learning standards. This ensures that teachers, afterschool programs, and parents remain informed about each student's educational journey, allowing for targeted support both within and outside our app.
                </p>
                <p>
                  Boomerang Learning's potential was recognized at the U.E. Changemaker Challenge, where we secured over $200,000 in renewable scholarships. We're deeply involved with our local community, schools, and tutoring centers to expand Boomerang's reach. Currently, we're seeking seed funding to develop our app and realize our vision of nationwide implementation in schools.
                </p>
              </div>
              <div className="mt-8 bg-[#c30083] p-6 rounded-lg">
                <h3 className="text-2xl font-bold mb-4 text-center">Boomerang Learning's Core Mission:</h3>
                <p className="text-xl font-semibold text-center">
                  Increase student proficiency by making learning efficient
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;