import { Outlet, Link } from "react-router-dom";
import styles from "./Nav.module.css"
const Nav = () => {
    return(
        <div>
            <div className={styles.logo}></div>
            <Link to= "profile"><div className={styles.profile}></div></Link>

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