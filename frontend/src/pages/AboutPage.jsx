import React from "react";
import { FaUsers, FaLightbulb, FaRocket } from "react-icons/fa";
import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="bg-orange-50 text-gray-800 min-h-screen py-8">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-4 drop-shadow-md">
          About CodeMind
        </h1>
        <p className="text-gray-700 text-base md:text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          CodeMind helps developers write better code, improve efficiency, and follow modern best practices. Our AI acts like a senior developer reviewing your work, providing constructive feedback and improvement suggestions.
        </p>
      </section>

      {/* Mission / Vision / Goal Section */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {[
          {
            icon: <FaUsers size={48} className="mx-auto text-green-700 mb-3" />,
            title: "Our Mission",
            description: "Empower developers of all levels to write clean, maintainable, and efficient code."
          },
          {
            icon: <FaLightbulb size={48} className="mx-auto text-green-700 mb-3" />,
            title: "Our Vision",
            description: "AI-assisted development becomes the standard for improving productivity and code quality."
          },
          {
            icon: <FaRocket size={48} className="mx-auto text-green-700 mb-3" />,
            title: "Our Goal",
            description: "Make advanced code review accessible and fast for everyone, from students to professionals."
          }
        ].map(({ icon, title, description }) => (
          <div
            key={title}
            className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300"
          >
            {icon}
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-2 text-green-700">{title}</h2>
            <p className="text-gray-700 text-center text-sm md:text-base leading-relaxed">{description}</p>
          </div>
        ))}
      </section>

      {/* CTA Section */}
      <section className="bg-white mt-12 py-12 text-center rounded-xl shadow-md max-w-3xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
          Ready to Improve Your Code?
        </h2>
        <p className="text-gray-800 text-base md:text-lg mb-6 max-w-xl mx-auto">
          Start using CodeMind today and get AI-powered feedback instantly. Transform your coding skills and ensure clean, maintainable, and efficient code.
        </p>
        <Link
          to="/review"
          className="inline-block bg-green-700 hover:bg-green-600 text-white font-semibold px-8 py-3 rounded-full shadow-md transition transform hover:scale-105"
        >
          Start Reviewing
        </Link>
      </section>
    </div>
  );
}

export default AboutPage;
