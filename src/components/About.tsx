import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const AboutContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: auto;
  }
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #64ffda;

  @media (max-width: 768px) {
    font-size: 2rem;
    text-align: center;
  }
`;

const AnimatedName = styled(motion.h2)`
  font-size: 3.5rem;
  margin-bottom: 2rem;
  color: #ffffff;
  font-weight: 700;
  display: flex;
  gap: 0.2rem;

  @media (max-width: 768px) {
    font-size: 2rem;
    justify-content: center;
    flex-wrap: wrap;
    gap: 0.1rem;
  }
`;

const AnimatedLetter = styled(motion.span)`
  display: inline-block;
  white-space: pre;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const AnimatedParagraph = styled(motion.p)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.3rem;
  margin-bottom: 0.8rem;
  line-height: 1.6;
`;

const AnimatedWord = styled(motion.span)`
  display: inline-block;
`;

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-top: 1rem;
  
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    align-items: center;
  }
`;

const TextSection = styled.div`
  line-height: 1.6;
  margin-top: -5rem;

  @media (max-width: 768px) {
    margin-top: 0;
    text-align: center;
    order: 2;
  }
`;

const ImageSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: -2rem;
  
  @media (max-width: 768px) {
    margin: 1rem 0 2rem 0;
    order: 1;
  }
`;

const ProfileImage = styled.img`
  max-width: 80%;
  border-radius: 150px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    max-width: 50%;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 2rem;

  @media (max-width: 768px) {
    justify-content: center;
    flex-wrap: wrap;
  }
`;

const SocialIcon = styled.a`
  color: #ffffff;
  font-size: 1.8rem;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    color: #64ffda;
    transform: translateY(-3px);
  }
`;

const IconText = styled.span`
  font-size: 1rem;
`;

const About = () => {
  const name = "Burak Karabacak";
  const paragraphs = [
    "Greetings! I am a third year Computer Engineering Student with hands-on experience on mobile app development with React Native",
    "I also build web applications using React.js on front-end and Node.js for backend.",
    "Skilled in server virtualization on Proxmox VE container setup and deployment."
  ];

  const letterAnimation = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity:1,
      transition: {
        delay: i * 0.20,
        duration: 0.3,
        ease: "easeIn" 
      }
    })
  };

  const wordAnimation = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.10,
        duration: 0.3,
        ease: "easeIn"
      }
    })
  };

  return (
    <AboutContainer
      id="about"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Title>About Me</Title>
      <AnimatedName>
        {name.split('').map((letter, index) => (
          <AnimatedLetter
            key={index}
            custom={index}
            variants={letterAnimation}
            initial="hidden"
            animate="visible"
          >
            {letter}
          </AnimatedLetter>
        ))}
      </AnimatedName>
      

      <Content>
        <TextSection>
          {paragraphs.map((paragraph, pIndex) => (
            <AnimatedParagraph key={pIndex}>
              {paragraph.split(' ').map((word, wIndex) => (
                <AnimatedWord
                  key={wIndex}
                  custom={wIndex}
                  variants={wordAnimation}
                  initial="hidden"
                  animate="visible"
                >
                  {word}
                </AnimatedWord>
              ))}
            </AnimatedParagraph>
          ))}
          <SocialIcons>
            <SocialIcon href="https://github.com/krbck" target="_blank" rel="noopener noreferrer">
              <FaGithub />
              <IconText></IconText>
            </SocialIcon>
            <SocialIcon href="https://www.linkedin.com/in/burak-karabacak-006949229/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
              <IconText></IconText>
            </SocialIcon>
            <SocialIcon href="mailto:burakkarabacak2002@gmail.com">
              <FaEnvelope />
              <IconText></IconText>
            </SocialIcon>
          </SocialIcons>
        </TextSection>
        <ImageSection>
          <ProfileImage
            src="./src/assets/image1.png"
            alt="Profile"
          />
        </ImageSection>
      </Content>
    </AboutContainer>
  );
};

export default About; 