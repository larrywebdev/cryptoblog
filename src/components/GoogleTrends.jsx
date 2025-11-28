import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { formatDate } from "./FormatDate";
import Spinner from "./Spinner";

export default function GoogleTrends() {
  const {
    data: trendingGoogle,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["trendingGoogle"],
    queryFn: async () => {
      const res = await axios.get("/api/trendingGoogle");
      return res.data.items;
    },
  });
  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div className="text-lg font-medium mx-auto my-20">
        No trends at the moment
      </div>
    );
  return trendingGoogle.map(({ date, news: [firstNews] }) => (
    <div
      className="border-b border-b-gray-300 pb-5 w-full"
      key={firstNews.news_title}
    >
      <Link to={firstNews.url} target="_blank" rel="noopener noreferrer">
        <h3 className="text-lg font-medium hover:underline">
          {firstNews.news_title}
        </h3>
      </Link>
      <p className="text-gray-500">{formatDate(date)}</p>
      <p className="text-blue-500 py-1">{firstNews.source}</p>
    </div>
  ));
}
