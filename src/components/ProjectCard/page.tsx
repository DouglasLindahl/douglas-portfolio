// components/ProjectCard.tsx
"use client";
import styled from "styled-components";

type Props = {
  title: string;
  description: string;
  image: string;
  url: string;
};

const Card = styled.a`
  display: block;
  border: 1px solid #e5e5e5;
  border-radius: 12px;
  overflow: hidden;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: 700;
`;

const Description = styled.p`
  color: #666;
  margin-top: 8px;
`;

export default function ProjectCard({ title, description, image, url }: Props) {
  return (
    <Card href={url} target="_blank" rel="noopener noreferrer">
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
      </Content>
    </Card>
  );
}
