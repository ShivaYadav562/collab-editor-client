
function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}) {
  return (
    <div className="mb-7 flex gap-2.5 overflow-x-auto pb-2">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategoryChange(category)}
          className={`
            shrink-0 rounded-full border px-5 py-2.5
            text-xs font-semibold transition-all
            ${
              activeCategory === category
                ? "border-[#308d46] bg-[#308d46] text-white shadow-md shadow-green-900/10"
                : "border-[#dfe3e7] bg-white text-[#58636e] hover:border-[#308d46] hover:text-[#308d46]"
            }
          `}
        >
          {category}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;
