import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import { ThemeProvider } from '@emotion/react';
import './index.css';

const theme = {
    colors: {white: '#ffffff',
  black: '#010101',
  green: '#05ed05',
  red: '#f44336',
  primaryText: '#212121',
  secondaryText: '#ffffff',
  thead: '#20b2aa',
  bg: '#dddddd',
  border: '#a9a9a9',}
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
