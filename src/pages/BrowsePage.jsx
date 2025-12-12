import { useEffect, useState } from "react";

import Container from "../components/layout/Container";
import PlayBtn from "../components/ui/PlayBtn";
import Button from "../components/ui/Button";
import MediaDetails from "../components/media/details/MediaDetails";
import VideoPlayer from "../components/ui/VideoPlayer";
import AISearchPopup from "../components/media/AISearchPopup";

import InfoSvg from "../assets/icons/Info.svg?react";
import MediaListing from "../components/media/MediaListing";
import {
  getTopRatedMovies,
  getPopularMovies,
  getNowPlayingMovies,
  getUpcomingMovies,
  getMovieDetails,
} from "../assets/utilities/api";

const FEATURED_MOVIE_IDS = [106646, 120, 598];

const FEATURED_MOVIE_ID =
  FEATURED_MOVIE_IDS[Math.floor(Math.random() * FEATURED_MOVIE_IDS.length)];

const BrowsePage = () => {
  const [topRated, setTopRated] = useState([]);
  const [popular, setPopular] = useState([]);
  const [nowPlaying, setNowPlaying] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [featuredMovie, setFeaturedMovie] = useState(null);
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupData, setPopupData] = useState({});
  const [videoPlayerOpen, setVideoPlayerOpen] = useState(false);
  const [videoKey, setVideoKey] = useState(null);
  const [videoTitle, setVideoTitle] = useState("");
  const [aiPopupOpen, setAiPopupOpen] = useState(false);

  useEffect(() => {
    getMovieDetails(FEATURED_MOVIE_ID)
      .then((result) => setFeaturedMovie(result))
      .catch((error) => console.error(error));

    getTopRatedMovies()
      .then((result) => setTopRated(result.results))
      .catch((error) => console.error(error));

    getPopularMovies()
      .then((result) => setPopular(result.results))
      .catch((error) => console.error(error));

    getNowPlayingMovies()
      .then((result) => setNowPlaying(result.results))
      .catch((error) => console.error(error));

    getUpcomingMovies()
      .then((result) => setUpcoming(result.results))
      .catch((error) => console.error(error));
  }, []);

  const closePopup = () => setPopupOpen(false);
  const openPopup = () => setPopupOpen(true);
  const updatePopupData = (jsonData) => setPopupData(jsonData);

  const openVideoPlayer = (key, title) => {
    setVideoKey(key);
    setVideoTitle(title);
    setVideoPlayerOpen(true);
  };

  const closeVideoPlayer = () => {
    setVideoPlayerOpen(false);
    setVideoKey(null);
  };

  const handleFeaturedPlay = () => {
    if (featuredMovie?.videos?.results) {
      const trailer = featuredMovie.videos.results.find(
        (v) => v.type === "Trailer"
      );
      if (trailer) {
        openVideoPlayer(trailer.key, featuredMovie.title);
      }
    }
  };

  const handleFeaturedMoreInfo = () => {
    if (featuredMovie) {
      updatePopupData(featuredMovie);
      openPopup();
    }
  };

  const handleAIMovieFound = (movie) => {
    updatePopupData(movie);
    openPopup();
  };

  const backdropUrl = featuredMovie?.backdrop_path
    ? `https://media.themoviedb.org/t/p/original${featuredMovie.backdrop_path}`
    : null;

  return (
    <>
      <VideoPlayer
        isOpen={videoPlayerOpen}
        onClose={closeVideoPlayer}
        videoKey={videoKey}
        title={videoTitle}
      />

      <MediaDetails
        isOpen={popupOpen}
        closePopup={closePopup}
        data={popupData}
        openVideoPlayer={openVideoPlayer}
      />

      <AISearchPopup
        isOpen={aiPopupOpen}
        onClose={() => setAiPopupOpen(false)}
        onMovieFound={handleAIMovieFound}
      />

      <button
        onClick={() => setAiPopupOpen(true)}
        className="fixed bottom-8 right-8 z-1000 px-8 py-4 bg-primary-red hover:bg-secondary-red-200 rounded text-lg font-semibold shadow-lg transition-all cursor-pointer"
      >
        Netflix AI
      </button>

      <section
        style={{
          backgroundImage: backdropUrl
            ? `linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.40) 50%, #000 100%), url(${backdropUrl})`
            : "linear-gradient(180deg, rgba(0, 0, 0, 0.60) 0%, rgba(0, 0, 0, 0.40) 50%, #000 100%)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container className="flex gap-5 items-center h-full min-h-[850px]">
          {featuredMovie && (
            <div className="flex flex-col gap-5 max-w-[520px]">
              <h1 className="title1">{featuredMovie.title}</h1>
              <p>{featuredMovie.overview}</p>
              <div className="flex flex-row gap-3">
                <div>
                  <PlayBtn onClick={handleFeaturedPlay} />
                </div>
                <div>
                  <Button
                    size="lg"
                    variant="secondary"
                    onClick={handleFeaturedMoreInfo}
                  >
                    <InfoSvg className="h-4" />
                    <span>More Info</span>
                  </Button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </section>

      <section className="mt-[-100px] mb-12">
        <div className="flex flex-col gap-12">
          <MediaListing
            openPopup={openPopup}
            data={popular}
            heading="Popular"
            index={0}
            updatePopupData={updatePopupData}
            openVideoPlayer={openVideoPlayer}
          />
          <MediaListing
            openPopup={openPopup}
            data={topRated}
            heading="Top Rated"
            index={1}
            updatePopupData={updatePopupData}
            openVideoPlayer={openVideoPlayer}
          />
          <MediaListing
            openPopup={openPopup}
            data={nowPlaying}
            heading="Now Playing"
            index={2}
            updatePopupData={updatePopupData}
            openVideoPlayer={openVideoPlayer}
          />
          <MediaListing
            openPopup={openPopup}
            data={upcoming}
            heading="Upcoming"
            index={3}
            updatePopupData={updatePopupData}
            openVideoPlayer={openVideoPlayer}
          />
        </div>
      </section>
    </>
  );
};

export default BrowsePage;
