import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const AppContainer = styled.div`
  min-height: 100vh;
  background-color:rgb(39, 39, 39);
  color: #ffffff;
`;

const NavBar = styled.nav`
  background-color: #1a1a1a;
  padding: 1rem 0rem;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const NavLinks = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  max-width: 600px;
  margin: 0 auto;
`;

const Slider = styled.div<{ activeIndex: number; direction: 'up' | 'down' }>`
  position: absolute;
  bottom: -5px;
  height: 2px;
  background-color: #64ffda;
  transition: all 1s ease;
  width: 25%;
  left: ${props => props.activeIndex * 25}%;
  transform-origin: ${props => props.direction === 'up' ? 'right' : 'left'};
`;

const NavLink = styled.a<{ active: boolean }>`
  color: ${props => props.active ? '#64ffda' : '#ffffff'};
  text-decoration: none;
  font-size: 1.1rem;
  transition: color 0.3s ease;
  cursor: pointer;
  position: relative;
  padding: 0 1.5rem;
  text-align: center;
  flex: 1;

  &:hover {
    color: #64ffda;
  }
`;

const MainContent = styled.main`
  padding-top: 80px;
`;

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [lastScrollY, setLastScrollY] = useState(0);

  const getActiveIndex = (section: string) => {
    const sections = ['about', 'skills', 'projects', 'contact'];
    return sections.indexOf(section);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      // Determine scroll direction based on current position
      const direction = window.pageYOffset > offsetPosition ? 'up' : 'down';
      setScrollDirection(direction);

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(sectionId);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? 'down' : 'up';
      setScrollDirection(direction);
      setLastScrollY(currentScrollY);

      const sections = ['about', 'skills', 'projects', 'contact'];
      const scrollPosition = currentScrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <AppContainer>
      <NavBar>
        <NavLinks>
          <NavLink 
            onClick={() => scrollToSection('about')}
            active={activeSection === 'about'}
          >
            About
          </NavLink>
          <NavLink 
            onClick={() => scrollToSection('skills')}
            active={activeSection === 'skills'}
          >
            Skills
          </NavLink>
          <NavLink 
            onClick={() => scrollToSection('projects')}
            active={activeSection === 'projects'}
          >
            Projects
          </NavLink>
          <NavLink 
            onClick={() => scrollToSection('contact')}
            active={activeSection === 'contact'}
          >
            Contact
          </NavLink>
          <Slider activeIndex={getActiveIndex(activeSection)} direction={scrollDirection} />
        </NavLinks>
      </NavBar>
      <MainContent>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </MainContent>
    </AppContainer>
  );
}

export default App;