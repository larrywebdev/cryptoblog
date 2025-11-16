import { useState, useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";
import axios from "axios";
import Spinner from "./Spinner";
// import newsData from "../../all_news.json";

export default function PaginatedCards({ renderCard }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 13;
  const shouldScroll = useRef(false);
  const latestNewsRef = useRef(null);

  const { source } = useParams();
  const query = source || "coindesk";

  const {
    data: latestNews,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["latestNews", query],
    queryFn: async () => {
      const res = await axios.get(`/api/latestNews?query=${query}`);
      return res.data.data;
    },
  });

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems =
    latestNews?.slice(startIndex, startIndex + itemsPerPage) || [];
  const totalPages = latestNews
    ? Math.ceil(latestNews.length / itemsPerPage)
    : 0;

  useEffect(() => {
    if (shouldScroll.current && latestNewsRef.current) {
      latestNewsRef.current.scrollIntoView({ behavior: "smooth" });
      shouldScroll.current = false;
    }
  }, [currentPage]);

  if (isLoading) return <Spinner />;
  if (error)
    return (
      <div className="text-lg font-medium text-center my-20">
        No news available...
      </div>
    );

  return (
    <div>
      <div id="latestNews" ref={latestNewsRef} />

      {/* Render cards */}
      <div className="grid gap-4">
        {selectedItems.map((item, index) => (
          <div key={index}>{renderCard(item)}</div>
        ))}
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center mt-4 mb-15 lg:mb-0 space-x-2">
        <Stack spacing={2}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={(e, value) => {
              shouldScroll.current = true;
              setCurrentPage(value);
            }}
            variant="outlined"
            shape="rounded"
          />
        </Stack>
      </div>
    </div>
  );
}
