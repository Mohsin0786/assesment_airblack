import PropTypes from "prop-types";
import styles from "./container-form.module.css";

const ContainerForm = ({ className = "" }) => {
  return (
    <>
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.fillTheFormBelowToEnquireWrapper}>
        <b className={styles.fillTheForm}>Fill the form below to enquire</b>
      </div>
      <div className={styles.form}>
        <div className={styles.frameGroup}>
          <div className={styles.enterYourNameParent}>
            <div className={styles.enterYourName}>*Enter your name</div>
              <input type="text" className={styles.input} ></input>
          </div>
          <div className={styles.enterYourNameParent}>
            <div className={styles.enterYourName}>
              *Enter your WhatsApp Number
            </div>
            <div className={styles.inputParent}>
              <select id="cars"  className={styles.input1}>
              <option value="+91">+91</option>
            </select>
              <input type="text" className={styles.input2} placeholder="Eg. 0000000000" />
            </div>
          </div>
          <div className={styles.enterYourNameParent}>
            <div className={styles.enterYourName}>*Select your profession</div>
              <select className={styles.input3}>
              <option value="" disabled selected>Choose the most relevent option</option>
              <option value="Frontend-Engineer">Frontend-Engineer</option>
          </select>
          </div>
          <div className={styles.enterYourNameParent}>
            <div className={styles.enterYourName}>*Select your goal</div>
              <select className={styles.input3}>
              <option value="" disabled selected>Choose the most relevent option</option>
              <option value="Develop-my-skills">Develop-my-skills</option>
          </select>
          </div>
          <div className={styles.enterYourNameParent}>
            <div className={styles.enterYourName}>*Select your city</div>
            <select className={styles.input3}>
              <option value="" disabled selected>Choose the most relevent option</option>
              <option value="Gurgaon">Gurgaon</option>
          </select>
          </div>
        </div>
        <div className={styles.divframerZlvey9}>
          <div className={styles.divframer923v64}>
            <div className={styles.p}>
              <b className={styles.submit}>Submit</b>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

ContainerForm.propTypes = {
  className: PropTypes.string,
};

export default ContainerForm;
