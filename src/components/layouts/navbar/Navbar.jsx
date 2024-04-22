import React from "react";
import style from "./Navbar.module.css";
import { NavLink } from "react-router-dom";
import logo from "../../../assets/icons/logo.svg";
import basket from "../../../assets/icons/basket.svg";
import burger from "../../../assets/icons/burger.svg";
import user from "../../../assets/icons/user.svg";
import search from "../../../assets/icons/search.svg";
import heart from "../../../assets/icons/heart.svg";

function Navbar() {
  return (
    <div className={style.navbar}>
      <div className="container">
        <ul className={style.item_check}>
          <li className={style.item_check_li}>
            Формат 3 в 1 (аптека, ветеринарная аптека, медицинская техника и
            товары)
          </li>
          <li className={style.item_check_li}>25 лет опыта</li>
          <li className={style.item_check_li}>
            Формацевтическое консультирование
          </li>
          <li className={style.item_check_li}>Быстрая и надежная доставка</li>
        </ul>
        <nav className={style.nav}>
          <NavLink className={style.logo} to="/">
            <img src={logo} alt="" />
          </NavLink>
          <div className={style.search_box}>
            <div className={style.ser}>
              <input
                type="text"
                placeholder="Поиск по названию, производителю, действующему веществу или симптому"
                className={style.search}
              />
              <button className={style.btn}>
                <img src={search} alt="" />
              </button>
            </div>
          </div>
          <NavLink to="" className={style.favorite_link}>
            <img src={heart} alt="" />
            Избранное
          </NavLink>
          <NavLink to="" className={style.favorite_link}>
            <img src={basket} alt="" />
            Корзина
          </NavLink>
          <NavLink to="" className={style.favorite_link}>
            <img src={user} alt="" />
            Войти
          </NavLink>
        </nav>
        <nav className={style.nav_burger}>
          <img src={burger} className={style.bur_photo} alt="" />
          <ul className={style.item}>
            <li className={style.list}>
              <NavLink to="" className={style.link}>
                Интернет-магазин{" "}
              </NavLink>
            </li>
            <li className={style.list}>
              <NavLink to="" className={style.link}>
                Главная{" "}
              </NavLink>
            </li>
            <li className={style.list}>
              <NavLink to="" className={style.link}>
                {" "}
                О компании{" "}
              </NavLink>
            </li>
            <li className={style.list}>
              <NavLink to="" className={style.link}>
                {" "}
                Помощь
              </NavLink>
            </li>
            <li className={style.list}>
              <NavLink to="" className={style.link}>
                {" "}
                Акции{" "}
              </NavLink>
            </li>
            <li className={style.list}>
              <NavLink to="" className={style.link}>
                Новости
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
