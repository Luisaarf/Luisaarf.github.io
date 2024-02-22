import React, { createContext, useState } from 'react';

interface LanguageContextType {
    language: string;
    setLanguage: (lang: string) => void;
}
  
export const LanguageContext = createContext<LanguageContextType>({
    language: 'BR',
    setLanguage: () => {}
});

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguage] = useState('BR');
  
    // Função para lidar com a mudança de idioma
    const handleLanguageChange = (selectedLanguage: string) => {
      setLanguage(selectedLanguage);
    };
  
    // Valor do contexto de idioma
    const languageContextValue: LanguageContextType = {
      language,
      setLanguage: handleLanguageChange
    };
  
    return (
      <LanguageContext.Provider value={languageContextValue}>
        {children}
      </LanguageContext.Provider>
    );
  };