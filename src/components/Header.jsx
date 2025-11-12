import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="relative z-100 md:px-6 md:py-5 py-4 px-2 flex justify-between bg-none border-b border-b-white/20">
      <Link to="/" className="text-2xl font-semibold">
        CryptoBlog
      </Link>
      <nav>
        <div className="flex space-x-3">
          <Link
            to="#"
            className="px-2 py-1 font-medium border border-white text-white rounded-md transition-all duration-200 hover:bg-white/20"
          >
            Sign In
          </Link>

          <Link
            to="#"
            className="px-2 py-1 font-medium bg-white text-black rounded-md transition-all duration-200 hover:bg-gray-100"
          >
            Sign Up
          </Link>
        </div>
      </nav>
    </div>
  );
}
