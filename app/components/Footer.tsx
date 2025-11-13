"use client";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl mb-2">{"<Dev />"}</h3>
            <p className="text-gray-400">
              Building the web, one line of code at a time.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={24} />
            </a>
            <a
              href="mailto:douglas.lindahl@gmail.com"
              className="hover:text-gray-300 transition-colors"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
          <p>© {currentYear} Douglas Lindahl. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
