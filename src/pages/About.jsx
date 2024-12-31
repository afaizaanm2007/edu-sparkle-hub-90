import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AboutHero from '../components/AboutHero';
import AboutBackground from '../components/AboutBackground';
import AboutStory from '../components/AboutStory';
import TeamSection from '../components/TeamSection';

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
      linkedinUrl: "#",
      instagramUrl: "https://www.instagram.com/notparthpatel?igsh=MTdhbTVkYTFxNWNmNw==",
      imageSrc: "/parthpic.jpg"
    }
  ];

  const developmentTeam = [
    {
      name: "Noah Boyd",
      role: "Lead Web Developer",
      description: "Noah is a determined and creative leader of the front-end architecture, with foundations in web development and engineering backgrounds.",
      linkedinUrl: "https://www.linkedin.com/in/noahbboyd",
      instagramUrl: "https://www.instagram.com/3nboyd?igsh=MW44Z2NmYndjMWFyYQ==",
      imageSrc: "/noah pic.jpg"
    },
    {
      name: "Jonathan Baker",
      role: "Development Partner",
      description: "We are currently undergoing staff changes and this page will soon be updated to reflect that.",
      imageSrc: "/placeholder.svg"
    },
    {
      name: "David Clutter",
      role: "Development Partner",
      description: "We are hiring development interns! To apply, please email your resume to info@boomeranglearning.com",
      imageSrc: "/placeholder.svg"
    },
    {
      name: "Arnav Bhute",
      role: "Development Partner",
      description: "Arnav Bhute is a charming enthusiast who focuses on machine learning applications to power health and public policy. During free time, you can find him teaching kids about neural network design, researching, or debating legislation with his teammates like a Congressman.",
      linkedinUrl: "https://www.linkedin.com/in/arnav-bhute-729247284?trk=contact-info",
      imageSrc: "/arnav pic.png"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow flex flex-col items-center">
        <AboutHero />
        <AboutBackground />
        <AboutStory />
        <TeamSection title="Co-founders" members={coFounders} />
        <TeamSection title="Development Team" members={developmentTeam} />
      </main>
      <Footer />
    </div>
  );
};

export default About;