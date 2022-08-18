// import Content from "./components/Content";
// import Header from "./components/header";
import StateCounter from "./components/counter";

import { Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import EditUser from "./pages/editUser";
import AddUser from "./pages/addUser";


function App() {

  return (
    <div className="ui container ">
      {/* <StateCounter /> */}
      {/* <Header />
      <Content /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/addUser" component={AddUser} />
        <Route exact path="/editUser/:id" component={EditUser} />
      </Switch>
    </div>
  );
}

export default App;
