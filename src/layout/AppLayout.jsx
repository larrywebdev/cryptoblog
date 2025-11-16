import { useQuery } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import axios from "axios";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import NewsList from "../components/NewsList";
import Trending from "../components/Trending";
import Spinner from "../components/Spinner";

export default function AppLayout() {
  const {
    data: topNews,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["topNews"],
    queryFn: async () => {
      const res = await axios.get("/api/topNews");
      return res.data;
    },
  });

  if (isLoading) return <Spinner />;
  return (
    <>
      <Hero error={error} topNews={topNews} />
      <div className="grid lg:flex mt-20 max-w-500 mx-auto pb-20 lg:pb-10">
        <div className="flex-4 px-5 sm:px-10">
          <NewsList />
          <Outlet />
        </div>
        <Trending />
      </div>
      <Footer />
    </>
  );
}
