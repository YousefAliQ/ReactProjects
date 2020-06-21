
import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

// define background colours for `mode` theme
const backgroundColor = theme('mode', {
  light: '#fafafa',
  dark: '#222'
});
// define text color for `mode` theme
const textColor = theme('mode', {
  light: '#000',
  dark: '#fff'
});

const padding = theme('layout', {
  compact: '0.5rem',
  cozy: '1.5rem'
});


// apply theming to a styled component
const Wrapper = styled.div`
  background-color: ${backgroundColor};
  color: ${textColor};
  padding: ${padding};
`;

// use styled-components as we would expect in render(), housing <Wrapper /> within a <ThemeProvider />
export default function Title() {
  return (
    <ThemeProvider theme={{ mode: 'dark', layout: 'cozy' }}>
      <Wrapper>
        Yousef Quran
      </Wrapper>
    </ThemeProvider>
  );
}