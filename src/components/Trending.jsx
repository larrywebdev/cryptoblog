import { useState } from "react";
import TwitterTrends from "./TwitterTrends";
import GoogleTrends from "./GoogleTrends";
import TrendingButton from "./TrendingButton";

export default function Trending() {
  const [activeSection, setActiveSection] = useState("google");

  const renderContent = () => {
    switch (activeSection) {
      case "twitter":
        return <TwitterTrends />;
      case "google":
        return <GoogleTrends />;
      default:
        return <GoogleTrends />;
    }
  };

  return (
    <div className="lg:sticky lg:top-2 lg:h-[calc(100vh-20px)] flex-1 bg-gray-200 lg:rounded-md ps-5 pe-1.5 py-4 ">
      <div className="overflow-auto pe-2 h-full custom-scrollbar">
        <h2 className="text-2xl font-semibold">Trending</h2>
        <div className="flex gap-3 mt-5">
          <TrendingButton
            setActiveSection={setActiveSection}
            activeSection={activeSection}
          >
            Google
          </TrendingButton>
          <TrendingButton
            setActiveSection={setActiveSection}
            activeSection={activeSection}
          >
            Twitter
          </TrendingButton>
        </div>
        <div className="flex flex-wrap gap-6 mt-5">{renderContent()}</div>
      </div>
    </div>
  );
}
