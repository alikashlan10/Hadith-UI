const HadithCard = ({ hadith, score, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 cursor-pointer hover:shadow-md hover:border-emerald-300 transition-all"
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-semibold text-emerald-600">
          {hadith.book_name_en}
        </span>
        <span className="text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded-full">
          Score: {score.toFixed(3)}
        </span>
      </div>

      {/* Hadith text - 2 lines only */}
      <p className="text-gray-700 text-sm line-clamp-2 leading-relaxed">
        {hadith.text_en}
      </p>

      {/* Footer */}
      <div className="mt-3 flex justify-between items-center">
        <span className="text-xs text-gray-400">{hadith.reference}</span>
        <span className="text-xs text-emerald-500 hover:underline">
          Read more →
        </span>
      </div>
    </div>
  );
};

export default HadithCard;