import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
// import twitterTrends from "../../trendingX.json";

export default function TwitterTrends() {
  const {
    data: trendingX,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trendingX"],
    queryFn: async () => {
      const res = await axios.get("/api/trendingX");
      return res.data.trends;
    },
  });

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div className="text-lg font-medium mx-auto my-20">
        No trends at the moment
      </div>
    );

  return trendingX.map(({ name, url }) => (
    <Link
      key={name}
      className="font-medium text-blue-600 underline"
      to={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </Link>
  ));
}
