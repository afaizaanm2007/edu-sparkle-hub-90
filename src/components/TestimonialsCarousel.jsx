import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    quote: "As both a teacher and a parent, I find report cards aren't very helpful. They don't give clear guidance on how to support kids at home. When teachers suggest things like reading a book or helping with math, parents often don't know where to start. Parents need specific, actionable recommendations to truly support their children",
    author: "Reuben Benzel",
    title: "Highschool Math Teacher Indianapolis, IN"
  },
  {
    quote: "Boomerang is a brilliant platform. Tutors and teachers probably can't find any tools like this, especially for free… The YMCA is committed to provide quality educational programs, but we really need to be equipped with data on how each student is performing in order to do so.",
    author: "Johnathan Pope",
    title: "CEO, YMCA of Southwest Indiana"
  },
  {
    quote: "I have high school students reading at a 5th-grade level. We need to address these learning gaps with intervention plans that engage not just educators but also parents, tutors, and afterschool programs. Right now, we're not doing enough to involve parents in this process",
    author: "Anonymous Highschool teacher",
    title: "Evansville, IN"
  }
];

const TestimonialsCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 10000, stopOnInteraction: true })
  );

  return (
    <div className="w-full bg-[#E5DEFF] py-12">
      <div className="container mx-auto px-4">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[plugin.current]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index}>
                <motion.div 
                  className="p-6 flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-6xl text-[#9b87f5] mb-4">"</div>
                  <p className="text-lg md:text-xl mb-6 text-gray-700 leading-relaxed">
                    {testimonial.quote}
                  </p>
                  <div className="mt-4">
                    <p className="font-semibold text-[#7E69AB]">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.title}</p>
                  </div>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;