import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from '../components/Header';
import Footer from '../components/Footer';

const GetStarted = () => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically validate the password against a backend
    // For this example, we'll use a placeholder password
    if (password === 'devaccess') {
      setError('');
      alert('Access granted to development builds!');
    } else {
      setError('Incorrect password');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full space-y-8 p-8 bg-white shadow-lg rounded-lg">
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Get Started
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            This platform hasn't been released publicly yet, please check back soon! Or enter password to access development builds.
          </p>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
            <Input
              type="password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Enter development access password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <Button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Access Development Builds
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default GetStarted;