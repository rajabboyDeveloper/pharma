import React from "react";
import style from "./SecOne.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import imgheart from "../../../../assets/images/imgheart.svg";
import imgpill from "../../../../assets/images/imgpill.png";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

function SecOne() {
  return (
    <div className={style.SecOne}>
      <div className="container">
        <h1 className={style.title}>Сезонные товары</h1>

        <Swiper
          slidesPerView={5}
          spaceBetween={10}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, FreeMode, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className={style.son}>
              <div className={style.one}>
                <div className={style.onee}>
                  <img src={imgheart} className={style.imgheart} alt="" />
                  <p className={style.cash}>В наличии</p>
                </div>
                <img src={imgpill} className={style.pill} alt="" />
                <h1 className={style.titleone}>Вольтарен эмуногель 1% </h1>
                <p className={style.p}>
                  Производитель: NOVARTIS PHARMA Объем: 100 г Выпуск: гель
                </p>
                <p className={style.price}>428 ₽</p>
                <div className={style.btn_group}>
                  <div className={style.plus_box}>
                    <span className={style.plus}>+</span>
                    <p className={style.calc}>1</p>
                    <span className={style.minus}>-</span>
                  </div>
                  <button className={style.btn}>в корзину </button>
                </div>
                <div className={style.dop}>
                  <h2 className={style.dop_title}>Доступна доставка</h2>
                  <p className={style.dop_text}>
                    Доставим по указанному адресу в ближайшее время
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.son}>
              <div className={style.one}>
                <div className={style.onee}>
                  <img src={imgheart} className={style.imgheart} alt="" />
                  <p className={style.cash}>В наличии</p>
                </div>
                <img src={imgpill} className={style.pill} alt="" />
                <h1 className={style.titleone}>Вольтарен эмуногель 1% </h1>
                <p className={style.p}>
                  Производитель: NOVARTIS PHARMA Объем: 100 г Выпуск: гель
                </p>
                <p className={style.price}>428 ₽</p>
                <button className={style.btn}>в корзину </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.son}>
              <div className={style.one}>
                <div className={style.onee}>
                  <img src={imgheart} className={style.imgheart} alt="" />
                  <p className={style.cash}>В наличии</p>
                </div>
                <img src={imgpill} className={style.pill} alt="" />
                <h1 className={style.titleone}>Вольтарен эмуногель 1% </h1>
                <p className={style.p}>
                  Производитель: NOVARTIS PHARMA Объем: 100 г Выпуск: гель
                </p>
                <p className={style.price}>428 ₽</p>
                <button className={style.btn}>в корзину </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.son}>
              <div className={style.one}>
                <div className={style.onee}>
                  <img src={imgheart} className={style.imgheart} alt="" />
                  <p className={style.cash}>В наличии</p>
                </div>
                <img src={imgpill} className={style.pill} alt="" />
                <h1 className={style.titleone}>Вольтарен эмуногель 1% </h1>
                <p className={style.p}>
                  Производитель: NOVARTIS PHARMA Объем: 100 г Выпуск: гель
                </p>
                <p className={style.price}>428 ₽</p>
                <button className={style.btn}>в корзину </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.son}>
              <div className={style.one}>
                <div className={style.onee}>
                  <img src={imgheart} className={style.imgheart} alt="" />
                  <p className={style.cash}>В наличии</p>
                </div>
                <img src={imgpill} className={style.pill} alt="" />
                <h1 className={style.titleone}>Вольтарен эмуногель 1% </h1>
                <p className={style.p}>
                  Производитель: NOVARTIS PHARMA Объем: 100 г Выпуск: гель
                </p>
                <p className={style.price}>428 ₽</p>
                <button className={style.btn}>в корзину </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.son}>
              <div className={style.one}>
                <div className={style.onee}>
                  <img src={imgheart} className={style.imgheart} alt="" />
                  <p className={style.cash}>В наличии</p>
                </div>
                <img src={imgpill} className={style.pill} alt="" />
                <h1 className={style.titleone}>Вольтарен эмуногель 1% </h1>
                <p className={style.p}>
                  Производитель: NOVARTIS PHARMA Объем: 100 г Выпуск: гель
                </p>
                <p className={style.price}>428 ₽</p>
                <button className={style.btn}>в корзину </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.son}>
              <div className={style.one}>
                <div className={style.onee}>
                  <img src={imgheart} className={style.imgheart} alt="" />
                  <p className={style.cash}>В наличии</p>
                </div>
                <img src={imgpill} className={style.pill} alt="" />
                <h1 className={style.titleone}>Вольтарен эмуногель 1% </h1>
                <p className={style.p}>
                  Производитель: NOVARTIS PHARMA Объем: 100 г Выпуск: гель
                </p>
                <p className={style.price}>428 ₽</p>
                <button className={style.btn}>в корзину </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.son}>
              <div className={style.one}>
                <div className={style.onee}>
                  <img src={imgheart} className={style.imgheart} alt="" />
                  <p className={style.cash}>В наличии</p>
                </div>
                <img src={imgpill} className={style.pill} alt="" />
                <h1 className={style.titleone}>Вольтарен эмуногель 1% </h1>
                <p className={style.p}>
                  Производитель: NOVARTIS PHARMA Объем: 100 г Выпуск: гель
                </p>
                <p className={style.price}>428 ₽</p>
                <button className={style.btn}>в корзину </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.son}>
              <div className={style.one}>
                <div className={style.onee}>
                  <img src={imgheart} className={style.imgheart} alt="" />
                  <p className={style.cash}>В наличии</p>
                </div>
                <img src={imgpill} className={style.pill} alt="" />
                <h1 className={style.titleone}>Вольтарен эмуногель 1% </h1>
                <p className={style.p}>
                  Производитель: NOVARTIS PHARMA Объем: 100 г Выпуск: гель
                </p>
                <p className={style.price}>428 ₽</p>
                <button className={style.btn}>в корзину </button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={style.son}>
              <div className={style.one}>
                <div className={style.onee}>
                  <img src={imgheart} className={style.imgheart} alt="" />
                  <p className={style.cash}>В наличии</p>
                </div>
                <img src={imgpill} className={style.pill} alt="" />
                <h1 className={style.titleone}>Вольтарен эмуногель 1% </h1>
                <p className={style.p}>
                  Производитель: NOVARTIS PHARMA Объем: 100 г Выпуск: гель
                </p>
                <p className={style.price}>428 ₽</p>
                <button className={style.btn}>в корзину </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default SecOne;
