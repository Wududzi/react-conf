import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from 'assets/styles/globalStyles';
import { theme } from 'assets/styles/theme';

const Root = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <div>Here crate elements</div>
      </ThemeProvider>
    </>
  );
};

export default Root;
