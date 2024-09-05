import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductCard = ({ title, description, price }) => (
  <Card className="w-full">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-2xl font-bold mb-4">${price}</p>
      <Button className="w-full">Learn More</Button>
    </CardContent>
  </Card>
);

const ProductOffering = () => {
  const products = [
    { title: "EduTech Basic", description: "Essential learning tools for students", price: 9.99 },
    { title: "EduTech Pro", description: "Advanced features for serious learners", price: 19.99 },
    { title: "EduTech Enterprise", description: "Comprehensive solution for institutions", price: 99.99 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-center">Our Product Offering</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={index} {...product} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductOffering;