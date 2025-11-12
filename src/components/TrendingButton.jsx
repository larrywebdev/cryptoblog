export default function TrendingButton({
  children,
  setActiveSection,
  activeSection,
}) {
  return (
    <button
      className={`px-3 h-8.5 rounded-sm font-medium cursor-pointer ${
        activeSection === children.toLowerCase()
          ? "bg-gray-600 text-gray-200"
          : "bg-gray-300"
      }`}
      onClick={() => setActiveSection(children.toLowerCase())}
    >
      {children}
    </button>
  );
}
