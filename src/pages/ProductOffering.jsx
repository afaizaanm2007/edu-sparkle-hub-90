import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Card, CardContent } from "@/components/ui/card";
import { Zap, Monitor, BarChart2, Users, CheckCircle, BookOpen } from 'lucide-react';

const ProductOffering = () => {
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-purple-800 mb-8">MVP Demo</h2>
            <p className="text-center text-lg mb-8">Experience a preview of Boomerang Learning's capabilities with our Minimum Viable Product demonstration.</p>
            <div className="aspect-w-16 aspect-h-9 max-w-3xl mx-auto">
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[1, 2, 3].map((item) => (
                <div key={item} className="bg-white p-4 rounded-lg shadow">
                  <div className="bg-gray-300 h-48 mb-4 flex items-center justify-center">
                    <p className="text-xl font-semibold">UI Screenshot {item}</p>
                  </div>
                  <p className="text-center">Description of UI feature {item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold text-center text-purple-800 mb-8">Boomerang Learning: Empowering Education</h2>
            <div className="max-w-4xl mx-auto space-y-6 text-lg">
              <p>
                Boomerang Learning is an <span className="text-purple-600 font-semibold">innovative educational platform</span> designed to revolutionize the way students learn and teachers teach.
                Our mission is to provide a <span className="text-purple-600 font-semibold">comprehensive, personalized learning experience</span> that adapts to each student's unique needs and
                learning style.
              </p>
              <p>
                At the heart of Boomerang Learning is our <span className="text-purple-600 font-semibold">advanced AI technology</span>, which generates tailored questions and assignments based
                on individual student performance and state curriculum standards. This ensures that each student is consistently <span className="text-purple-600 font-semibold">challenged at
                the right level</span>, promoting optimal learning and growth.
              </p>
              <p>
                For teachers, Boomerang Learning offers <span className="text-purple-600 font-semibold">powerful tools</span> to streamline lesson planning, assessment, and progress tracking. Our
                platform provides <span className="text-purple-600 font-semibold">real-time insights</span> into student performance, allowing educators to identify areas where additional support may
                be needed and to tailor their instruction accordingly.
              </p>
              <p>
                Parents also benefit from Boomerang Learning's <span className="text-purple-600 font-semibold">comprehensive approach</span>. Through our user-friendly interface, parents can
                easily <span className="text-purple-600 font-semibold">monitor their child's progress</span>, understand their strengths and areas for improvement, and access resources to support
                learning at home.
              </p>
              <p>
                Our curriculum covers <span className="text-purple-600 font-semibold">core subjects</span> such as Mathematics and English Language Arts, with plans to expand to other subjects in
                the future. Each subject area is carefully <span className="text-purple-600 font-semibold">aligned with state standards</span> to ensure that students are well-prepared for standardized
                tests and future academic challenges.
              </p>
              <p>
                Boomerang Learning isn't just about academics – we've incorporated <span className="text-purple-600 font-semibold">gamification elements</span> to make learning fun and engaging.
                Students can earn rewards, compete in challenges, and track their own progress, fostering a <span className="text-purple-600 font-semibold">love for learning</span> that extends beyond
                the classroom.
              </p>
              <p>
                With Boomerang Learning, we're not just teaching – we're <span className="text-purple-600 font-semibold">transforming education</span>. Join us in our mission to empower students,
                support teachers, and involve parents in the learning journey like never before.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-purple-100">
          <div className="container mx-auto px-4">
            <h2 className="text-5xl font-bold text-center text-purple-800 mb-8">Boomerang Learning: Returning Kids to their full potential</h2>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProductOffering;