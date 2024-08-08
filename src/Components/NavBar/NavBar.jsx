import styles from './NavBar.module.css';
import cart_icon from '../../assets/cart_icon.png';
import user_icon from '../../assets/user-icon.svg';


const NavBar = () => {
    return (
        <div className={styles.nav_bar}>
            <div className={styles.nav_logo}>
                <a href="/">BARB-STORE</a>
            </div>
            <div className={styles.nav_menus}>
                <a href="/">Home</a>
                <a href="/Shop">Shop</a>
                <a href="/Contact">Contact</a>
            </div>
            <div className={styles.login_n_cart}>
                <div className={styles.nav_login}>
                    <img src={user_icon} alt="user_icon" />
                    <a href="#">Login</a>
                </div>
                <div className={styles.cart_icon}>
                    <img src={cart_icon} alt="cart_icon" />
                </div>

            </div>
        </div>
    )
}

export default NavBar;