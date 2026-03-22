import StickyNav from "@/components/StickyNav";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import Funnel from "@/components/Funnel";
import Payouts from "@/components/Payouts";
import Tech from "@/components/Tech";
import PartnerSupport from "@/components/PartnerSupport";
import TopTitles from "@/components/TopTitles";
import TrafficRules from "@/components/TrafficRules";
import Footer from "@/components/Footer";

const Index = () => (
  <div className="min-h-screen bg-background text-foreground">
    <StickyNav />
    <Hero />
    <Benefits />
    <Funnel />
    <Payouts />
    <Tech />
    <PartnerSupport />
    <TopTitles />
    <TrafficRules />
    <Footer />
  </div>
);

export default Index;
