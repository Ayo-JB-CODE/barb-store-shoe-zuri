import styles from './BreadCrumb.module.css';
import arrow_icon from '../../assets/breadcrum_arrow.png';
import { itemProducts } from '../../../data';
import ItemSelected from '../ItemSelected/ItemSelected';
import NavBar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

const BreadCrumb = () => {
    return (
        <div>
            <NavBar />
            <div className={styles.breadcrumb_container}>
                Home <img src={arrow_icon} alt="" /> SHOP <img src={arrow_icon} alt="" /> Title <img src={arrow_icon} alt="" /> Name
            </div>
            <ItemSelected />
            <Footer />
        </div>
    )
}

export default BreadCrumb;