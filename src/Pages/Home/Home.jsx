import Banner from "../../components/Banner/Banner";
import { useLoaderData} from "react-router-dom";
import Estates from "../../components/Estates/Estates";
import Reviews from "../../components/Reviews/Reviews";
import Blogs from "../../components/Blogs/Blogs";
import { Helmet } from "react-helmet-async";

const Home = () => {
    const estates = useLoaderData();
    return (
        <div>
            <Helmet>
                <title>UrbanDwellings | Home</title>
            </Helmet>
            <Banner></Banner>
            <div className="my-16 space-y-3">
                <h2 className="text-3xl text-center font-semibold">Find Your Ideal Home: <br />Explore Our Listings</h2>
                <p className="text-center max-w-[500px] mx-auto pb-8 opacity-85 ">Browse our diverse real estate listings for homes tailored to your needs and budget. Start your journey to homeownership now.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4">
                    {
                        estates.map(estate=><Estates key={estate.id} estate={estate}></Estates>)
                    }
                </div>
            </div>
            <Blogs></Blogs>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;