import PlayBtn from "../ui/PlayBtn";
import MoreInfoSvg from "../../assets/icons/ArrowRight.svg?react";
import IconButton from "../ui/IconButton";
import React, { useState } from "react";
import { getGenreNameByID } from "../../assets/utilities/functions";
import { getMovieVideos } from "../../assets/utilities/api";

const MediaCard = ({ data, openPopup, updatePopupData, openVideoPlayer }) => {
  const [loadingTrailer, setLoadingTrailer] = useState(false);

  const onClickOpenPopup = () => {
    openPopup();
    updatePopupData(data);
  };

  const onClickPlay = () => {
    setLoadingTrailer(true);

    getMovieVideos(data.id)
      .then((result) => {
        const trailer = result.results?.find((v) => v.type === "Trailer");
        if (trailer) {
          openVideoPlayer(trailer.key, data.title);
        }
        setLoadingTrailer(false);
      })
      .catch((error) => {
        console.error(error);
        setLoadingTrailer(false);
      });
  };

  const posterSrc =
    "https://media.themoviedb.org/t/p/w500_and_h282_face/" + data.backdrop_path;

  return (
    <div className="group relative z-0 hover:z-100">
      <div className="rounded overflow-hidden cursor-pointer">
        <img
          src={posterSrc}
          alt={data.title}
          className="object-cover w-full h-[150px]"
        />
      </div>

      <div
        className="
          absolute top-0 left-1/2 -translate-x-1/2
          w-[calc(100%+30px)] 
          bg-neutral-gray-850 rounded-md shadow-2xl
          opacity-0 scale-95 pointer-events-none
          group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto
          transition-all duration-200 ease-out
        "
      >
        <img
          src={posterSrc}
          alt={data.title}
          className="object-cover w-full h-40 rounded-t-md"
        />
        <div className="p-3 space-y-3">
          <div>
            <h3>{data.title}</h3>
          </div>
          <div className="flex justify-between gap-2">
            <PlayBtn
              size="sm"
              onClick={onClickPlay}
              disabled={loadingTrailer}
            />
            <IconButton onClick={onClickOpenPopup}>
              <MoreInfoSvg />
            </IconButton>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="border border-neutral-gray-200 px-1 text-xs text-neutral-gray-100">
              16+
            </span>
            <span className="border border-neutral-gray-200 px-1 text-xs text-neutral-gray-100">
              HD
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-neutral-gray-10">
            {data.genre_ids.map((item, index) => (
              <React.Fragment key={item}>
                <span>{getGenreNameByID(item)}</span>
                {index < data.genre_ids.length - 1 && (
                  <span className="text-neutral-gray-350">•</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
