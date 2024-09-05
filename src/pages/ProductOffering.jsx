import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Monitor, BarChart2, Users, CheckCircle, BookOpen } from 'lucide-react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const ProductOffering = () => {
  const [selectedImage, setSelectedImage] = useState(null);

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
        {/* ... (previous sections remain unchanged) ... */}

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
      </main>
      <Footer />
    </div>
  );
};

export default ProductOffering;