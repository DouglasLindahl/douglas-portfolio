"use client";
import ProjectCard from "@/components/ProjectCard/page";
import styled from "styled-components";
import type { ProjectCardProps } from "@/components/ProjectCard/page";

const Wrapper = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const projects: ProjectCardProps[] = [
  {
    title: "Uppsikt",
    description:
      "A responsive website for a Swedish property services company offering cleaning, gardening, and estate clearance. Designed for both homeowners and commercial clients, the platform emphasizes trust, transparency, and ease of use.",
    role: "Developed the frontend using Next.js and JavaScript, implemented Styled Components, optimized performance and SEO with server-side rendering.",
    techStack: [
      "Next.js",
      "JavaScript",
      "Styled Components",
      "Responsive Design",
    ],
    status: "Live",
    image: "/uppsikt-logo.png",
    url: "https://www.uppsikt.se/",
  },
  {
    title: "ProScoutr",
    description:
      "A platform for scouts to create profiles and receive weekly AI-powered automated emails with player recommendations that match their scouting criteria, streamlining talent discovery.",
    role: "Built the frontend using Next.js and TypeScript, implemented styled-components for modular styles, integrated REST APIs, and connected to Supabase for database management, Resend for email delivery, and HubSpot for customer relationship management. Ensured mobile responsiveness and accessibility.",
    techStack: [
      "Next.js",
      "TypeScript",
      "Styled Components",
      "Supabase",
      "Resend",
      "HubSpot",
      "Responsive Design",
    ],
    status: "In Development",
    image: "/proscoutr-logo.png",
    url: "https://www.proscoutr.com/",
  },
  {
    title: "Taxibilen",
    description:
      "A simple, informative landing page for a Swedish taxi service, providing visitors with essential company information and contact details.",
    role: "Designed and developed the frontend using JavaScript and Styled Components, focusing on clean design, user experience, and responsive layout.",
    techStack: [
      "Next.js",
      "JavaScript",
      "Styled Components",
      "Responsive Design",
    ],
    status: "Live",
    image: "/taxibilen-logo.png",
    url: "https://www.taxibilen.se/",
  },
];

export default function Home() {
  return (
    <Wrapper>
      <Grid>
        {projects.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </Grid>
    </Wrapper>
  );
}
