import React from "react";
import style from "./Questions.module.css";
function Questions() {
  return (
    <div className={style.Questions}>
      <div className="container">
        <div className={style.content}>
          <h1 className={style.title}></h1>
          <p className={style.text}></p>
          <div className={style.inpGroup}>
            <input className={style.name} placeholder="Ваше имя" type="text" />
            <input
              className={style.phone}
              placeholder="+7 900 000 00 00"
              type="number"
            />
          </div>
          <input
            className={style.email}
            placeholder="Введите ваш E-mail"
            type="email"
          />
          <select className={style.select}>
            <option value="">Выбрать отдел магазина</option>
            <option value="">Select</option>
            <option value="">Select</option>
            <option value="">Select</option>
            <option value="">Select</option>
          </select>
          <button type="button" className={style.btn}>
            ЗАДАТЬ ВОПРОС
          </button>
        </div>
      </div>
    </div>
  );
}

export default Questions;
