import {Link} from "react-router-dom";
import styles from "./Navbar.module.css"

function Navbar() {
    return (
        <ul className={styles.list}>
          <li className={styles.item}><Link to="/">HOME</Link></li>
          <li className={styles.item}><Link to="/empresa">EMPRESA</Link></li>
          <li className={styles.item}><Link to="/contato">CONTATO</Link></li>
        </ul>
    )
}

export default Navbar