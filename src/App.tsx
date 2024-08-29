import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme } from './utils/themeChanger';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { Container, Wrapper } from './style/AppStyles';

const App: React.FC = () => {
  const { theme } = useTheme();

  return (
    <StyledThemeProvider theme={theme}>
      <Container>
        <Wrapper>
          <Header />
          <Service />
          <About />
          <Skills />
          <Experience />
          <Contact />
          <Footer />
        </Wrapper>
      </Container>
    </StyledThemeProvider>
  );
};

export default App;