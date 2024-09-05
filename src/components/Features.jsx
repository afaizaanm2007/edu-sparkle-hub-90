import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Users, TrendingUp } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
  <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
    <CardHeader>
      <div className="mb-4 text-primary">{icon}</div>
      <CardTitle className="text-primary">{title}</CardTitle>
      <CardDescription className="text-black">{description}</CardDescription>
    </CardHeader>
  </Card>
);

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10" />,
      title: "Adaptive Learning",
      description: "Personalized learning paths tailored to each student's needs."
    },
    {
      icon: <Users className="w-10 h-10" />,
      title: "Collaborative Platform",
      description: "Foster teamwork and communication among students and teachers."
    },
    {
      icon: <TrendingUp className="w-10 h-10" />,
      title: "Progress Tracking",
      description: "Real-time analytics to monitor and improve student performance."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-primary">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;