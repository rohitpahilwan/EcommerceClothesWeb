import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Button } from "@headlessui/react";
import { MensKurta } from "../../../Data/MensKurta";

const HomeSectionCarousel = ({ data, sectionName }) => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const [activeIndex, setActiveIndex] = useState(0);

  const slidePrev = () => setActiveIndex(activeIndex - 1);

  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);
  const items = MensKurta.slice(0, 10).map((item) => (
    <HomeSectionCard product={item} />
  ));
  return (
    <div className="p-5 relative">
      <h2 className="text-2xl font-extrabold text-gray-800 py-5">
        {sectionName}
      </h2>
      <div className="rounded-lg border border-black overflow-hidden">
        <AliceCarousel
          items={items}
          disableButtonsControls
          responsive={responsive}
          disableDotsControls
          onSlideChange={syncActiveIndex}
          // autoPlay
          // infinite
          activeIndex={activeIndex}
        />
      </div>
      (
      {activeIndex !== 4 && (
        <Button
          variant="contained"
          className="rounded-lg z-50 bg-white border border-black right-0 top-32 absolute hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
          onClick={slidePrev}
          aria-label="next"
          disabled={activeIndex === items.length - 1} // Disable button when at the end
        >
          <ArrowBackIosNewIcon
            sx={{ transform: "rotate(180deg)", color: "black" }}
          />
        </Button>
      )}
      )
      {activeIndex !== items.length - 5 && (
        <Button
          variant="contained"
          className="rounded-lg z-50 bg-white border border-black left-0 top-32 absolute hover:bg-blue-500 hover:text-white hover:border-blue-500 transition-all duration-300"
          onClick={slideNext}
          aria-label="previous"
          disabled={activeIndex === 1} // Disable button when at the start
        >
          <ArrowBackIosNewIcon sx={{ color: "black" }} />
        </Button>
      )}
    </div>
  );
};

export default HomeSectionCarousel;
