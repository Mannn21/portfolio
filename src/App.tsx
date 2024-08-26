import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { useTheme } from './utils/themeChanger';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
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
        </Wrapper>
      </Container>
    </StyledThemeProvider>
  );
};

export default App;