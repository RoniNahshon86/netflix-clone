const MediaCard = ({ data }) => {
  const posterSrc =
    "https://media.themoviedb.org/t/p/w500_and_h282_face/" + data.backdrop_path;

  return (
    <div className="group relative z-0 hover:z-[100]">
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
          bg-zinc-900 rounded-md shadow-2xl
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
          <div className="flex items-center gap-2">
            <button className="w-9 h-9 rounded-full bg-white flex items-center justify-center hover:bg-white/80 transition">
              <span className="text-black text-xs">▶</span>
            </button>
            <button className="w-9 h-9 rounded-full border-2 border-zinc-400 flex items-center justify-center hover:border-white transition">
              <span className="text-white text-lg">+</span>
            </button>
            <button className="w-9 h-9 rounded-full border-2 border-zinc-400 flex items-center justify-center hover:border-white transition">
              <span className="text-white text-xs">👍</span>
            </button>
            <button className="w-9 h-9 rounded-full border-2 border-zinc-400 flex items-center justify-center hover:border-white transition ml-auto">
              <span className="text-white text-xs">▼</span>
            </button>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <span className="text-green-500 font-semibold">
              {Math.round(data.vote_average * 10)}% Match
            </span>
            <span className="border border-zinc-400 px-1 text-xs text-zinc-400">
              16+
            </span>
            <span className="text-zinc-400">
              {data.release_date?.split("-")[0]}
            </span>
            <span className="border border-zinc-400 px-1 text-xs text-zinc-400">
              HD
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm text-zinc-300">
            <span>Action</span>
            <span className="text-zinc-600">•</span>
            <span>Drama</span>
            <span className="text-zinc-600">•</span>
            <span>Thriller</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MediaCard;
