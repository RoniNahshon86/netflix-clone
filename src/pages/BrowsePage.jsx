import { useEffect, useState } from "react";

import Container from "../components/layout/Container";
import MovieTitle from "../assets/utilities/functions";
import PlayBtn from "../components/ui/PlayBtn";
import Button from "../components/ui/Button";
import MediaDetails from "../components/media/details/MediaDetails";

import InfoSvg from "../assets/icons/Info.svg?react";
import BrowseBg from "../assets/images/browse-bg.webp";
import MediaListing from "../components/media/MediaListing";

const BrowsePage = () => {
  const [topRated, settopRated] = useState([]);
  const [popupOpen, setpopupOpen] = useState(true);

  useEffect(() => {
    const myHeaders = new Headers();
    myHeaders.append(
      "Authorization",
      `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`
    );
    myHeaders.append("accept", "application/json");

    const requestOptions = {
      method: "GET",
      headers: myHeaders,
      redirect: "follow",
    };

    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        settopRated(result.results);
      })
      .catch((error) => console.error(error));
  }, []);

  const closePopup = function () {
    setpopupOpen(false);
  };

  const openPopup = function () {
    setpopupOpen(true);
  };

  return (
    <>
      <section
        style={{
          backgroundImage: `linear-gradient(196deg, rgba(0, 0, 0, 0.12) 8.98%, rgba(0, 0, 0, 0.00) 74.28%), url(${BrowseBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Container className="flex gap-5 items-center h-full min-h-[650px]">
          <div className="flex flex-col gap-5 max-w-[520px]">
            <MovieTitle title="House of Ninjas" />
            <p>
              Years after retiring from their formidable ninja lives, a
              dysfunctional family must return to shadowy missions to counteract
              a string of looming threats.
            </p>

            <div className="flex flex-row gap-3">
              <div>
                <PlayBtn />
              </div>
              <div>
                <Button size="lg" variant="secondary">
                  <InfoSvg className="h-4" />
                  <span>More Info</span>
                </Button>
              </div>
            </div>
          </div>
          <MediaDetails isOpen={popupOpen} closePopup={closePopup} />
        </Container>

        <MediaListing
          openPopup={openPopup}
          data={topRated}
          heading="Top Rated"
          index={0}
        />
      </section>
    </>
  );
};

export default BrowsePage;
