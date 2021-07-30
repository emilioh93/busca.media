import "./Header.css";
import es from "../../img/flags/espana.png";
import en from "../../img/flags/uk.png";
import { useContext } from "react";
import { langContext } from "../../context/langContext";

const Header = () => {
  const idioma = useContext(langContext);
  console.log(idioma.establecerLenguaje);

  return (
    <div className="header">
      <div>
        <span onClick={() => window.scroll(0, 0)}>🎬 Movie Base</span>
      </div>
      <div className="flags">
        <button
          onClick={() => {
            idioma.establecerLenguaje("es-ES");
          }}
        >
          {" "}
          <img src={es} alt="spain flag" />{" "}
        </button>
        <button
          onClick={() => {
            idioma.establecerLenguaje("en-US");
          }}
        >
          {" "}
          <img src={en} alt="uk flag" />{" "}
        </button>
      </div>
    </div>
  );
};

export default Header;
