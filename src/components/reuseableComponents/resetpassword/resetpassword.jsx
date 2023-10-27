import React from 'react';
import styles from "./resetpassword.module.css"

export default function resetpassword() {
  return (
    <div>
      <div className="relative">
        <div className="absolute top-16 w-full ">
          <div className={styles.circle}>
            <img src="./images/schoolboy.png" alt="Image on Circle" />
          </div>
          <img
            src="./images/Polygon 1.png"
            className="tinyimages image1"
            alt="Polygon"
          />
          <img
            src="./images/Frame 100222.png"
            className="tinyimages image2"
            alt="lock"
          />
          <img
            src="./images/Ellipse 4.png"
            className="tinyimages image3"
            alt="eclipse"
          />
          <img
            src="./images/question.png"
            className="tinyimages image4"
            alt="question"
          />
        </div>
      </div>
    </div>
  );
}
