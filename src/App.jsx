import Main from "./components/main.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Rent from "./components/rent.jsx";
import Buy from "./components/buy.jsx";
import MyNav from "./components/subComponents/myNav.jsx";
import PageNotFound from "./components/pageNotFound.jsx";
import EachProperty from "./components/eachProperty.jsx";
import "../src/components/css/home.css";
import Search from "./components/search.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="App">
      <MyNav></MyNav>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/rent" element={<Rent></Rent>}></Route>
        <Route path="/buy" element={<Buy></Buy>}></Route>
        <Route path="/search" element={<Search></Search>}></Route>
        <Route
          path="/property/:externalID"
          element={<EachProperty></EachProperty>}
        ></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
    </div>
  );
}

export default App;
