import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">About Boomerang Learning</h1>
        
        <Card className="mb-8">
          <CardContent className="prose max-w-none p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p>
              At Boomerang Learning, we're on a mission to revolutionize education through innovative technology. 
              We believe that quality education should be accessible to everyone, everywhere. 
              Our cutting-edge tools and platforms are designed to empower both students and educators, 
              creating a more engaging and effective learning experience.
            </p>
          </CardContent>
        </Card>

        <Card className="mb-8">
          <CardContent className="prose max-w-none p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
            <p>
              Our diverse team of educators, technologists, and innovators are passionate about 
              transforming the way we learn. With decades of combined experience in education and 
              technology, we're uniquely positioned to address the challenges facing modern education.
            </p>
            <ul className="list-disc pl-6 mt-4">
              <li>Dr. Sarah Johnson - Founder & CEO (Former educator with 15 years of experience)</li>
              <li>Mike Chen - Chief Technology Officer (AI and machine learning expert)</li>
              <li>Emily Rodriguez - Head of Curriculum Development (Specializes in adaptive learning)</li>
              <li>David Patel - UX/UI Designer (Focused on creating intuitive educational interfaces)</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="prose max-w-none p-6">
            <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
            <ul className="list-disc pl-6">
              <li><strong>Innovation:</strong> We constantly push the boundaries of what's possible in edtech.</li>
              <li><strong>Accessibility:</strong> We strive to make quality education available to all, regardless of background or location.</li>
              <li><strong>Personalization:</strong> We believe in tailoring the learning experience to each individual's needs and learning style.</li>
              <li><strong>Collaboration:</strong> We foster a community where educators and learners can share knowledge and grow together.</li>
              <li><strong>Continuous Improvement:</strong> We're committed to constantly refining our tools based on the latest research and user feedback.</li>
            </ul>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
};

export default About;