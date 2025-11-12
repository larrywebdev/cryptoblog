import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import topNews from "../../top_news.json";
import axios from "axios";
import { Link } from "react-router-dom";
import Header from "./Header";

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const topNews = await axios.get("/api/topNews");
        setNews(topNews);
      } catch {
        setError("Error fetching news");
      } finally {
        setLoading(false);
      }
    };
    // fetchNews();
  }, []);
  // Auto-play

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((i) => (i + 1) % topNews.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [index]);

  const next = () => setIndex((i) => (i + 1) % topNews.length);
  const prev = () => setIndex((i) => (i - 1 + topNews.length) % topNews.length);

  return (
    <div className="relative h-[600px] w-full overflow-hidden text-white">
      <Header />
      <AnimatePresence>
        <motion.div
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          style={{
            backgroundImage: `url(${topNews[index].thumbnail})`,
          }}
          className="absolute inset-0 bg-cover bg-center bg-no-repeat flex items-center justify-center"
        >
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Text */}
          <div className="relative z-10 max-w-2xl px-6 text-center">
            <Link
              to={topNews[index].url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <h1 className="text-4xl sm:text-6xl font-bold">
                {topNews[index].title}
              </h1>
            </Link>
            <p className="mt-4 text-lg sm:text-xl text-gray-200">
              {topNews[index].description}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={prev}
        className="hidden sm:inline-block absolute left-4 top-1/2 -translate-y-1/2 text-4xl opacity-60 hover:opacity-100 cursor-pointer"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="hidden sm:inline-block absolute right-4 top-1/2 -translate-y-1/2 text-4xl opacity-60 hover:opacity-100 cursor-pointer"
      >
        ›
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {topNews.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-3 w-3 rounded-full cursor-pointer ${
              i === index ? "bg-white" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
