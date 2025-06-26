import Navigation from "@/components/sections/Navigation";
import Footer from "@/components/sections/Footer";
import { DPA } from "@/components/sections/DPA";

const DPAPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <DPA />
      <Footer />
    </div>
  );
};

export default DPAPage;