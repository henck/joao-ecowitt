import * as React from 'react';
import { createRoot } from 'react-dom/client';
import { StyleReset, StyleBase, Theme } from '@independent-software/typeui/styles';
import { ThemeProvider } from 'styled-components';
import { IThemeInterface } from '@independent-software/typeui/styles/Theme';
import { Screen } from './Screen';

const MyTheme: IThemeInterface = {
  ...Theme,
  radius: 4
}

const App = (props: {}) =>
  <>
    <StyleReset/>
    <StyleBase/>
    <ThemeProvider theme={MyTheme}>
      <Screen/>
    </ThemeProvider>
  </>      

const root = createRoot(document.getElementById('root'));
root.render(<App/>);

// Whenever webpack rebuilds the project, refresh the browser.
declare let module: any;
if (module.hot) {
  module.hot.accept(); 
}

export { App }
