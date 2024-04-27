import React from "react";
import style from "./FootForm.module.css";
import img from "../../../../assets/icons/img.png";
function FootForm() {
  return (
    <div className={style.form}>
      <div className="container">
        <div className={style.box}>
          <img src={img} className={style.img} alt="" />
          <div className={style.in}>
            <h1 className={style.title}>
              Подпишитесь и получайте лучшие предложения первыми!
            </h1>
            <div className={style.inp_group}>
              <input
                type="text"
                placeholder="Ваш email"
                className={style.search}
              />
              <button className={style.btn}>Подписаться</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FootForm;
