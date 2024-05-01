import React from "react";
import style from "./Home.module.css";
import Banner from "./banner/Banner";
import SecOne from "./secone/SecOne";
import Sale from "./sale/Sale";
import Products from "./products/Products";
import Questions from "./questions/Questions";
import News from "./news/News";
import FeedBack from "./feedBack/FeedBack";
function Home() {
  return (
    <div className={style.home}>
      <Banner />
      <SecOne />
      <Sale />
      <Products />
      <Questions />
      <News />
      <FeedBack />
    </div>
  );
}

export default Home;
