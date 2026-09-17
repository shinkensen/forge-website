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
import { redirect } from "next/navigation";
export default async function Home(
{searchParams}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  
    if ((await searchParams).donate){
      redirect("https://forms.gle/jTACFeQQj9cY3ia68");
    }

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
