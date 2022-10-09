import React from 'react'
import styles from "./Navbar.module.css"
import { menuItems } from "./MenuItems"

export default function Navbar() {
    console.log(menuItems)
    return (
        <div className={styles.Navbar_Wrapper}>
            <span className={styles.navbar_Logo}>HF </span>

            <div className={styles.Navbar_parent}>
                <ul className={styles.Navbar_Item}>
                    {menuItems.map((menu, index) => (<span key={index} className={menu} > {menu.icon} {menu.title}</span>))}
                </ul>
            </div>

            <button className={styles.login_btn}><i className="fas fa-user"></i> Login </button>
        </div>
    )
}
