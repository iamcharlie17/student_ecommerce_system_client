import Category from "../../components/Category";
import FeaturedItem from "../../components/FeaturedItem";
import Footer from "../../components/Footer";
import Header from "../../components/Header";


const HomePage = () => {
    return (
        <div>
            <Header/>
            <Category/>
            <FeaturedItem/>
            <Footer/>
        </div>
    );
};

export default HomePage;