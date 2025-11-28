import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="relative z-100 md:px-6 md:py-5 py-4 px-2 flex justify-between bg-none border-b border-b-white/20">
      <Link to="/" className="text-2xl font-semibold">
        BlockBrief
      </Link>
    </div>
  );
}
