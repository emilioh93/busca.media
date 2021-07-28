import { Container } from "@material-ui/core";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNav";
import Trending from "./Pages/Trending/Trending";
import Movies from "./Pages/Movies/Movies";
import Series from "./Pages/Series/Series";
import Search from "./Pages/Search/Search";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <div className="App">
        <Container>
          <Switch>
            <Route component={Trending} exact path="/"></Route>
            <Route component={Movies} path="/movies"></Route>
            <Route component={Series} path="/series"></Route>
            <Route component={Search} path="/search"></Route>
          </Switch>
        </Container>
      </div>
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </BrowserRouter>
  );
}

export default App;
