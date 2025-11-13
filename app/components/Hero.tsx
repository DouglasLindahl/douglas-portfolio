"use client";
import { motion } from "motion/react";
import { Github, Linkedin, Mail, ArrowDown } from "lucide-react";
import { Button } from "./ui/button";
export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 px-4"
    >
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-gray-600 mb-4">Hi, my name is</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl mb-4 text-sky-500">
              Douglas Lindahl
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-600 mb-6">
              Fullstack Developer
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              I build exceptional digital experiences that combine beautiful
              design with robust functionality. Specializing in React, Node.js,
              and cloud technologies.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
          >
            <Button
              size="lg"
              className="text-sky-500 border-2 border-sky-500"
              onClick={scrollToProjects}
            >
              View My Work
            </Button>
            <Button size="lg" variant="outline" onClick={scrollToContact}>
              Get In Touch
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center justify-center gap-6"
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <ArrowDown size={24} className="text-gray-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
