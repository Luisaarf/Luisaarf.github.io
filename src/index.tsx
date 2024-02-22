import React from 'react';
import ReactDOM from 'react-dom/client';
import './reset.css';
import './fonts/font.css'
import './index.css';
import { LanguageProvider } from './translations/Language';
import Header  from './Components/Header/Header';
import Main from './Components/Main/Main';


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

