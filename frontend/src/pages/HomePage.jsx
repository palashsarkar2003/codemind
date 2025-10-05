import React from "react";
import { Link } from "react-router-dom";
import { FaRobot, FaCode, FaLightbulb } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

function HomePage() {
  const features = [
    {
      icon: <FaRobot size={36} className="text-green-600" />,
      title: "AI Powered",
      description:
        "Our AI reviews your code like a senior developer with years of experience, providing detailed feedback instantly.",
    },
    {
      icon: <FaCode size={36} className="text-green-600" />,
      title: "Clean & Efficient",
      description:
        "Get suggestions to improve code structure, readability, and performance while maintaining best practices.",
    },
    {
      icon: <FaLightbulb size={36} className="text-green-600" />,
      title: "Best Practices",
      description:
        "Receive recommendations for modern coding standards, security, and maintainability to write robust code.",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50 text-gray-800 flex flex-col overflow-x-hidden">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-28 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-green-700">
          Welcome to CodeMind
        </h1>
        <p className="max-w-3xl mx-auto text-gray-700 text-lg md:text-xl mb-12 leading-relaxed">
          AI-powered platform to enhance your coding skills, improve code quality, readability, and efficiency effortlessly.
        </p>
        <Link
          to="/review"
          className="inline-flex items-center gap-3 bg-green-600 text-white font-semibold px-10 py-4 rounded-full shadow-md hover:bg-green-500 active:scale-95 transform transition duration-300"
        >
          Start Reviewing <FiArrowRight size={20} />
        </Link>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-10 py-24 grid md:grid-cols-3 gap-10">
        {features.map(({ icon, title, description }) => (
          <div
            key={title}
            className="bg-white p-10 rounded-2xl border border-gray-200 shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-20 h-20 bg-green-100 rounded-xl flex items-center justify-center mb-6 border border-green-200">
              {icon}
            </div>
            <h2 className="text-2xl font-semibold mb-3 text-green-700">{title}</h2>
            <p className="text-gray-700 max-w-xs">{description}</p>
          </div>
        ))}
      </section>
    </div>
  );
}

export default HomePage;
