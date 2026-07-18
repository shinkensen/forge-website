import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Mission from "@/components/Mission";
import Programs from "@/components/Programs";
import Roadmap from "@/components/Roadmap";
import Budget from "@/components/Budget";
import Team from "@/components/Team";
import Join from "@/components/Join";
import Sponsor from "@/components/Sponsor";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Mission />
      <Programs />
      <Roadmap />
      <Budget />
      <Team />
      <Join />
      <Sponsor />
      <Footer />
    </main>
  );
}
