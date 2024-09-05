import React from 'react';
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="bg-primary text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4">Boomerang Learning</h2>
        <p className="text-xl mb-8"><strong>Revolutionizing Education</strong> with Technology</p>
        <Button variant="secondary" size="lg" className="bg-secondary hover:bg-secondary/90 text-white">Learn More</Button>
      </div>
    </section>
  );
};

export default Hero;