import { IconSavings } from "../Icons";
import styles from "./savingstatus.module.css";
import { ProgressBar } from "../ProgressBar";

export const SavingStatus = ({ percent }) => {
  return (
    <div className={styles.container}>
      <p>
        <IconSavings />
        Economizar
      </p>
      <ProgressBar percent={percent} />
    </div>
  );
};
