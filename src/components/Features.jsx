import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BookOpen, Users, TrendingUp } from 'lucide-react';

const FeatureCard = ({ icon, title, description }) => (
  <Card>
    <CardHeader>
      <div className="mb-4">{icon}</div>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
  </Card>
);

const Features = () => {
  const features = [
    {
      icon: <BookOpen className="w-10 h-10 text-blue-600" />,
      title: "Adaptive Learning",
      description: "Personalized learning paths tailored to each student's needs."
    },
    {
      icon: <Users className="w-10 h-10 text-blue-600" />,
      title: "Collaborative Platform",
      description: "Foster teamwork and communication among students and teachers."
    },
    {
      icon: <TrendingUp className="w-10 h-10 text-blue-600" />,
      title: "Progress Tracking",
      description: "Real-time analytics to monitor and improve student performance."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Features</h2>
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