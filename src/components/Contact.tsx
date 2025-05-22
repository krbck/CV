import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const ContactContainer = styled(motion.div)`
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
  text-align: center;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  max-width: 600px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

const ContactText = styled.p`
  color: #a0a0a0;
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const ContactLinks = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 1rem;
  }
`;

const ContactLink = styled.a`
  color: #ffffff;
  text-decoration: none;
  padding: 1rem 2rem;
  border: 1px solid #64ffda;
  border-radius: 5px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.1rem;

  @media (max-width: 768px) {
    padding: 0.8rem 1.5rem;
    font-size: 1rem;
  }

  &:hover {
    background-color: #64ffda;
    color: #121212;
    transform: translateY(-3px);
  }
`;

const Contact = () => {
  const elementRef = useScrollAnimation();

  return (
    <ContactContainer
      ref={elementRef}
      id="contact"
    >
      <Title>Contact Me</Title>
      <ContactContent>
        <ContactText>
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
        </ContactText>
        <ContactLinks>
          <ContactLink href="mailto:burakkarabacak2002@gmail.com" target="_blank" rel="noopener noreferrer">
            <FaEnvelope /> Email
          </ContactLink>
          <ContactLink href="https://github.com/krbck" target="_blank" rel="noopener noreferrer">
            <FaGithub /> GitHub
          </ContactLink>
          <ContactLink href="https://www.linkedin.com/in/burak-karabacak-006949229/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin /> LinkedIn
          </ContactLink>
        </ContactLinks>
      </ContactContent>
    </ContactContainer>
  );
};

export default Contact; 