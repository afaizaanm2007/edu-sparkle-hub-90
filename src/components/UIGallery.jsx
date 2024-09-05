import React from 'react';
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const uiGalleryItems = [
  {
    image: "/14436d_32441f13f6ed4c819bfcf1eedadf95dc~mv2.jpg",
    title: "Educator Dashboard",
    description: "Comprehensive view of student progress and active lessons for educators."
  },
  {
    image: "/14436d_342ddc3149b243089b8a417a492e7d89~mv2.jpg",
    title: "Parent View - Standards Progress",
    description: "Detailed breakdown of a student's progress in various math standards for parents."
  },
  {
    image: "/14436d_48bc8894ce0941678d2e810be59ce45b~mv2.jpg",
    title: "Educator Classroom View",
    description: "Overview of active lessons and assignments for educators, with recommended activities."
  },
  {
    image: "/14436d_5c98adedc81247f6b1b4d82b3974ca19~mv2.jpg",
    title: "Parent Standards Overview",
    description: "Visual representation of math concepts and related standards for parents."
  },
  {
    image: "/14436d_5b1a323423d94b1796a9a7ea3808f589~mv2.jpg",
    title: "Interactive Math Question",
    description: "Engaging, visual math problem with multiple-choice answers for students."
  },
  {
    image: "/14436d_f65865d8c00b41909727aedc1c60e059~mv2.jpg",
    title: "Reading Comprehension Exercise",
    description: "Interactive reading passage with comprehension questions for students."
  },
  {
    image: "/14436d_7c01e9285a6a4689b01b693a1c3e3e62~mv2.jpg",
    title: "Long Division Tutorial",
    description: "Step-by-step guide for long division problems with AI assistance."
  },
  {
    image: "/14436d_c4fef9a43a6c4271b07099a6c38d5375~mv2.jpg",
    title: "Time Problem Solution",
    description: "Visual explanation of a time-based math problem with multiple-choice answers."
  }
];

const UIGallery = () => (
  <motion.section 
    className="py-16 bg-gray-100"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUpVariants}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">UI Gallery</h2>
      <p className="text-center text-lg mb-8">Explore the intuitive and engaging user interface of Boomerang Learning.</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {uiGalleryItems.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeInUpVariants}
            custom={index}
          >
            <Dialog>
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
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default UIGallery;