import { useState } from "react";
import HadithCard from "./HadithCard";
import HadithModal from "./HadithModal";

const ResultsList = ({ results }) => {
  const [selected, setSelected] = useState(null);

  if (!results.length) return null;

  return (
    <div className="w-full max-w-2xl mx-auto mt-6">
      <p className="text-sm text-gray-400 mb-3">{results.length} results found</p>

      <div className="flex flex-col gap-3 overflow-y-auto max-h-[65vh] pr-1">
        {results.map((item, index) => (
          <HadithCard
            key={index}
            hadith={item}
            score={item.score}
            onClick={() => setSelected(item)}
          />
        ))}
      </div>

      {selected && (
        <HadithModal
          hadith={selected}
          score={selected.score}
          onClose={() => setSelected(null)}
        />
      )}
    </div>
  );
};

export default ResultsList;