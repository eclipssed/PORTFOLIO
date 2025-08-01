import Header from "@/components/Header";
import About from "@/components/About";
import Services from "@/components/Services";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="">
      <Header />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}
