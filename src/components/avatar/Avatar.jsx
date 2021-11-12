import React from "react";
import styles from "./Avatar.module.scss";
import classNames from "classnames";

export default function Avatar({size = 90, url='images/avatar.png', verified=false}){
    
    return(
        <div width={size} height={size} className={classNames(styles.avatar)}>
            <img className={classNames(styles.image)} width={size} height={size} src={url}></img>
            <img className={classNames(styles.badge)} src= {verified == true ? "images/verified.svg" : ""}></img>
        </div>
    )
}