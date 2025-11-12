import { Link } from "react-router-dom";
import twitterTrends from "../../trendingX.json";
export default function TwitterTrends() {
  return twitterTrends.trends.map(({ name, url }) => (
    <Link
      className="font-medium text-blue-600 underline"
      to={url}
      target="_blank"
      rel="noopener noreferrer"
    >
      {name}
    </Link>
  ));
}
