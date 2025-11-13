"use client";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Projects() {
  const projects = [
    {
      title: "Uppsikt",
      description:
        "A swedish home-services company offering comprehensive indoor and outdoor maintenance, grounding itself in reliability and year-round support.",
      image: "uppsikt-hero.jpeg",
      tags: ["React", "NextJS", "Javascript"],
      github: "https://github.com",
      demo: "https://uppsikt.se",
    },
    {
      title: "TaxiBilen",
      description:
        "A locally–based taxi and light haulage service in Kungshamn sweden offering safe, reliable rides, fixed pricing and year-round availability — including transport of small freight, boats, and oversized items.",
      image: "taxibilen-hero.webp",
      tags: ["React Native", "Firebase", "Redux", "Express"],
      github: "https://github.com",
      demo: "https://taxibilen.se",
    },
    {
      title: "NexaQR",
      description:
        "A smart QR-code platform to store and access contacts safely from any device. Generate QR codes for wristbands, keychains or cards — giving you emergency access wherever you are.",
      image: "taxibilen-hero.webp",
      tags: [
        "QR codes",
        "Contact storage",
        "Mobile access",
        "Digital ID",
        "Cross-device",
      ],
      github: "https://github.com",
      demo: "https://nexaQR.com",
    },
    {
      title: "Developer Tools Suite",
      description:
        "A collection of productivity tools for developers including API testing, code snippet manager, and Git workflow automation.",
      image:
        "https://images.unsplash.com/photo-1707528041466-83a325f01a3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXZlbG9wZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzYyOTE2NjQ3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      tags: ["Electron", "React", "TypeScript", "SQLite"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4 text-sky-500">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-sky-500">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    </Button>
                    <Button size="sm" asChild>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
