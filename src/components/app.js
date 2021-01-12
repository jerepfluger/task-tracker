import React from 'react';
import {BrowserRouter} from "react-router-dom";
import Header from "./header";
import Routes from "../routes/routes";
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
          <Header/>
          <div className="main-container">
            <Routes/>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
