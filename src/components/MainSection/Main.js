import React from 'react'
import styles from "./main.module.css"

export default function Main() {
    return (
        <div className={styles.main_Wrapper}>
            <h1 className={styles.main_heading}>Runner's Workout</h1>

            <div className={styles.img_Container}>
                <div className={styles.imgBox}>
                    <img src="https://images.unsplash.com/photo-1541600383005-565c949cf777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="gym" />
                    <span>Image Title</span>
                </div>
                <div className={styles.imgBox}>
                    <img src="https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="gym" />
                    <span>Image Title</span>
                </div>
                <div className={styles.imgBox}>
                    <img src="https://images.unsplash.com/photo-1631775237267-a865f351e5a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80" alt="gym" />
                    <span>Image Title</span>
                </div>

            </div>



        </div>
    )
}
