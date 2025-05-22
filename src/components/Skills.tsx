import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { 
  FaReact, 
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDocker,
  FaGithub,
  FaJenkins,
  FaJira,
  FaServer
} from 'react-icons/fa';
import { SiTypescript, SiProxmox } from 'react-icons/si';

const SkillsContainer = styled(motion.div)`
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

  &.animate {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #64ffda;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const SkillCategory = styled(motion.div)`
  background-color: #1a1a1a;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);

  .animate & {
    opacity: 1;
    transform: translateY(0);
  }

  &:nth-of-type(1) { transition-delay: 0.01s; }
  &:nth-of-type(2) { transition-delay: 0.01s; }
  &:nth-of-type(3) { transition-delay: 0.01s; }
`;

const CategoryTitle = styled.h2`
  color: #64ffda;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SkillItem = styled.li`
  color: #ffffff;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 1.1rem;

  svg {
    font-size: 1.4rem;
  }

  .react-icon {
    color: #61DAFB;
  }

  .typescript-icon {
    color: #3178C6;
  }

  .html-icon {
    color: #E34F26;
  }

  .css-icon {
    color: #1572B6;
  }

  .js-icon {
    color: #F7DF1E;
  }

  .node-icon {
    color: #339933;
  }

  .git-icon {
    color: #F05032;
  }

  .docker-icon {
    color: #2496ED;
  }

  .github-icon {
    color: #ffffff;
  }

  .jenkins-icon {
    color: #D24939;
  }

  .jira-icon {
    color: #0052CC;
  }

  .proxmox-icon {
    color: #E57000;
  }
`;

const Skills = () => {
  const elementRef = useScrollAnimation();
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <FaReact className="react-icon" /> },
        { name: 'TypeScript', icon: <SiTypescript className="typescript-icon" /> },
        { name: 'HTML', icon: <FaHtml5 className="html-icon" /> },
        { name: 'CSS', icon: <FaCss3Alt className="css-icon" /> },
        { name: 'JavaScript', icon: <FaJs className="js-icon" /> },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs className="node-icon" /> },
        { name: 'RESTful APIs', icon: <FaServer className="node-icon" /> },
      ]
    },
    {
      title: 'Tools & Others',
      skills: [
        { name: 'Git', icon: <FaGitAlt className="git-icon" /> },
        { name: 'Docker', icon: <FaDocker className="docker-icon" /> },
        { name: 'Github', icon: <FaGithub className="github-icon" /> },
        { name: 'CI/CD', icon: <FaJenkins className="jenkins-icon" /> },
        { name: 'Agile Methodologies', icon: <FaJira className="jira-icon" /> },
        { name: 'Proxmox VE', icon: <SiProxmox className="proxmox-icon" /> }
      ]
    }
  ];

  return (
    <SkillsContainer
      ref={elementRef}
      id="skills"
    >
      <Title>Skills & Technologies</Title>
      <SkillsGrid>
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            whileHover={{ y: -15 }}
            transition={{ duration: 0 }}
          >
            <CategoryTitle>{category.title}</CategoryTitle>
            <SkillList>
              {category.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>
                  {skill.icon}
                  {skill.name}
                </SkillItem>
              ))}
            </SkillList>
          </SkillCategory>
        ))}
      </SkillsGrid>
    </SkillsContainer>
  );
};

export default Skills; 