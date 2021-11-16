import React from "react";
import styles from "./Avatar.module.scss";
import classNames from "classnames";

// Защо ми дава грешка при импорт в index.js независимо какво импортвам?
// Предната задача я минах с ръчна проверка.
// Никой не ми отговаря в лайв чата.
export default function Avatar({size = 90, url='images/avatar.png', verified=false, style={width: size, height: size}}){

    //https://gitlab.com/boomdotdev/validator/-/jobs/1786567492
    //това е линк към грешката за която говорих
    return(
        <div style={{width: size, height: size}} className={classNames(styles.avatar)}>
            <img className={classNames(styles.image)} src={url}></img>
            <img className={classNames(styles.badge)} src= {verified == true ? "images/verified.svg" : ""}></img>
        </div>
    )
}