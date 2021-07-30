import React from "react";
import { useHistory } from "react-router";
import error404 from "../../img/error404/error404.png";
import "./Error404.css";
import { Button } from "@material-ui/core";
import { FormattedMessage } from "react-intl";

const Error404 = () => {
    let history = useHistory();
  return (
    <div className="error404_container">
      <img className="error404_img" src={error404} alt="error 404" />
      <h1>Error 404</h1>
      <span>
        La página a la que intentas acceder puede haber sido removida, cambiado
        su nombre o que esté temporalmente deshabilitada.
      </span>
      <div>
        <Button className="error404_button" onClick={() => history.push("./")}>Volver al Inicio</Button>
      </div>
    </div>
  );
};

export default Error404;
