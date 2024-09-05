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
      description: "Kris Lau is an <strong>ambitious learner</strong>. He runs a community service initiative providing <strong>student-led tutoring</strong> at the YMCA. He believes that <strong>quality education should be equally accessible to everyone</strong>.",
      linkedinUrl: "https://www.linkedin.com/mwlite/profile/in/kris-lau-542680261?trk=recent-searches",
      instagramUrl: "https://www.instagram.com/krislau101?igsh=MXN4dXdiZHBwYXpqdQ==",
      imageSrc: "/krispic.jpg"
    },
    {
      name: "Abdul-Aleem Mohammed",
      role: "CSO",
      description: "Abdul-Aleem Mohammed is a <strong>natural leader</strong> with an inclination for <strong>hard work</strong>.",
      linkedinUrl: "https://www.linkedin.com/mwlite/profile/in/abdul-aleem-mohammed-67671a2b0?trk=blended-typeahead",
      instagramUrl: "https://www.instagram.com/a_faizaan_mo?igsh=anZraHBqeDFvaXpp&utm_source=qr",
      imageSrc: "/mepic.jpg"
    },
    {
      name: "Parth Patel",
      role: "CFO",
      description: "Parth Patel has an <strong>eye for detail</strong>, which allows him to <strong>plan and execute long-term action</strong>.",
      linkedinUrl: "#",
      instagramUrl: "https://www.instagram.com/notparthpatel?igsh=MTdhbTVkYTFxNWNmNw==",
      imageSrc: "/parthpic.jpg"
    }
  ];

  const developmentTeam = [
    {
      name: "Noah Boyd",
      role: "Lead Web Developer",
      description: "Noah Boyd <strong>leads the web development efforts</strong> at Boomerang Learning.",
      linkedinUrl: "#",
      instagramUrl: "#",
      imageSrc: "/placeholder.svg"
    },
    {
      name: "Johnathan Baker",
      role: "Development Partner",
      description: "Johnathan Baker contributes to the <strong>development of Boomerang Learning's platform</strong>.",
      linkedinUrl: "#",
      instagramUrl: "#",
      imageSrc: "/placeholder.svg"
    },
    {
      name: "David Clutter",
      role: "Development Partner",
      description: "David Clutter plays a <strong>key role in developing Boomerang Learning's solutions</strong>.",
      linkedinUrl: "#",
      instagramUrl: "#",
      imageSrc: "/placeholder.svg"
    },
    {
      name: "Arnav Bhute",
      role: "Development Partner",
      description: "Arnav Bhute contributes his <strong>expertise to Boomerang Learning's development team</strong>.",
      linkedinUrl: "#",
      instagramUrl: "#",
      imageSrc: "/placeholder.svg"
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