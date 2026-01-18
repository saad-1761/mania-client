import Hero from "./_sections/Hero";
import LatestProducts from "./_sections/LatestProducts";
import HowItWorks from "./_sections/HowItWorks";
import WhyMania from "./_sections/WhyMania";
import CTA from "./_sections/CTA";
import Reviews from "./_sections/Reviews";
import Newsletter from "./_sections/Newsletter";
import { title } from "framer-motion/client";

export const metadata ={title:"Home"}

export default function HomePage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-10 space-y-14">
      <Hero />
      <LatestProducts />
      <HowItWorks />
      <WhyMania />
      <CTA />
      <Reviews />
      <Newsletter />
    </div>
  );
}
