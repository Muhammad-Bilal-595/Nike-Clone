import CustomerReiew from "@/components/CustomerReiew";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import SpecialOffers from "@/components/SpecialOffers";
import Services from "@/components/Services";
import Subscribe from "@/components/Subscribe";
import SuperQuality from "@/components/superQuality";

export default function Home() {
  return (
    <section className="relative ">
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffers />
      <CustomerReiew />
      <Subscribe />
    </section>
  );
}
