import Hero from "@/components/Hero/Hero";
import ValueGrid from "@/components/ValueGrid";
import Methodology from "@/components/Methodology";
import FrameworkCards from "@/components/FrameworkCards";
import LabClients from "@/components/LabClients";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-black text-techWhite">
      <Hero />
      <LabClients />
      <ValueGrid />
      <Methodology />
      <FrameworkCards />
      <FinalCTA />
    </div>
  );
}
