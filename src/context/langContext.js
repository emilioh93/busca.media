import React, { useState } from "react";
import Spanish from "./../lang/es-ES.json";
import English from "./../lang/en-US.json";
import { IntlProvider } from "react-intl";

const langContext = React.createContext();

const LangProvider = ({ children }) => {
  let localePorDefecto;
  let mensajesPorDefecto;

  const lang = localStorage.getItem("lang");

  console.log({lang});

  if (lang) {
    localePorDefecto = lang;

    if (lang === "es-ES") {
      mensajesPorDefecto = Spanish;
    } else if (lang === "en-US") {
      mensajesPorDefecto = English;
    } else {
      localePorDefecto = "en-US";
      mensajesPorDefecto = English;
    }
  }

  const [mensajes, establecerMensajes] = useState(mensajesPorDefecto);
  const [locale, establecerLocale] = useState(localePorDefecto);

  const establecerLenguaje = (lenguaje) => {
    switch (lenguaje) {
      case "es-ES":
        establecerMensajes(Spanish);
        establecerLocale("es-ES");
        localStorage.setItem("lang", "es-ES");
        break;
      case "en-US":
        establecerMensajes(English);
        establecerLocale("en-US");
        localStorage.setItem("lang", "en-US");
        break;

      default:
        establecerMensajes(English);
        establecerLocale("en-US");
        localStorage.setItem("lang", "en-US");
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
