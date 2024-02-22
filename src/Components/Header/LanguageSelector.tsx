import { useContext} from 'react';
import Flags from 'react-flags-select';
import { LanguageContext } from '../../translations/Language';


const LanguageSelector = () => {

  const {language, setLanguage} = useContext(LanguageContext);

  const handleLanguageChange = (selectedLanguage: string) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div>
      <Flags
        selected={language}
        countries={['US', 'BR']}
        customLabels={{ US: 'English', BR: 'Português' }}
        onSelect={(selectedLanguage: string) => handleLanguageChange(selectedLanguage) }
      />
    </div>
  );
};

export default LanguageSelector;
