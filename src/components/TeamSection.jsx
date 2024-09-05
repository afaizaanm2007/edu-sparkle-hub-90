import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Instagram, Linkedin } from 'lucide-react';
import { motion } from "framer-motion";

const ProfileCard = ({ name, role, description, linkedinUrl, instagramUrl, imageSrc }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className="w-full"
  >
    <Card className="h-full overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 bg-white">
      <div className="aspect-w-1 aspect-h-1">
        {imageSrc && (
          <img
            src={imageSrc}
            alt={name}
            className="object-cover w-full h-full"
          />
        )}
      </div>
      <CardContent className="p-6">
        <h3 className="text-2xl font-bold text-[#004aad]">{name}</h3>
        <p className="text-lg font-semibold text-gray-600 mb-2">{role}</p>
        <p className="text-gray-700">{description}</p>
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

const TeamSection = ({ title, members }) => (
  <section className="py-16 bg-gray-50">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-12 text-center text-[#004aad]">{title}</h2>
      <div className={`grid ${title === "Co-founders" ? "grid-cols-1 md:grid-cols-3" : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"} gap-8 justify-items-center`}>
        {members.map((member, index) => (
          <ProfileCard key={index} {...member} />
        ))}
      </div>
    </div>
  </section>
);

export default TeamSection;