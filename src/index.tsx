import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './fonts/font.css'
import './index.css';
import { LanguageProvider } from './translations/Language';
import Header  from './pages/Header/Header';
import Main from './pages/Main/Main';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <LanguageProvider>
    <React.StrictMode>
      <Header/> 
      <Main/>
    </React.StrictMode>
  </LanguageProvider>
);

