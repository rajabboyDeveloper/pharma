import React from "react";
import style from "./Footer.module.css";
import logoone from "../../../assets/icons/logoone.png";
import onee from "../../../assets/icons/onee.png";
import twoo from "../../../assets/icons/twoo.png";
import threee from "../../../assets/icons/threee.png";
import FootMap from "./footmap/FootMap";
import FootForm from "./footform/FootForm";
function Footer() {
  return (
    <div className={style.footer}>
      <FootForm />
      <FootMap />

      <div className="container">
        <div className={style.bigg}>
          <div className={style.father}>
            <a href="">
              <img src={logoone} className={style.logoone} alt="" />
            </a>
            <p className={style.title}>
              г. Тамбов, ул. Советская 22 Время работы: пн-вс 8:00 - 22:00
            </p>
            <p className={style.text}>Мы в соц. сетях:</p>
            <div className={style.boxbig}>
              <div className={style.box}>
                <img src={onee} className={style.onee} alt="" />
              </div>
              <div className={style.boxone}>
                <img src={twoo} className={style.twoo} alt="" />
              </div>
              <div className={style.boxtwo}>
                <img src={threee} className={style.threee} alt="" />
              </div>
            </div>
            <a className={style.phone} href="">
              +74757251410
            </a>
            <p className={style.texttwo}>Заказать обратный звонок</p>
            <a href="" className={style.b}>
              Версия для печати
            </a>
            <p className={style.r}>
              Разработка сайта - Веб студия “Максоком” 2022. Все права защещены
            </p>
          </div>

          <div className={style.three}>
            <h1 className={style.one}>Главная</h1>
            <a href="" className={style.a}>
              Акция <br />
              Новости
            </a>
            <h1 className={style.two}>О компании</h1>
            <a href="" className={style.aa}>
              Реквизиты
            </a>
          </div>
          <div className={style.four}>
            <h1 className={style.oneone}>Помощь</h1>
            <p className={style.k}>
              Как сделать заказ Оплата и бронирование Доставка Политика
              конфиденциальности Разрешительная документация Условия
              дистанционной продажи Обратная связь
            </p>
          </div>
          <div className={style.five}>
            <h1 className={style.twotwo}>Каталог</h1>
            <p className={style.m}>
              Лекарственные препараты Витамины и БАДы Красота и уход
              Планирование семьи Мама и малышь Медицинские изделия
              Ортопедические изделия Медицинская техника Ветеринарная техника
            </p>
          </div>
          <div className={style.six}>
            <h1 className={style.y}>Программа лояльности</h1>
            <a href="" className={style.l}>
              Личный кабинет <br />
              Активировать карту
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
