import LatestNewsCard from "./LatestNewsCard";
import PaginatedCards from "./Paginate";

export default function LatestNews() {
  return (
    <PaginatedCards renderCard={(news) => <LatestNewsCard news={news} />} />
  );
}
