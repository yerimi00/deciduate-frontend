import React, { useState } from "react";
import styles from "../css/My.module.css";
import UpdateInfoMenu from "./UpdateInfoMenu";
import MajorIndexDropdown from "./MajorIndexDropdown";
import MajorIndex2Dropdown from "./MajorIndex2Dropdown";


export default function EditInfo() {



  return (
    <div className={styles.page}>
      <div className={styles.infoUpdateContainer}>
        <UpdateInfoMenu />
        <div className={styles.updateContainer}>
          <div className={styles.inputInfo}>
            구분 및 이수 학점 <br /><br />
            <div className={styles.inputInfo2}>
              <MajorIndexDropdown />&nbsp;
              <label><input className={styles.inputInfo3} type="number" /></label></div>
            <br />
            <div className={styles.inputInfo2}>
              <MajorIndex2Dropdown />&nbsp;
              <label><input className={styles.inputInfo3} type="number" /></label></div>
            <br />

            <div className={styles.inputInfo2}>
              <div className={styles.inputInfo4}>실외</div> &nbsp;
              <label><input className={styles.inputInfo3} type="number" /></label></div>
            <br />
            <div className={styles.inputInfo2}>
              <div className={styles.inputInfo4}>교양</div>&nbsp;
              <label><input className={styles.inputInfo3} type="number" /></label></div>
            <br />
            <div className={styles.inputInfo2}>
              <div className={styles.inputInfo4}>교직</div> &nbsp;
              <label><input className={styles.inputInfo3} type="number" /></label></div>
            <br />
            <div className={styles.inputInfo2}>
              <div className={styles.inputInfo4}>자선</div> &nbsp;
              <label><input className={styles.inputInfo3} type="number" /></label></div>
            <br />
          </div>





          <br /><br />
          <button className={styles.Completed}>수정 완료하기</button>

        </div>
      </div>
    </div>


  );
}
