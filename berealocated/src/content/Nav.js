import { Outlet, Link } from "react-router-dom";
import styles from "./Nav.module.css"
import logo from "./BeRealocated.png";
const Nav = () => {
    return(
        <div>
            <div className={styles.logo}>
            </div>
            <div className={styles.navbar}>
            <Link className={styles.navitem} to="/">My Friends
            </Link>
            <Link className={styles.navitem} to="Explore">Explore
            </Link>
            <Link className={styles.navitem} to="MyTask">My Task
            </Link>
            </div>
            <Outlet/>
        </div>

    )
};
export default Nav;