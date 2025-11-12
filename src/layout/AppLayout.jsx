import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NewsList from "../components/NewsList";
import Trending from "../components/Trending";

export default function AppLayout() {
  return (
    <>
      <Hero />
      <div className="grid lg:flex mt-20 max-w-500 mx-auto pb-20">
        <div className="flex-4 px-10">
          <NewsList />
          <Outlet />
        </div>
        <Trending />
      </div>
      <Footer />
    </>
  );
}
