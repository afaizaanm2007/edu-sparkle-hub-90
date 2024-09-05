import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About EduTech</h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg mb-6">
            EduTech is a <strong>cutting-edge educational technology startup</strong> dedicated to transforming the learning experience. 
            We combine the latest in <strong>AI and educational research</strong> to create powerful, intuitive tools for students and educators alike.
          </p>
          <p className="text-lg">
            Our mission is to make <strong>quality education accessible to everyone, everywhere</strong>. 
            By leveraging technology, we're breaking down barriers and opening up new possibilities in learning.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;