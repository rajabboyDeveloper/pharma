import React, { useRef, useState } from "react";
// Import Swiper React components
import photo from "../../../../assets/images/one-pic.png";
import photoTwo from "../../../../assets/images/two-pic.png";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";
import style from "./News.module.css";
function News() {
  return (
    <div className={style.News}>
      <div className="container">
        <div className={style.content}>
          <h1 className={style.title}>Новости Аптекарьский Магазинъ</h1>
          <a href="" className={style.link}>
            Все новости
          </a>
        </div>
        <Swiper
          slidesPerView={2}
          pagination={{
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={style.box}>
              <img src={photo} className={style.photo} alt="" />
              <div className={style.texbox}>
                <h1 className={style.texbox_title}>Конец пандемии близок?</h1>
                <p className={style.texbox_text}>
                  Мир переживает очередную волну SARS-CoV-2 штамма омикрон.
                  Однако, ученые настроены оптимистично и считают, что конец
                  пандемии уже близок.
                </p>
                <a href="" className={style.texbox_link}>
                  Подробнее
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.box}>
              <img src={photoTwo} className={style.photo} alt="" />
              <div className={style.texbox}>
                <h1 className={style.texbox_title}>Конец пандемии близок?</h1>
                <p className={style.texbox_text}>
                  Мир переживает очередную волну SARS-CoV-2 штамма омикрон.
                  Однако, ученые настроены оптимистично и считают, что конец
                  пандемии уже близок.
                </p>
                <a href="" className={style.texbox_link}>
                  Подробнее
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.box}>
              <img src={photo} className={style.photo} alt="" />
              <div className={style.texbox}>
                <h1 className={style.texbox_title}>Конец пандемии близок?</h1>
                <p className={style.texbox_text}>
                  Мир переживает очередную волну SARS-CoV-2 штамма омикрон.
                  Однако, ученые настроены оптимистично и считают, что конец
                  пандемии уже близок.
                </p>
                <a href="" className={style.texbox_link}>
                  Подробнее
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.box}>
              <img src={photoTwo} className={style.photo} alt="" />
              <div className={style.texbox}>
                <h1 className={style.texbox_title}>Конец пандемии близок?</h1>
                <p className={style.texbox_text}>
                  Мир переживает очередную волну SARS-CoV-2 штамма омикрон.
                  Однако, ученые настроены оптимистично и считают, что конец
                  пандемии уже близок.
                </p>
                <a href="" className={style.texbox_link}>
                  Подробнее
                </a>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default News;
