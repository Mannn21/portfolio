import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme } from './utils/themeChanger';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Experience from './components/Experience';
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
          <Experience />
          <Footer />
        </Wrapper>
      </Container>
    </StyledThemeProvider>
  );
};

export default App;