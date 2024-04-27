import React from "react";
import style from "./Home.module.css";
import Banner from "./banner/Banner";
function Home() {
  return (
    <div className={style.home}>
      <Banner />
    </div>
  );
}

export default Home;
