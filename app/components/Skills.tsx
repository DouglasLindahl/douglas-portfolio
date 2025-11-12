"use client";
import { motion } from "motion/react";
import { Badge } from "./ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";

export function Skills() {
  const skillCategories = {
    frontend: [
      "React",
      "TypeScript",
      "JavaScript",
      "Next.js",
      "Tailwind CSS",
      "HTML5",
      "CSS3",
      "Redux",
      "Vue.js",
      "Webpack",
      "Vite",
    ],
    backend: [
      "Node.js",
      "Express",
      "Python",
      "Django",
      "FastAPI",
      "GraphQL",
      "REST APIs",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Prisma",
    ],
    devops: [
      "AWS",
      "Docker",
      "Kubernetes",
      "CI/CD",
      "GitHub Actions",
      "Terraform",
      "Nginx",
      "Linux",
      "Git",
      "Firebase",
    ],
    tools: [
      "VS Code",
      "Figma",
      "Postman",
      "Jira",
      "Slack",
      "Chrome DevTools",
      "Jest",
      "Cypress",
      "Playwright",
    ],
  };

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="devops">DevOps & Cloud</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>

            <TabsContent value="frontend" className="mt-0">
              <div className="flex flex-wrap gap-3 p-6 bg-white rounded-lg border">
                {skillCategories.frontend.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge variant="secondary" className="text-sm py-2 px-4">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="backend" className="mt-0">
              <div className="flex flex-wrap gap-3 p-6 bg-white rounded-lg border">
                {skillCategories.backend.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge variant="secondary" className="text-sm py-2 px-4">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="devops" className="mt-0">
              <div className="flex flex-wrap gap-3 p-6 bg-white rounded-lg border">
                {skillCategories.devops.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge variant="secondary" className="text-sm py-2 px-4">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="tools" className="mt-0">
              <div className="flex flex-wrap gap-3 p-6 bg-white rounded-lg border">
                {skillCategories.tools.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Badge variant="secondary" className="text-sm py-2 px-4">
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  );
}
