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
      image: "/ui-gallery-1.jpg",
      title: "Educator Dashboard",
      description: "Comprehensive view of student progress and active lessons for educators."
    },
    {
      image: "/ui-gallery-2.jpg",
      title: "Parent View - Standards Progress",
      description: "Detailed breakdown of a student's progress in various math standards for parents."
    },
    {
      image: "/ui-gallery-3.jpg",
      title: "Educator Classroom View",
      description: "Overview of active lessons and assignments for educators, with recommended activities."
    },
    {
      image: "/ui-gallery-4.jpg",
      title: "Parent Standards Overview",
      description: "Visual representation of math concepts and related standards for parents."
    },
    {
      image: "/ui-gallery-5.jpg",
      title: "Interactive Math Question",
      description: "Engaging, visual math problem with multiple-choice answers for students."
    },
    {
      image: "/ui-gallery-6.jpg",
      title: "Reading Comprehension Exercise",
      description: "Interactive reading passage with comprehension questions for students."
    },
    {
      image: "/ui-gallery-7.jpg",
      title: "Long Division Tutorial",
      description: "Step-by-step guide for long division problems with AI assistance."
    },
    {
      image: "/ui-gallery-8.jpg",
      title: "Time Problem Solution",
      description: "Visual explanation of a time-based math problem with multiple-choice answers."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow">
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h1 className="text-5xl font-bold text-center text-purple-600 mb-6">Learning with Boomerang</h1>
            <h2 className="text-3xl font-semibold text-center text-purple-800 mb-8">Our Comprehensive Learning Solution</h2>
            <p className="text-xl text-center mb-12">
              Boomerang Learning offers a <span className="text-purple-600 font-semibold">revolutionary approach</span> to education, combining <span className="text-purple-600 font-semibold">AI technology</span> with proven pedagogical
              methods to create a <span className="text-purple-600 font-semibold">personalized learning experience</span> for every student.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['For Students', 'For Teachers', 'For Parents'].map((title, index) => (
                <Card key={index} className="bg-white shadow-lg">
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-bold text-purple-600 mb-4">{title}</h3>
                    <ul className="space-y-2">
                      {title === 'For Students' && [
                        'Engaging, interactive lessons',
                        'Personalized learning paths',
                        'Instant feedback and explanations',
                        'Gamified learning experiences'
                      ].map((item, i) => <li key={i} className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> {item}</li>)}
                      {title === 'For Teachers' && [
                        'Comprehensive student progress tracking',
                        'AI-assisted lesson planning',
                        'Automated grading and assessment',
                        'Data-driven insights for targeted instruction'
                      ].map((item, i) => <li key={i} className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> {item}</li>)}
                      {title === 'For Parents' && [
                        'Real-time progress monitoring',
                        'Detailed performance analytics',
                        'Easy communication with teachers',
                        'Resources to support at-home learning'
                      ].map((item, i) => <li key={i} className="flex items-center"><CheckCircle className="text-green-500 mr-2" size={20} /> {item}</li>)}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { icon: <Zap className="text-yellow-500" size={24} />, text: "Personalized learning paths" },
                { icon: <Monitor className="text-blue-500" size={24} />, text: "AI-powered question generation" },
                { icon: <BarChart2 className="text-green-500" size={24} />, text: "Real-time progress tracking" },
                { icon: <Users className="text-purple-500" size={24} />, text: "Interactive quizzes and games" },
                { icon: <BarChart2 className="text-red-500" size={24} />, text: "Comprehensive analytics for parents and teachers" },
                { icon: <CheckCircle className="text-green-500" size={24} />, text: "Alignment with state curriculum standards" }
              ].map((feature, index) => (
                <Card key={index} className="bg-white shadow-sm">
                  <CardContent className="p-4 flex items-center">
                    {feature.icon}
                    <span className="ml-4 text-lg">{feature.text}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">MVP Demo</h2>
            <p className="text-center text-lg mb-12">Experience a preview of Boomerang Learning's capabilities with our Minimum Viable Product demonstration.</p>
            <div className="max-w-5xl mx-auto h-[600px]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/Qno6Dw-u4RI"
                title="Boomerang Learning MVP Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
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
                      <div className="bg-gray-300 h-48 mb-4 flex items-center justify-center rounded overflow-hidden">
                        <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                      </div>
                      <p className="text-center text-sm font-semibold">{item.title}</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="max-w-3xl">
                    <div className="bg-gray-300 h-[80vh] flex items-center justify-center rounded overflow-hidden">
                      <img src={item.image} alt={item.title} className="w-full h-full object-contain" />
                    </div>
                    <h3 className="text-xl font-bold mt-4 mb-2">{item.title}</h3>
                    <p className="text-center">{item.description}</p>
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