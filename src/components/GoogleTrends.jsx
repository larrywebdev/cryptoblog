import { Link } from "react-router-dom";
import googleTrends from "../../trendinggoogle.json";
import { formatDate } from "./FormatDate";
export default function GoogleTrends() {
  return googleTrends.items.map(({ date, news: [firstNews] }) => (
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
