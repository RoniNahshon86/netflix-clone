import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Container from "../layout/Container";
import MediaCard from "./MediaCard";

const MediaListing = ({ heading, data, index = 0 }) => {
  return (
    <Container leftOnly>
      <div className="w-full relative" style={{ zIndex: 100 - index }}>
        <div className="flex flex-col gap-2">
          <h2 className="title4">{heading}</h2>
          <div className="w-full">
            <Splide
              aria-label={heading}
              options={{
                type: "loop",
                padding: { left: "5rem", right: "5rem" },
                gap: ".5rem",
                perPage: 6,
                pagination: false,
              }}
            >
              {data.map((item) => (
                <SplideSlide key={item.id}>
                  <MediaCard data={item} />
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MediaListing;
