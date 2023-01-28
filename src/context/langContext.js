import React, { useState, useEffect, useMemo } from 'react';
import { IntlProvider } from 'react-intl';

const languages = {
  'en-US': { messages: require('./../lang/en-US.json') },
  'es-ES': { messages: require('./../lang/es-ES.json') },
};

const LangContext = React.createContext();

const LangProvider = ({ children }) => {
  const [local, setLocal] = useState('en-US');
  const [messages, setMessages] = useState(languages['en-US'].messages);

  useEffect(() => {
    const storedLang = localStorage.getItem('lang');
    if (storedLang && languages[storedLang]) {
      setLocal(storedLang);
      setMessages(languages[storedLang].messages);
    }
  }, []);

  const setLanguage = useMemo(
    () => language => {
      if (languages[language]) {
        setLocal(language);
        setMessages(languages[language].messages);
        localStorage.setItem('lang', language);
      }
    },
    []
  );

  return (
    <LangContext.Provider value={{ setLanguage }}>
      <IntlProvider local={local} messages={messages}>
        {children}
      </IntlProvider>
    </LangContext.Provider>
  );
};

export { LangContext, LangProvider };
