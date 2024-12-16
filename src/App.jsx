import Feature from "./components/Feature";
import Filter from "./components/Filter";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function App() {
    return <>
        <Navbar />
        <Hero />
        <div className="filter-feature-section" id="featureServiceSection">
            <Filter />
            <Feature />
        </div>
    </>
}