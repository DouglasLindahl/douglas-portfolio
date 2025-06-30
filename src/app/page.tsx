"use client";
import ProjectCard from "@/components/ProjectCard/page";
import styled from "styled-components";

const Wrapper = styled.main`
  max-width: 1024px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
`;

const projects = [
  {
    title: "Blog Website",
    description: "A simple blog built with Next.js and MDX.",
    image: "/images/blog.png",
    url: "https://yourblog.com",
  },
  {
    title: "E-commerce Store",
    description: "Fully functional online store using Stripe API.",
    image: "/images/store.png",
    url: "https://yourstore.com",
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
