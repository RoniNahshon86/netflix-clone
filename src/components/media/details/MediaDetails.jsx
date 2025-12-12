import React, { useEffect, useState } from "react";
import PlayBtn from "../../ui/PlayBtn";
import VideoPlayer from "../../ui/VideoPlayer";
import { getMovieDetails } from "../../../assets/utilities/api";

const MediaDetails = ({ isOpen = false, closePopup, data }) => {
  const [fullData, setFullData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (isOpen && data?.id) {
      setLoading(true);
      setFullData(null);
      setIsPlaying(false);

      getMovieDetails(data.id)
        .then((result) => {
          setFullData(result);
          setLoading(false);
        })
        .catch((error) => {
          console.error(error);
          setLoading(false);
        });
    }
  }, [isOpen, data?.id]);

  if (!isOpen) return null;

  if (loading || !fullData) {
    return (
      <div className="fixed z-9999 inset-0 bg-overlay-black-60 flex items-center justify-center">
        <div className="text-primary-white text-xl">Loading...</div>
      </div>
    );
  }

  const backdropUrl =
    "https://media.themoviedb.org/t/p/w1280" + fullData.backdrop_path;
  const logoUrl = fullData.images?.logos?.[0]?.file_path
    ? "https://media.themoviedb.org/t/p/w500" +
      fullData.images.logos[0].file_path
    : null;

  const year = fullData.release_date?.split("-")[0];
  const hours = Math.floor((fullData.runtime || 0) / 60);
  const minutes = (fullData.runtime || 0) % 60;
  const duration = `${hours}h ${minutes}m`;

  const director = fullData.credits?.crew?.find(
    (person) => person.job === "Director"
  );
  const writers = fullData.credits?.crew
    ?.filter((person) => person.job === "Writer")
    .slice(0, 3);
  const mainCast = fullData.credits?.cast?.slice(0, 15);

  const trailerKey = fullData.videos?.results?.find(
    (v) => v.type === "Trailer"
  )?.key;

  return (
    <>
      <VideoPlayer
        isOpen={isPlaying}
        onClose={() => setIsPlaying(false)}
        videoKey={trailerKey}
        title={fullData.title}
      />

      <div
        className="fixed z-9999 inset-0 bg-overlay-black-60 flex items-center justify-center py-8"
        onClick={closePopup}
      >
        <article
          className="relative w-[90vw] max-w-[850px] max-h-[90vh] overflow-y-auto rounded-lg bg-neutral-gray-850 scrollbar-hide"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Hero Section */}
          <div className="relative">
            <img
              src={backdropUrl}
              alt={fullData.title}
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-t from-neutral-gray-850 via-transparent to-transparent" />

            {/* Close Button */}
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 w-10 h-10 rounded-full bg-neutral-gray-850 hover:bg-neutral-gray-700 flex items-center justify-center text-xl transition"
            >
              ✕
            </button>

            {/* Logo or Title */}
            <div className="absolute bottom-8 left-8 right-8">
              {logoUrl ? (
                <img
                  src={logoUrl}
                  alt={fullData.title}
                  className="max-h-24 max-w-[300px] mb-4"
                />
              ) : (
                <h1 className="text-4xl font-bold mb-4">{fullData.title}</h1>
              )}

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                <PlayBtn
                  onClick={() => setIsPlaying(true)}
                  disabled={!trailerKey}
                />
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8">
            <div className="flex gap-8">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4 text-sm">
                  {fullData.vote_average != null && (
                    <span className="text-secondary-green font-semibold">
                      {fullData.vote_average.toFixed(2)} Rating
                    </span>
                  )}
                  <span className="text-neutral-gray-100">{year}</span>
                  <span className="border border-neutral-gray-200 px-1.5 py-0.5 text-xs text-neutral-gray-100">
                    HD
                  </span>
                  <span className="text-neutral-gray-100">{duration}</span>
                </div>

                {/* Tagline */}
                {fullData.tagline && (
                  <p className="text-neutral-gray-100 italic mb-4">
                    "{fullData.tagline}"
                  </p>
                )}

                {/* Overview */}
                <p className="text-neutral-gray-10 leading-relaxed">
                  {fullData.overview}
                </p>
              </div>

              {/* Credits */}
              <div className="w-[200px] text-sm space-y-3">
                {mainCast && mainCast.length > 0 && (
                  <div>
                    <span className="text-neutral-gray-150">Cast: </span>
                    <span className="text-neutral-gray-10">
                      {mainCast
                        .slice(0, 4)
                        .map((actor) => actor.name)
                        .join(", ")}
                      {mainCast.length > 4 && (
                        <span className="text-neutral-gray-150 italic">
                          , more
                        </span>
                      )}
                    </span>
                  </div>
                )}

                {fullData.genres && fullData.genres.length > 0 && (
                  <div>
                    <span className="text-neutral-gray-150">Genres: </span>
                    <span className="text-neutral-gray-10">
                      {fullData.genres.map((g) => g.name).join(", ")}
                    </span>
                  </div>
                )}

                {director && (
                  <div>
                    <span className="text-neutral-gray-150">Director: </span>
                    <span className="text-neutral-gray-10">
                      {director.name}
                    </span>
                  </div>
                )}

                {writers && writers.length > 0 && (
                  <div>
                    <span className="text-neutral-gray-150">Writers: </span>
                    <span className="text-neutral-gray-10">
                      {writers.map((w) => w.name).join(", ")}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Trailer Section */}
            {trailerKey && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Trailer</h3>
                <div
                  className="aspect-video w-full max-w-[500px] rounded-lg overflow-hidden cursor-pointer"
                  onClick={() => setIsPlaying(true)}
                >
                  <iframe
                    src={`https://www.youtube.com/embed/${trailerKey}`}
                    title="Trailer"
                    className="w-full h-full pointer-events-none"
                  />
                </div>
              </div>
            )}

            {/* Cast Section */}
            {mainCast && mainCast.length > 0 && (
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4">Cast</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
                  {mainCast.map((actor) => (
                    <div key={actor.id} className="text-center">
                      {actor.profile_path ? (
                        <img
                          src={`https://media.themoviedb.org/t/p/w185${actor.profile_path}`}
                          alt={actor.name}
                          className="w-full aspect-square object-cover rounded-md mb-2"
                        />
                      ) : (
                        <div className="w-full aspect-square bg-neutral-gray-700 rounded-md mb-2 flex items-center justify-center">
                          <span className="text-4xl text-neutral-gray-350">
                            ?
                          </span>
                        </div>
                      )}
                      <p className="text-sm font-medium truncate">
                        {actor.name}
                      </p>
                      <p className="text-xs text-neutral-gray-150 truncate">
                        {actor.character}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* About Section */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">
                About {fullData.title}
              </h3>
              <div className="space-y-2 text-sm">
                {director && (
                  <p>
                    <span className="text-neutral-gray-150">Director: </span>
                    <span className="text-neutral-gray-10">
                      {director.name}
                    </span>
                  </p>
                )}

                {mainCast && mainCast.length > 0 && (
                  <p>
                    <span className="text-neutral-gray-150">Cast: </span>
                    <span className="text-neutral-gray-10">
                      {mainCast.map((a) => a.name).join(", ")}
                    </span>
                  </p>
                )}

                {fullData.genres && fullData.genres.length > 0 && (
                  <p>
                    <span className="text-neutral-gray-150">Genres: </span>
                    <span className="text-neutral-gray-10">
                      {fullData.genres.map((g) => g.name).join(", ")}
                    </span>
                  </p>
                )}

                {fullData.production_companies &&
                  fullData.production_companies.length > 0 && (
                    <p>
                      <span className="text-neutral-gray-150">
                        Production:{" "}
                      </span>
                      <span className="text-neutral-gray-10">
                        {fullData.production_companies
                          .map((c) => c.name)
                          .join(", ")}
                      </span>
                    </p>
                  )}

                {fullData.origin_country &&
                  fullData.origin_country.length > 0 && (
                    <p>
                      <span className="text-neutral-gray-150">Country: </span>
                      <span className="text-neutral-gray-10">
                        {fullData.origin_country.join(", ")}
                      </span>
                    </p>
                  )}

                {fullData.spoken_languages &&
                  fullData.spoken_languages.length > 0 && (
                    <p>
                      <span className="text-neutral-gray-150">Languages: </span>
                      <span className="text-neutral-gray-10">
                        {fullData.spoken_languages
                          .map((l) => l.english_name)
                          .join(", ")}
                      </span>
                    </p>
                  )}

                {fullData.vote_average != null && (
                  <p>
                    <span className="text-neutral-gray-150">Rating: </span>
                    <span className="text-neutral-gray-10">
                      {fullData.vote_average.toFixed(1)} (
                      {fullData.vote_count || 0} votes)
                    </span>
                  </p>
                )}
              </div>
            </div>
          </div>
        </article>
      </div>
    </>
  );
};

export default MediaDetails;
