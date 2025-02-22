import NavBar from "../partials/NavBar";
import HomePage from "../../../pages/HomePage";
import FeaturesPage from "../../../pages/FeaturesPage";
import AboutPage from "../../../pages/AboutPage";
import PricingPage from "../../../pages/PricingPage";
function MainLayout() {
  return (
    <>
      <main className="font-montserrat">
        <NavBar />
        <HomePage />
        <FeaturesPage />
        <AboutPage />
        <PricingPage />
      </main>
    </>
  );
}

export default MainLayout;
