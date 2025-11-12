"use client";
import { motion } from "motion/react";
import { Code2, Database, Cloud, Laptop } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Building responsive and interactive user interfaces with React, TypeScript, and modern CSS.",
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Creating scalable APIs and services with Node.js, Express, and various databases.",
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "Deploying and managing applications on AWS, GCP, and implementing CI/CD pipelines.",
    },
    {
      icon: Laptop,
      title: "Full Product Lifecycle",
      description:
        "From concept to deployment, I handle the entire development process.",
    },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl sm:text-5xl text-center mb-4">About Me</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            I'm a passionate fullstack developer with 3+ years of experience
            building web applications that make a difference. I love turning
            complex problems into simple, beautiful, and intuitive solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
            >
              <highlight.icon className="w-12 h-12 mb-4 text-gray-900" />
              <h3 className="text-xl mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 p-8 bg-gray-50 rounded-lg"
        >
          <h3 className="text-2xl mb-4">My Journey</h3>
          <p className="text-gray-700 mb-4">
            My journey into software development started with a curiosity about
            how things work. What began as tinkering with HTML and CSS evolved
            into a career building production-grade applications used by
            thousands of users.
          </p>
          <p className="text-gray-700">
            I specialize in the JavaScript ecosystem, with expertise in React,
            Node.js, and TypeScript. I'm constantly learning new technologies
            and best practices to stay at the forefront of web development. When
            I'm not coding, you'll find me contributing to open-source projects
            or writing technical blog posts.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
