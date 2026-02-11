import styles from "./aside.module.css";
import logo from "../../assets/Logo_PoupApp.svg";


export const Aside = () =>{
return (
  <aside className={styles.asside}>
    <img src={logo} alt="logo poupapp " />
    <footer className={styles.footer}>
     Projeto fictício sem fins comerciais.
    </footer>
  </aside>
);
}

