import ResultsList from "./components/ResultsList";
import useSearch from "./hooks/useSearch";
import SearchBar from "./components/SearchBar";

const App = () => {
  const { results, loading, error, search } = useSearch();

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      
      {/* Title */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-emerald-700 mb-2">
          Hadith - حديث
        </h1>
        <p className="text-gray-400 text-sm">
          Search across thousands of hadiths using AI-powered semantic search
        </p>
      </div>

      {/* Search Bar */}
      <SearchBar onSearch={search} loading={loading} />

      {/* Error */}
      {error && (
        <div className="w-full max-w-2xl mx-auto mt-4 px-4 py-3 bg-red-50 border border-red-200 text-red-600 rounded-xl text-sm">
          {error}
        </div>
      )}

      {/* Results */}
      <ResultsList results={results} />

    </div>
  );
};

export default App;