import React, { useState } from 'react';
import Flags from 'react-flags-select';

interface LanguageSelectorProps {
  onChange: (selectedLanguage: string) => void;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ onChange }) => {
    const [selected, setSelected] = useState('BR');

  const handleLanguageChange = (selectedLanguage : string) => {
    onChange(selectedLanguage);
    setSelected(selectedLanguage);
  };

  return (
    <div>
      <Flags
        selected={selected}
        countries={['US', 'BR']}
        customLabels={{ US: 'English', BR: 'Português' }}
        onSelect={(selectedLanguage: string) => handleLanguageChange(selectedLanguage) }
      />
    </div>
  );
};

export default LanguageSelector;