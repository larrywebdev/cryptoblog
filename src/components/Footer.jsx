import { FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaArrowUp } from "react-icons/fa";
import { useState, useEffect } from "react";
export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [showTopBtn, setShowTopBtn] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setShowTopBtn(true);
      else setShowTopBtn(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-x-8 gap-y-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">CryptoBlog</h2>
          <p className="text-sm text-gray-400 leading-relaxed">
            Your daily source for crypto news, guides, and market insights.
          </p>
        </div>

        {/* Explore */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Explore</h3>
          <ul className="space-y-2 text-sm">
            {["Home", "News", "Guides", "About"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Resources</h3>
          <ul className="space-y-2 text-sm">
            {["Price Tracker", "Newsletter", "Market Data"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-200"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold mb-3 text-white">Follow Us</h3>
          <div className="flex space-x-4 text-xl">
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-200"
            >
              <FaTelegramPlane />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-800 mt-10 pt-6 text-center text-sm text-gray-500">
        &copy; {currentYear} CryptoBlog. All rights reserved.
      </div>
      {/* Back to Top Button */}
      {showTopBtn && (
        <button
          className="fixed bottom-8 right-8 bg-gray-800 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-colors duration-200"
          onClick={scrollToTop}
          aria-label="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}
