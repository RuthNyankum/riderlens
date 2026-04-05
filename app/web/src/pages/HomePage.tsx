import HeroSection from "../components/home/HeroSection";
import ValueProps from "../components/home/ValueProps";
import FeaturedProducts from "../components/home/FeaturedProducts";
import SeeItInAction from "../components/home/SeeItInAction ";
import CategoryCards from "../components/home/CategoryCards";

export default function HomePage() {
  return (
    <main>
      {/* 1. Hero — full-width motorcycle background + CTAs */}
      <HeroSection />

      {/* 2. Category cards — Action Cameras / Motorcycle Mounts / Accessories */}
      <CategoryCards />

      {/* 3. Why RiderLens — 3 value props */}
      <ValueProps />

      {/* 4. Featured Products grid */}
      <FeaturedProducts />

      {/* 5. See It In Action — image gallery */}
      <SeeItInAction />
    </main>
  );
}
