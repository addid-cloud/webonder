import { Divisi } from "@/components/Divisi";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import { Misi } from "@/components/Misi";
import Navbar from "@/components/Navbar";
import { Visi } from "@/components/Visi";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Visi />
      <Misi />
      <Divisi />
      <Footer />
    </>
  );
}
