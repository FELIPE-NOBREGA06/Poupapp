import styles from "./progressbar.module.css";

export const ProgressBar = ({ percent }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.filled} style={{ width: `${percent}%` }}></div>
      {percent}%
    </div>
  );
};
