import React from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaGithub } from 'react-icons/fa';
import { 
  FaReact, 
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaJenkins,
  FaJira
} from 'react-icons/fa';
import { SiTypescript, SiProxmox, SiFirebase, SiExpress } from 'react-icons/si';

const ProjectsContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  opacity: 0;
  transform: translateY(50px);
  transition: all 0.6s cubic-bezier(0.4, 0, 0.2, 1);

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: auto;
  }

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #64ffda;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const ProjectCard = styled(motion.div)`
  background-color: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }

  &:nth-of-type(1) { transition-delay: 0.01s; }
  &:nth-of-type(2) { transition-delay: 0.01s; }
  &:nth-of-type(3) { transition-delay: 0.01s; }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectContent = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  color: #64ffda;
  margin-bottom: 1rem;
`;

const ProjectDescription = styled.p`
  color: #a0a0a0;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const ProjectLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  padding: 0.5rem 1rem;
  border: 1px solid #64ffda;
  border-radius: 5px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: #64ffda;
    color: #121212;
  }
`;

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  background-color: #1a1a1a;
  border-radius: 10px;
  padding: 1.2rem;
  max-width: 500px;
  width: 85%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1rem;
    max-height: 90vh;
  }
`;

const ModalImage = styled.img`
  width: 100%;
  height: 300px;
  object-fit: contain;
  border-radius: 8px;
  margin-bottom: 1rem;
  background-color: #121212;
  padding: 1rem;

  @media (max-width: 768px) {
    height: 250px;
  }
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
`;

const ModalTitle = styled.h2`
  color: #64ffda;
  font-size: 1.6rem;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const ModalCloseButton = styled.button`
  background: none;
  border: none;
  color: #ffffff;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: all 0.2s ease;

  &:hover {
    color: #64ffda;
  }
`;

const ModalSection = styled.div`
  margin-bottom: 1rem;
`;

const SectionTitle = styled.h3`
  color: #64ffda;
  margin-bottom: 0.8rem;
  font-size: 1.1rem;
`;

const SectionContent = styled.div`
  color: #ffffff;
  line-height: 1.6;
`;

const TechList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const TechItem = styled.li`
  font-size: 1.8rem;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  .react-icon { color: #61DAFB; }
  .typescript-icon { color: #3178C6; }
  .html-icon { color: #E34F26; }
  .css-icon { color: #1572B6; }
  .js-icon { color: #F7DF1E; }
  .node-icon { color: #339933; }
  .git-icon { color: #F05032; }
  .docker-icon { color: #2496ED; }
  .github-icon { color: #ffffff; }
  .jenkins-icon { color: #D24939; }
  .jira-icon { color: #0052CC; }
  .proxmox-icon { color: #E57000; }
  .firebase-icon { color: #FFCA28; }
  .express-icon { color: #ffffff; }
`;

const SkillIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
`;

const SkillIcon = styled.div`
  font-size: 1.5rem;
  color: #64ffda;
  transition: all 0.2s ease;

  &:hover {
    transform: translateY(-3px);
  }

  .react-icon { color: #61DAFB; }
  .typescript-icon { color: #3178C6; }
  .html-icon { color: #E34F26; }
  .css-icon { color: #1572B6; }
  .js-icon { color: #F7DF1E; }
  .node-icon { color: #339933; }
  .git-icon { color: #F05032; }
  .docker-icon { color: #2496ED; }
  .github-icon { color: #ffffff; }
  .jenkins-icon { color: #D24939; }
  .jira-icon { color: #0052CC; }
  .proxmox-icon { color: #E57000; }
  .firebase-icon { color: #FFCA28; }
  .express-icon { color: #ffffff; }
`;

const Projects = () => {
  const elementRef = useScrollAnimation();
  const [selectedProject, setSelectedProject] = React.useState<number | null>(null);

  const getSkillIcon = (tech: string) => {
    switch (tech.toLowerCase()) {
      case 'react':
        return <FaReact className="react-icon" />;
      case 'typescript':
        return <SiTypescript className="typescript-icon" />;
      case 'html':
        return <FaHtml5 className="html-icon" />;
      case 'css':
        return <FaCss3Alt className="css-icon" />;
      case 'javascript':
        return <FaJs className="js-icon" />;
      case 'node.js':
        return <FaNodeJs className="node-icon" />;
      case 'git':
        return <FaGitAlt className="git-icon" />;
      case 'docker':
        return <FaDocker className="docker-icon" />;
      case 'github':
        return <FaGithub className="github-icon" />;
      case 'jenkins':
        return <FaJenkins className="jenkins-icon" />;
      case 'jira':
        return <FaJira className="jira-icon" />;
      case 'proxmox':
        return <SiProxmox className="proxmox-icon" />;
      case 'firebase':
        return <SiFirebase className="firebase-icon" />;
      case 'express':
        return <SiExpress className="express-icon" />;
      default:
        return null;
    }
  };

  const projects = [
    {
      title: 'KDU Task Management App',
      description: 'KDU is a  Task Management mobile application built by using React Native framework.',
      image: './src/assets/kdu.jpeg',
      github: 'https://github.com/krbck/KDU',
      detailedDescription: 'KDU is a mobile application built by using React Native framework. It is focused on task management among the users on the platform enabling users to create, edit, assign tasks with push notifications.',
      technologies: ['React', 'TypeScript', 'Firebase'],
      contributions: [
        'Integrated OneSignal for push notifications.',
        'Designed and developed the user interface',
        'Set up the backend infrastructure',
        'Used Firebase to maintain storage and database functionality'
      ]
    },
    {
      title: 'Wedding Media Upload Platform',
      description: 'Web Application for uploading photos and videos from weddings.',
      image: './src/assets/wedding.jpeg',
      github: 'https://github.com/krbck/wedding_memories',
      detailedDescription: 'This is a modern, user-friendly web application designed to streamline the collection and sharing of photos and videos from weddings. Guests and hosts can easily upload media to a central platform, creating a shared digital memory book for the event.',
      technologies: ['React', 'Firebase', 'Node.js', 'Express'],
      contributions: [
        'Developed the web application using React for Frontend',
        'Set up Caddy web server for hosting static frontend',
        'Handled file storage and metadata management using local storage',
        'Created a secure media upload API using Node.js and Express'
      ]
    },
    /*{
      title: 'Project 3',
      description: 'A brief description of project 3 and its key features.',
      image: 'https://via.placeholder.com/400x200',
      github: '#',
      detailedDescription: 'A comprehensive description of the project, its purpose, and the problems it solves.',
      technologies: ['React', 'Docker', 'AWS', 'GraphQL'],
      contributions: [
        'Built the frontend application',
        'Containerized the application',
        'Set up cloud infrastructure',
        'Implemented GraphQL API'
      ]
    }*/
   
  ];

  return (
    <ProjectsContainer
      ref={elementRef}
      id="projects"
    >
      <Title>My Projects</Title>
      <ProjectsGrid>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            whileHover={{ y: -10 }}
            transition={{ duration: 0 }}
            onClick={() => setSelectedProject(index)}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <SkillIcons>
                {project.technologies.map((tech, techIndex) => (
                  <SkillIcon key={techIndex}>
                    {getSkillIcon(tech)}
                  </SkillIcon>
                ))}
              </SkillIcons>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>

      <AnimatePresence>
        {selectedProject !== null && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={e => e.stopPropagation()}
            >
              <ModalImage src={projects[selectedProject].image} alt={projects[selectedProject].title} />
              <ModalHeader>
                <ModalTitle>{projects[selectedProject].title}</ModalTitle>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <ProjectLink href={projects[selectedProject].github} target="_blank" rel="noopener noreferrer">
                    <FaGithub /> GitHub
                  </ProjectLink>
                  <ModalCloseButton onClick={() => setSelectedProject(null)}>×</ModalCloseButton>
                </div>
              </ModalHeader>

              <ModalSection>
                <SectionTitle>Description</SectionTitle>
                <SectionContent>
                  {projects[selectedProject].detailedDescription}
                </SectionContent>
              </ModalSection>

              <ModalSection>
                <SectionTitle>Technologies Used</SectionTitle>
                <TechList>
                  {projects[selectedProject].technologies.map((tech, index) => (
                    <TechItem key={index}>
                      {getSkillIcon(tech)}
                    </TechItem>
                  ))}
                </TechList>
              </ModalSection>

              <ModalSection>
                <SectionTitle>What I Did</SectionTitle>
                <SectionContent>
                  <ul style={{ listStyle: 'none', padding: 0 }}>
                    {projects[selectedProject].contributions.map((contribution, index) => (
                      <li key={index} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <span style={{ color: '#64ffda' }}>▹</span> {contribution}
                      </li>
                    ))}
                  </ul>
                </SectionContent>
              </ModalSection>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </ProjectsContainer>
  );
};

export default Projects; 