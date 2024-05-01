import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import style from "./FeedBack.module.css";
function FeedBack() {
  return (
    <div className={style.FeedBack}>
      <div className="container">
        <h1 className={style.title}>Отзывы покупателей</h1>
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={style.card}>
              <div className={style.card_header}>
                <img src="" alt="" />
                <div className={style.card_header_box}>
                  <h2 className={style.box_title}>Елена И.</h2>
                  <span className={style.mini}>
                    <h2 className={style.mini_title}>5.0</h2>
                    <div className={style.starBox}>
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                    </div>
                  </span>
                </div>
              </div>
              <p className={style.text}>
                Благодарю за возможность получать лекарства на дом, что во время
                пандемии особенно важно. Ваше отношение к людям отражает слова
                мудрой книги:"Не отказывайся делать добро тем, кто в том
                нуждается, если можешь им помочь". Желаю всем сотрудникам
                здоровья и мирного неба над головой
              </p>
              <a href="" className={style.link}>
                Полный отзыв
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={style.card}>
              <div className={style.card_header}>
                <img src="" alt="" />
                <div className={style.card_header_box}>
                  <h2 className={style.box_title}>Елена И.</h2>
                  <span className={style.mini}>
                    <h2 className={style.mini_title}>5.0</h2>
                    <div className={style.starBox}>
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                    </div>
                  </span>
                </div>
              </div>
              <p className={style.text}>
                Благодарю за возможность получать лекарства на дом, что во время
                пандемии особенно важно. Ваше отношение к людям отражает слова
                мудрой книги:"Не отказывайся делать добро тем, кто в том
                нуждается, если можешь им помочь". Желаю всем сотрудникам
                здоровья и мирного неба над головой
              </p>
              <a href="" className={style.link}>
                Полный отзыв
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={style.card}>
              <div className={style.card_header}>
                <img src="" alt="" />
                <div className={style.card_header_box}>
                  <h2 className={style.box_title}>Елена И.</h2>
                  <span className={style.mini}>
                    <h2 className={style.mini_title}>5.0</h2>
                    <div className={style.starBox}>
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                    </div>
                  </span>
                </div>
              </div>
              <p className={style.text}>
                Благодарю за возможность получать лекарства на дом, что во время
                пандемии особенно важно. Ваше отношение к людям отражает слова
                мудрой книги:"Не отказывайся делать добро тем, кто в том
                нуждается, если можешь им помочь". Желаю всем сотрудникам
                здоровья и мирного неба над головой
              </p>
              <a href="" className={style.link}>
                Полный отзыв
              </a>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className={style.card}>
              <div className={style.card_header}>
                <img src="" alt="" />
                <div className={style.card_header_box}>
                  <h2 className={style.box_title}>Елена И.</h2>
                  <span className={style.mini}>
                    <h2 className={style.mini_title}>5.0</h2>
                    <div className={style.starBox}>
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                    </div>
                  </span>
                </div>
              </div>
              <p className={style.text}>
                Благодарю за возможность получать лекарства на дом, что во время
                пандемии особенно важно. Ваше отношение к людям отражает слова
                мудрой книги:"Не отказывайся делать добро тем, кто в том
                нуждается, если можешь им помочь". Желаю всем сотрудникам
                здоровья и мирного неба над головой
              </p>
              <a href="" className={style.link}>
                Полный отзыв
              </a>
            </div>
          </SwiperSlide>
          <>
            {" "}
            <div className={style.card}>
              <div className={style.card_header}>
                <img src="" alt="" />
                <div className={style.card_header_box}>
                  <h2 className={style.box_title}>Елена И.</h2>
                  <span className={style.mini}>
                    <h2 className={style.mini_title}>5.0</h2>
                    <div className={style.starBox}>
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                      <img src="" alt="" />
                    </div>
                  </span>
                </div>
              </div>
              <p className={style.text}>
                Благодарю за возможность получать лекарства на дом, что во время
                пандемии особенно важно. Ваше отношение к людям отражает слова
                мудрой книги:"Не отказывайся делать добро тем, кто в том
                нуждается, если можешь им помочь". Желаю всем сотрудникам
                здоровья и мирного неба над головой
              </p>
              <a href="" className={style.link}>
                Полный отзыв
              </a>
            </div>
          </>
        </Swiper>
      </div>
    </div>
  );
}

export default FeedBack;
