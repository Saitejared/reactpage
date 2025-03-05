import React from "react";
import Header from "./components/Header";
import Fooditems from "./components/Fooditems";
import TopRestaurants from "./components/TopRestaurants";
import Footer from "./components/Footer";
import ExploreOptions from "./components/ExploreOptions";

function App() {
  return (
    <>
      <Header />
      <Fooditems />
      <TopRestaurants/>
      <ExploreOptions/>
      <Footer/>
    </>
  );
}

export default App;
