import { IconSearch } from "../Icons";
import styles from "./SearchInput.module.css";

export const SearchInput = (props) => {
return (
  <div className={styles.container}>
    <IconSearch />
    <inpit className={styles.input} {...props}/>
  </div>
);
}