import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import OrderList from "./order/OrderList";
import OrderEdit from "./order/OrderEdit";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export function App() {
  return (
    <div className="App">
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <title className="navbar-brand" href="#">
            Shop
          </title>
          <ul className="navbar-nav mr-auto">
            <li>
              <Link to={"/"} className="nav-link">
                {" "}
                Home{" "}
              </Link>
            </li>
            <li>
              <Link to={"/list"} className="nav-link">
                Orders
              </Link>
            </li>
          </ul>
        </nav>
        <section>
          <Route exact path="/" component={OrderList} />
          <Route path="/list" component={OrderList} />
          <Route path="/edit/:id" component={OrderEdit} />
        </section>
      </Router>
    </div>
  );
}
export default App;
