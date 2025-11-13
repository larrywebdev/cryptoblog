import { Link } from "react-router-dom";
import { formatDate } from "./FormatDate";
// import { useEffect, useState } from "react";
// import axios from "axios";

export default function LatestNewsCard({ news }) {
  // const { source } = useParams();
  // const [news, setNews] = useState([]);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(true);
  // const query = source || "coindesk";

  // useEffect(() => {
  //   const fetchNews = async () => {
  //     try {
  //       const allNews = await axios.get(`/api/allNews?query=${query}`);
  //       setNews(allNews);
  //     } catch {
  //       setError("Error fetching news");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   // fetchNews();
  // }, [query]);

  return (
    <div
      key={news.title}
      className="py-7 grid sm:flex gap-5 border-b border-b-gray-200"
    >
      <div className="flex-3 sm:h-40 xl:h-48 2xl:h-55 w-full aspect-[1.5] ">
        <Link to={news.url} target="_blank" rel="noreferrer noopener">
          <img
            className="w-full h-full object-cover rounded-lg"
            src={news.thumbnail}
            alt={news.title}
          />
        </Link>
      </div>
      <div className="flex-7">
        <Link
          to={news.url}
          className="text-2xl font-medium hover:underline"
          target="_blank"
          rel="noreferrer noopener"
        >
          {news.title}
        </Link>
        <p>{news.description}</p>
        <p className="text-gray-400">{formatDate(news.createdAt)}</p>
      </div>
    </div>
  );
}
