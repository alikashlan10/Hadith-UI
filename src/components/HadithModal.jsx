const HadithModal = ({ hadith, score, onClose }) => {
  if (!hadith) return null;

  return (
    // Backdrop
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Modal Box */}
      <div
        className="bg-white rounded-2xl shadow-xl w-full max-w-2xl max-h-[80vh] overflow-y-auto p-6"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-emerald-700">
            {hadith.book_name_en}
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        {/* Score */}
        <div className="mb-4">
          <span className="text-xs bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full">
            Relevance Score: {score.toFixed(3)}
          </span>
        </div>

        {/* Arabic Text */}
        <div className="mb-4 bg-gray-50 rounded-xl p-4 text-right">
          <p className="text-gray-500 text-xs mb-1">Arabic</p>
          <p className="text-gray-800 text-base leading-loose font-arabic" dir="rtl">
            {hadith.text_ar}
          </p>
        </div>

        {/* English Text */}
        <div className="mb-4 bg-gray-50 rounded-xl p-4">
          <p className="text-gray-500 text-xs mb-1">English</p>
          <p className="text-gray-800 text-base leading-relaxed">
            {hadith.text_en}
          </p>
        </div>

        {/* Metadata */}
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-gray-400 text-xs">Chapter</p>
            <p className="text-gray-700">{hadith.chapter_name_en}</p>
          </div>
          <div className="bg-gray-50 rounded-xl p-3 col-span-2">
            <p className="text-gray-400 text-xs">Reference</p>
            <p className="text-gray-700">{hadith.reference}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HadithModal;