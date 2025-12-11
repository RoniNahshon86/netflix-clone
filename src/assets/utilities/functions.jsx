function MovieTitle({ title }) {
  const words = title.toUpperCase().split(" ");

  return (
    <h1 className="title1 w-fit">
      {words.map((word, index) => (
        <span
          key={index}
          style={{
            display: "block",
            textAlign:
              word === "OF" || word === "THE" || word === "AND"
                ? "center"
                : "left",
          }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
}

export default MovieTitle;
