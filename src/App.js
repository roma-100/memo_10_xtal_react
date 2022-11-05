import React from "react";
import "./App.scss";
import "./assets/css/index.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import Xtest from "./components/Xtest/Xtest2";
import {
  BrowserRouter,
  Switch,
  Route,
  Routes,
  Link,
  NavLink,
} from "react-router-dom";
import GenModelsHelloContainer from "./components/GenModelsHello/GenModelsHelloContainer";

function App(props) {
  //debugger
  return (
    <BrowserRouter basename="/" >
      <div className="app-wrapper">
        <Header />

        <main className="maincontent">
          <Routes>
            {/* profile/:userId? опциональный */}
            <Route
              /* path="/gen_models_hello" */
              path="/"
              element={<GenModelsHelloContainer />}
            />
                        <Route
              path="/gen_models_hello"
              element={<GenModelsHelloContainer />}
            />
            <Route path="/xtest" element={<Xtest />} />
            <Route
              path="/*"
              element={<GenModelsHelloContainer />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

//new page

const News = () => {
  return <h2>Here's News</h2>;
};
const Hello = () => {
  return <h2>Here's Helloooo!!!! I'm in processing...</h2>;
};
const NotFound = () => {
  return <h2>Error 404! Not Found Page</h2>;
};
const ComingSoon = () => {
  return <h2>This Page has not ready yet...</h2>;
};
export default App;
