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
      description: "Kris Lau is an <strong><span class='text-[#004aad]'>ambitious learner</span></strong>. He runs a community service initiative providing <strong>student-led tutoring</strong> at the YMCA. He believes that <strong><span class='text-[#c30083]'>quality education should be equally accessible to everyone</span></strong>.",
      linkedinUrl: "https://www.linkedin.com/mwlite/profile/in/kris-lau-542680261?trk=recent-searches",
      instagramUrl: "https://www.instagram.com/krislau101?igsh=MXN4dXdiZHBwYXpqdQ==",
      imageSrc: "/krispic.jpg"
    },
    {
      name: "Abdul-Aleem Mohammed",
      role: "CSO",
      description: "Abdul-Aleem Mohammed is a <strong><span class='text-[#004aad]'>natural leader</span></strong> with an inclination for <strong><span class='text-[#c30083]'>hard work</span></strong>.",
      linkedinUrl: "https://www.linkedin.com/mwlite/profile/in/abdul-aleem-mohammed-67671a2b0?trk=blended-typeahead",
      instagramUrl: "https://www.instagram.com/a_faizaan_mo?igsh=anZraHBqeDFvaXpp&utm_source=qr",
      imageSrc: "/mepic.jpg"
    },
    {
      name: "Parth Patel",
      role: "CFO",
      description: "Parth Patel has an <strong><span class='text-[#004aad]'>eye for detail</span></strong>, which allows him to <strong><span class='text-[#c30083]'>plan and execute long-term action</span></strong>.",
      linkedinUrl: "#",
      instagramUrl: "https://www.instagram.com/notparthpatel?igsh=MTdhbTVkYTFxNWNmNw==",
      imageSrc: "/parthpic.jpg"
    }
  ];

  const developmentTeam = [
    {
      name: "Noah Boyd",
      role: "Lead Web Developer",
      description: "Noah Boyd <strong><span class='text-[#004aad]'>leads the web development efforts</span></strong> at Boomerang Learning.",
      linkedinUrl: "#",
      instagramUrl: "#",
      imageSrc: "/placeholder.svg"
    },
    {
      name: "Johnathan Baker",
      role: "Development Partner",
      description: "Johnathan Baker contributes to the <strong><span class='text-[#c30083]'>development of Boomerang Learning's platform</span></strong>.",
      linkedinUrl: "#",
      instagramUrl: "#",
      imageSrc: "/placeholder.svg"
    },
    {
      name: "David Clutter",
      role: "Development Partner",
      description: "David Clutter plays a <strong><span class='text-[#004aad]'>key role in developing Boomerang Learning's solutions</span></strong>.",
      linkedinUrl: "#",
      instagramUrl: "#",
      imageSrc: "/placeholder.svg"
    },
    {
      name: "Arnav Bhute",
      role: "Development Partner",
      description: "Arnav Bhute contributes his <strong><span class='text-[#c30083]'>expertise to Boomerang Learning's development team</span></strong>.",
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