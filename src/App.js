import { Route, Switch } from "react-router";
import "./App.css";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <Switch>
        <Route component={HomePage}></Route>
      </Switch>
    </div>
  );
}

export default App;
