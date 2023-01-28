import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import MovieIcon from "@material-ui/icons/Movie";
import TvIcon from "@material-ui/icons/Tv";
import SearchIcon from "@material-ui/icons/Search";
import { FormattedMessage } from "react-intl";

const useStyles = makeStyles({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0,
    backgroundColor: "var(--azul-oscuro)",
    zIndex: 100,
    color: "white",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const history = useHistory();

  useEffect(() => {
    if (value === 0) history.push("/");
    else if (value === 1) history.push("/movies");
    else if (value === 2) history.push("/series");
    else if (value === 3) history.push("/search");
    else if (value === 4) history.push("/mylist");
  }, [value, history]);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction
        className="navLinks"
        style={{ color: "white" }}
        label={
          <FormattedMessage
            id="app.trending"
            defaultMessage="Trending"
          ></FormattedMessage>
        }
        icon={<WhatshotIcon />}
      />
      <BottomNavigationAction
        className="navLinks"
        style={{ color: "white" }}
        label={
          <FormattedMessage
            id="app.movies"
            defaultMessage="Movies"
          ></FormattedMessage>
        }
        icon={<MovieIcon />}
      />
      <BottomNavigationAction
        className="navLinks"
        style={{ color: "white" }}
        label="TV Series"
        icon={<TvIcon />}
      />
      <BottomNavigationAction
        className="navLinks"
        style={{ color: "white" }}
        label={
          <FormattedMessage
            id="app.search"
            defaultMessage="Search"
          ></FormattedMessage>
        }
        icon={<SearchIcon />}
      />
    </BottomNavigation>
  );
}
