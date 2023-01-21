import { Outlet, Link } from "react-router-dom";
import styles from "./Nav.module.css"
const Nav = () => {
    return(
        <div className={styles.navbar}>
            <div>
            <Link className={styles.navitem} to="/"><h1>Home</h1>
            </Link>
            </div>
            <div >
            <Link className={styles.navitem} to="Explore"><h1>Explore</h1>
            </Link>
            </div>
            <Outlet/>
        </div>

    )
};
export default Nav;