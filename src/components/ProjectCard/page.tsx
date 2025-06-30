import styled from "styled-components";

export type ProjectStatus = "Live" | "In Development";

export type ProjectCardProps = {
  title: string;
  description: string;
  role?: string;
  techStack?: string[];
  status?: ProjectStatus;
  image: string;
  url: string;
};

const Status = styled.span<{ status: ProjectStatus }>`
  display: inline-block;
  padding: 6px 14px;
  font-size: 0.75rem;
  font-weight: 600;
  border-radius: 12px;
  background: ${({ status }) =>
    status === "Live"
      ? "linear-gradient(135deg, #34d399 0%, #059669 100%)"
      : "linear-gradient(135deg, #facc15 0%, #ca8a04 100%)"};
  color: white;
  box-shadow: 0 2px 8px
    ${({ status }) =>
      status === "Live" ? "rgba(16, 185, 129, 0.3)" : "rgba(202, 138, 4, 0.3)"};
  user-select: none;
  margin-bottom: 12px;

  width: fit-content; /* added */
  max-width: 100%; /* added, just in case */
`;

const Card = styled.a`
  display: flex;
  flex-direction: row;
  border-radius: 16px;
  overflow: hidden;
  background: #303030;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-decoration: none;
  color: inherit;
  cursor: pointer;

  &:hover,
  &:focus-visible {
    transform: translateY(-6px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.12);
    outline: none;
  }

  @media (max-width: 700px) {
    flex-direction: column;
  }
`;

const ImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  overflow: hidden;
  @media (max-width: 700px) {
    width: 100%;
    height: auto;
    aspect-ratio: 1 / 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  padding: 24px;

  object-fit: cover; /* this crops and fills the square */
  transition: transform 0.4s ease;

  ${Card}:hover & {
    transform: scale(1.05);
  }
`;

const Content = styled.div`
  padding: 20px 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  flex: 1;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.2;
  color: white;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: white;
  flex-grow: 1;
`;

const Role = styled.p`
  font-size: 0.875rem;
  color: white;

  strong {
    color: white;
  }
`;

const TechStack = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    background: #e0f2fe;
    color: #0369a1;
    padding: 6px 12px;
    font-size: 0.75rem;
    font-weight: 600;
    border-radius: 14px;
    user-select: none;
  }
`;

export default function ProjectCard({
  title,
  description,
  role,
  techStack,
  image,
  url,
  status,
}: ProjectCardProps) {
  return (
    <Card
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit project: ${title}`}
    >
      <ImageWrapper>
        <Image src={image} alt={title} />
      </ImageWrapper>
      <Content>
        {status && <Status status={status}>{status}</Status>}
        <Title>{title}</Title>
        <Description>{description}</Description>
        {role && (
          <Role>
            <strong>Role:</strong> {role}
          </Role>
        )}
        {techStack && (
          <TechStack>
            {techStack.map((tech, i) => (
              <li key={i}>{tech}</li>
            ))}
          </TechStack>
        )}
      </Content>
    </Card>
  );
}
