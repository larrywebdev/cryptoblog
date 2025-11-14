import { useState, useRef, useEffect } from "react";
import Stack from "@mui/material/Stack";
import Pagination from "@mui/material/Pagination";

export default function PaginatedCards({
  items,
  itemsPerPage = 13,
  renderCard,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  const shouldScroll = useRef(false);

  const latestNewsRef = useRef(null);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const selectedItems = items.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(items.length / itemsPerPage);

  useEffect(() => {
    if (shouldScroll.current && latestNewsRef.current) {
      latestNewsRef.current.scrollIntoView({ behavior: "smooth" });
      shouldScroll.current = false;
    }
  }, [currentPage]);

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
