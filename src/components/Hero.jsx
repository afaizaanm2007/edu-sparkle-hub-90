import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-blue-600 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Revolutionizing Education with Technology</h2>
        <p className="text-xl mb-8">Empowering learners and educators with innovative EdTech solutions</p>
        <Button variant="secondary" size="lg">Learn More</Button>
      </div>
    </section>
  );
};

export default Hero;