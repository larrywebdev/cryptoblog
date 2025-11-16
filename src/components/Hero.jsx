import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
// import tNews from "../../top_news.json";
import Header from "./Header";

export default function Hero({ error, topNews }) {
  const [index, setIndex] = useState(0);
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
    <div className="relative h-[600px] w-full overflow-hidden text-white bg-black/90">
      <Header />
      {error ? (
        <div className="text-3xl font-medium text-center mt-40">
          No top news at the moment
        </div>
      ) : (
        <>
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
              <div className="relative z-10 max-w-7xl px-6 text-center">
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
            className="z-200 hidden sm:inline-block absolute left-4 top-1/2 -translate-y-1/2 text-4xl opacity-60 hover:opacity-100 cursor-pointer"
          >
            ‹
          </button>
          <button
            onClick={next}
            className="z-200 hidden sm:inline-block absolute right-4 top-1/2 -translate-y-1/2 text-4xl opacity-60 hover:opacity-100 cursor-pointer"
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
        </>
      )}
    </div>
  );
}
