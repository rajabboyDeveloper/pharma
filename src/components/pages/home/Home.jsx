import React from "react";
import style from "./Home.module.css";
import Banner from "./banner/Banner";
import SecOne from "./secone/SecOne";
function Home() {
  return (
    <div className={style.home}>
      <Banner />
      <SecOne/>
    </div>
  );
}

export default Home;
