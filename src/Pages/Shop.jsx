import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/NavBar/NavBar";
import ShopBanner from "../Components/ShopBanner/ShopBanner";
import ShopCategory from "../Components/ShopCategory/ShopCategory";


const Shop = () => {
    return (
        <div>
            <NavBar />
            <ShopBanner />
            <ShopCategory />
            <Footer />
        </div>
    )
}

export default Shop;