import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router";
import "./App.css";
import Toolbar from "./components/Toolbar";
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import PostPage from "./pages/PostPage";
import { bootstrapLogin } from "./store/auth/actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bootstrapLogin());
  }, [dispatch]);

  return (
    <div>
      <Toolbar></Toolbar>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route path="/post/:id" component={PostPage}></Route>
        <Route path="/login" component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;
