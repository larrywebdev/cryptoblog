import { Link, useParams } from "react-router-dom";
import newSources from "../../newsSources.json";

export default function NewsList() {
  const { source: urlSourceParam } = useParams();
  const activeSource = urlSourceParam || "coindesk";

  return (
    <>
      <h2
        className="text-4xl font-semibold mb-5 lg:text-center"
        id="latestNews"
      >
        Latest News
      </h2>
      <div className="flex flex-wrap gap-3">
        {newSources.map((source) => {
          const normalized = source.replaceAll(" ", "").toLowerCase();
          const isActive = activeSource === normalized;

          return (
            <Link
              key={source}
              to={source === "CoinDesk" ? "/" : `/${normalized}`}
              className={`inline-block px-3 py-1.5 capitalize border rounded-md transition-all duration-200 ${
                isActive
                  ? "bg-gray-500 text-white border-gray-500 hover:bg-gray-600"
                  : "bg-transparent text-black border-gray-400 hover:bg-gray-100"
              }`}
            >
              {source}
            </Link>
          );
        })}
      </div>
    </>
  );
}
