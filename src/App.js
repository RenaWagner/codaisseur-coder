import { Route, Switch } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";
import PostPage from "./pages/PostPage";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/post/:id" component={PostPage}></Route>
      </Switch>
    </div>
  );
}

export default App;
