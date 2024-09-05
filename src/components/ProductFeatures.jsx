import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Monitor, BarChart2, Users, BookOpen } from 'lucide-react';
import { motion } from "framer-motion";

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ProductFeatures = () => (
  <motion.section 
    className="py-16"
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={fadeInUpVariants}
  >
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center text-purple-800 mb-12">Key Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { icon: <Zap className="text-yellow-500" size={24} />, text: "Personalized learning paths" },
          { icon: <Monitor className="text-blue-500" size={24} />, text: "AI-powered question generation" },
          { icon: <BarChart2 className="text-green-500" size={24} />, text: "Real-time progress tracking" },
          { icon: <Users className="text-purple-500" size={24} />, text: "Interactive quizzes and games" },
          { icon: <BarChart2 className="text-red-500" size={24} />, text: "Comprehensive analytics for parents and teachers" },
          { icon: <BookOpen className="text-green-500" size={24} />, text: "Alignment with state curriculum standards" }
        ].map((feature, index) => (
          <motion.div
            key={index}
            variants={fadeInUpVariants}
            custom={index}
          >
            <Card className="bg-white shadow-sm">
              <CardContent className="p-4 flex items-center">
                {feature.icon}
                <span className="ml-4 text-lg">{feature.text}</span>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

export default ProductFeatures;