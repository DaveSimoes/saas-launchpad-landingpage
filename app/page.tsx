import NavBar from "@/components/navbar";
import Hero from "@/components/hero";
import Partners from "@/components/partners";
import Pricing from "@/components/pricing";
import Faq from "@/components/faq";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <main className="flex flex-col min-h-dvh">
      <NavBar />
      <Hero />
      <Partners />
      <Pricing />
      <Faq />
      <Footer />
    </main>
  );
}
