import React from "react";
import style from "./Footer.module.css";
import logoone from "../../../assets/icons/logoone.png";
import onee from "../../../assets/icons/onee.png";
import twoo from "../../../assets/icons/twoo.png";
import threee from "../../../assets/icons/threee.png";
import FootMap from "./footmap/FootMap";
function Footer() {
  return (
    <div className={style.footer}>
      <div className="container">
        <FootMap />
        <div className={style.father}>
          <div className={style.box}>
            <img src={logoone} alt="" />
            <p className={style.text}>
              г. Тамбов, ул. Советская 22 Время работы: пн-вс 8:00 - 22:00
            </p>
            <p className={style.one}>Мы в соц. сетях:</p>
            <div className={style.boxone}>
              <div className={style.boxoneee}>
                <img className={style.onee} src={onee} alt="" />
              </div>
              <div className={style.twooo}>
                <img src={twoo} className={style.twoo} alt="" />
              </div>
              <div className={style.threeee}>
                <img src={threee} className={style} alt="" />
              </div>
            </div>
            <p className={style.tel}>+7 475 725 14 10</p>
            <p className={style.z}>Заказать обратный звонок</p>
            <p className={style.ver}>Версия для печати</p>
            <p className={style.r}>
              Разработка сайта - Веб студия “Максоком” 2022. Все права защещены
            </p>
          </div>
          <div className={style.big}>
            <div className={style.boxtwo}>
              <h1 className={style.title}>Главная</h1>
              <p className={style.texta}> Акция Новости</p>
              <h1 className={style.titleo}>О компании</h1>
              <p className={style.textr}>Реквизиты</p>
            </div>
            <div className={style.boxthreeone}>
              <h1 className={style.titleb}>Помощь</h1>
              <p className={style.textk}>
                Как сделать заказ Оплата и бронирование Доставка Политика
                конфиденциальности Разрешительная документация Условия
                дистанционной продажи Обратная связь
              </p>
            </div>
            <div className={style.boxfour}>
              <h1 className={style.catalog}>Каталог</h1>
              <p className={style.catalogp}>
                Лекарственные препараты Витамины и БАДы Красота и уход
                Планирование семьи Мама и малышь Медицинские изделия
                Ортопедические изделия Медицинская техника Ветеринарная техника
              </p>
            </div>
            <div className={style.boxfive}>
              <h1 className={style.program}>Программа лояльности</h1>
              <p className={style.programp}>
                Личный кабинет Активировать карту
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
