import LatestNewsCard from "./LatestNewsCard";
import PaginatedCards from "./Paginate";
import newsData from "../../all_news.json";

export default function LatestNews() {
  return (
    <PaginatedCards
      items={newsData.data}
      renderCard={(news) => <LatestNewsCard news={news} />}
    />
  );
}
