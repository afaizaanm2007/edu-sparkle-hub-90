import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Monitor, BarChart2, Users, CheckCircle, BookOpen } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ProductOffering = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const features = [
    { icon: <Zap className="w-6 h-6 text-purple-500" />, title: "AI-Powered Learning", description: "Personalized learning paths tailored to each student's needs." },
    { icon: <Monitor className="w-6 h-6 text-purple-500" />, title: "Interactive Lessons", description: "Engaging, multimedia-rich content for enhanced understanding." },
    { icon: <BarChart2 className="w-6 h-6 text-purple-500" />, title: "Progress Tracking", description: "Real-time analytics to monitor and improve student performance." },
    { icon: <Users className="w-6 h-6 text-purple-500" />, title: "Collaborative Learning", description: "Tools for group projects and peer-to-peer learning." },
    { icon: <CheckCircle className="w-6 h-6 text-purple-500" />, title: "Instant Feedback", description: "Immediate assessment and guidance for continuous improvement." },
    { icon: <BookOpen className="w-6 h-6 text-purple-500" />, title: "Comprehensive Curriculum", description: "Aligned with state and national education standards." },
  ];

  const uiGalleryItems = [
    { 
      src: "/ui-gallery-1.jpg", 
      description: "Educator Dashboard: Comprehensive view of student progress and active lessons.",
      detailedDescription: "The Educator Dashboard provides a holistic view of classroom activities, including active lessons, student progress, and recommended activities. It features a clean layout with easy navigation between different sections."
    },
    { 
      src: "/ui-gallery-2.jpg", 
      description: "Parent View: Detailed progress tracking for individual learning standards.",
      detailedDescription: "The Parent View offers an in-depth look at a student's progress across various learning standards. It includes a graph showing improvement over time and provides access to specific lessons and resources."
    },
    { 
      src: "/ui-gallery-3.jpg", 
      description: "Educator View: Classroom management and lesson planning interface.",
      detailedDescription: "This interface allows educators to manage their classroom, plan lessons, and track student progress. It includes features like active lessons, assignments, and AI-powered recommendations for engaging learning activities."
    },
    { 
      src: "/ui-gallery-4.jpg", 
      description: "Math Concept Map: Visual representation of interconnected math topics.",
      detailedDescription: "The Math Concept Map provides a visual overview of various math topics and how they interconnect. It helps students and parents understand the progression of math concepts and identifies areas for focused study."
    },
    { 
      src: "/ui-gallery-5.jpg", 
      description: "Reading Comprehension Exercise: Interactive question and answer format.",
      detailedDescription: "This exercise demonstrates an interactive reading comprehension activity. Students read a passage and answer questions, with immediate feedback and explanations to enhance understanding."
    },
    { 
      src: "/ui-gallery-6.jpg", 
      description: "Math Problem Solving: Step-by-step guidance for complex problems.",
      detailedDescription: "The Math Problem Solving interface provides step-by-step guidance for solving complex math problems. It includes visual aids, explanations, and interactive elements to support the learning process."
    },
    { 
      src: "/ui-gallery-7.jpg", 
      description: "Adaptive Learning Module: Personalized question sets based on student performance.",
      detailedDescription: "This module showcases Boomerang Learning's adaptive technology, which tailors questions to each student's performance level. It adjusts difficulty in real-time to provide an optimal learning experience."
    },
    { 
      src: "/ui-gallery-8.jpg", 
      description: "Progress Report: Detailed analytics of student performance across subjects.",
      detailedDescription: "The Progress Report provides a comprehensive overview of a student's performance across various subjects. It includes detailed analytics, highlighting strengths and areas for improvement."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold text-center text-purple-800 mb-8">Our Product Offering</h1>
            <p className="text-center text-lg mb-12">Discover how Boomerang Learning is revolutionizing education with our innovative platform.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      {feature.icon}
                      <h3 className="text-xl font-semibold ml-3">{feature.title}</h3>
                    </div>
                    <p className="text-gray-600">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-purple-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">How It Works</h2>
            <div className="max-w-3xl mx-auto">
              <ol className="list-decimal list-inside space-y-4">
                <li className="text-lg"><span className="font-semibold">Sign Up:</span> Create an account for your school, classroom, or individual student.</li>
                <li className="text-lg"><span className="font-semibold">Assessment:</span> Complete an initial assessment to determine the student's current level.</li>
                <li className="text-lg"><span className="font-semibold">Personalized Learning Path:</span> Receive a customized curriculum based on the assessment results.</li>
                <li className="text-lg"><span className="font-semibold">Interactive Lessons:</span> Engage with multimedia content and adaptive exercises.</li>
                <li className="text-lg"><span className="font-semibold">Progress Tracking:</span> Monitor improvement through real-time analytics and reports.</li>
                <li className="text-lg"><span className="font-semibold">Continuous Adaptation:</span> The platform adjusts difficulty and content based on performance.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">UI Gallery</h2>
            <p className="text-center text-lg mb-8">Explore the intuitive and engaging user interface of Boomerang Learning.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {uiGalleryItems.map((item, index) => (
                <Dialog key={index}>
                  <DialogTrigger>
                    <div className="bg-white p-4 rounded-lg shadow-md transition-transform hover:scale-105 cursor-pointer">
                      <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center rounded overflow-hidden">
                        <img src={item.src} alt={`UI Screenshot ${index + 1}`} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-center text-sm">{item.description}</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <div className="bg-gray-200 h-[60vh] flex items-center justify-center rounded overflow-hidden">
                      <img src={item.src} alt={`UI Screenshot ${index + 1}`} className="w-full h-full object-contain" />
                    </div>
                    <p className="text-center mt-4">{item.detailedDescription}</p>
                  </DialogContent>
                </Dialog>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Basic</h3>
                  <p className="text-3xl font-bold mb-6">$9.99<span className="text-sm font-normal">/month</span></p>
                  <ul className="space-y-2 mb-6">
                    <li>Access to core curriculum</li>
                    <li>Basic progress tracking</li>
                    <li>Limited interactive lessons</li>
                  </ul>
                  <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors">Choose Plan</button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow border-purple-500 border-2">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Pro</h3>
                  <p className="text-3xl font-bold mb-6">$19.99<span className="text-sm font-normal">/month</span></p>
                  <ul className="space-y-2 mb-6">
                    <li>Full curriculum access</li>
                    <li>Advanced progress tracking</li>
                    <li>Unlimited interactive lessons</li>
                    <li>AI-powered recommendations</li>
                  </ul>
                  <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors">Choose Plan</button>
                </CardContent>
              </Card>
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-semibold mb-4">Enterprise</h3>
                  <p className="text-3xl font-bold mb-6">Custom</p>
                  <ul className="space-y-2 mb-6">
                    <li>All Pro features</li>
                    <li>Custom integration</li>
                    <li>Dedicated support</li>
                    <li>Bulk licensing</li>
                  </ul>
                  <button className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700 transition-colors">Contact Us</button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductOffering;