import React from "react";
import { useHistory } from "react-router";
import error404 from "../../img/error404/error404.png";
import { Button } from "@material-ui/core";
import { FormattedMessage } from "react-intl";
import "./Error404.css";

const Error404 = () => {
  let history = useHistory();
  return (
    <div className="error404_container">
      <img className="error404_img" src={error404} alt="error 404" />
      <h1>Error 404</h1>
      <span>
        <FormattedMessage
          id="app.error404.txt"
          defaultMessage="The page you are looking for might have been removed had its name changed or is temporarly unavailable."
        ></FormattedMessage>
      </span>
      <div>
        <Button className="error404_button" onClick={() => history.push("./")}>
          <FormattedMessage
            id="app.error404.button"
            defaultMessage="Go to Homepage"
          ></FormattedMessage>
        </Button>
      </div>
    </div>
  );
};

export default Error404;
