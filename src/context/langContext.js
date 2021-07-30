import React, { useState } from "react";
import Spanish from "./../lang/es-ES.json";
import English from "./../lang/en-US.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  const [mensajes, establecerMensajes] = useState();
  const [locale, establecerLocale] = useState("en-US");

  const establecerLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case "es-ES":
        establecerMensajes(Spanish);
        establecerLocale("es-ES");
        break;
      case "en-US":
        establecerMensajes(English);
        establecerLocale("en-US");
        break;

      default:
      case "en-US":
        establecerMensajes(English);
        establecerLocale("en-US");
    }
  };

  return (
    <langContext.Provider value={{ establecerLenguaje: establecerLenguaje }}>
      <IntlProvider locale={locale} messages={mensajes}>
        {children}
      </IntlProvider>
    </langContext.Provider>
  );
};

export { langContext, LangProvider };
