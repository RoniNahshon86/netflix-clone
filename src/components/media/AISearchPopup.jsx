import { useState } from "react";
import Button from "../ui/Button";
import { getMovieByAI } from "../../assets/utilities/functions";
import { searchMovies, getMovieDetails } from "../../assets/utilities/api";

const AISearchPopup = ({ isOpen, onClose, onMovieFound }) => {
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError("");

    try {
      const aiResult = await getMovieByAI(prompt);

      if (!aiResult?.title) {
        setError("Could not find a movie recommendation");
        setLoading(false);
        return;
      }

      const searchResult = await searchMovies(aiResult.title);

      if (!searchResult.results?.length) {
        setError(`Could not find "${aiResult.title}" in our database`);
        setLoading(false);
        return;
      }

      const movieDetails = await getMovieDetails(searchResult.results[0].id);

      onMovieFound(movieDetails);
      setPrompt("");
      onClose();
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed z-9999 inset-0 bg-overlay-black-60 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[500px] bg-neutral-gray-850 rounded-lg p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neutral-gray-700 hover:bg-neutral-gray-600 flex items-center justify-center text-xl transition"
        >
          ✕
        </button>

        <div className="flex flex-col gap-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-2">Netflix AI</h2>
            <p className="text-neutral-gray-100">
              Tell me what kind of movie you're in the mood for
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <textarea
              placeholder="e.g., I want a thrilling sci-fi movie with plot twists..."
              className="w-full h-32 p-4 bg-neutral-gray-700 rounded-md text-primary-white placeholder-neutral-gray-200 resize-none focus:outline-none focus:ring-2 focus:ring-primary-red"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              disabled={loading}
            />

            {error && <p className="text-primary-red text-sm">{error}</p>}

            <Button
              type="submit"
              className="w-full"
              size="lg"
              disabled={loading || !prompt.trim()}
            >
              {loading ? "Finding your perfect movie..." : "Find Movie"}
            </Button>
          </form>

          <div className="text-center text-neutral-gray-150 text-sm">
            <p>Try prompts like:</p>
            <p className="text-neutral-gray-100 mt-1">
              "A funny movie for date night" • "Classic 90s action" • "Something
              like Inception"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AISearchPopup;
