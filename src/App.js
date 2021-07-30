import { useContext } from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";
import MyList from "./Pages/MyList/MyList";
import Error404 from "./Pages/Error404/Error404";
import { langContext } from "./context/langContext";

function App() {
  const idioma = useContext(langContext);
  console.log({ idioma });

  return (
    <BrowserRouter>
      <Header></Header>
      <div className="App">
        <Container>
          <Switch>
            <Route component={Trending} exact path="/"></Route>
            <Route component={Movies} exact path="/movies"></Route>
            <Route component={Series} exact path="/series"></Route>
            <Route component={Search} exact path="/search"></Route>
            <Route component={MyList} exact path="/mylist"></Route>
            <Route component={Error404} path="*"></Route>
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </BrowserRouter>
  );
}

export default App;
