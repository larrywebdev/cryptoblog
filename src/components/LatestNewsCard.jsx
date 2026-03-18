import { Link } from "react-router-dom";
import { formatDate } from "./FormatDate";

export default function LatestNewsCard({ news }) {
  return (
    <div
      key={news.title}
      className="py-7 grid sm:flex gap-5 border-t border-t-gray-200"
    >
      <div className="flex-3 sm:h-40 xl:h-45 2xl:h-55 lg:mt-2 w-full aspect-[1.5] ">
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
