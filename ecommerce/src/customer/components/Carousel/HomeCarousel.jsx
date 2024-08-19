import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { homeCarouselData } from "./HomeCaroselData";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";

const handleDragStart = (e) => e.preventDefault();

const HomeCarousel = () => {
  const navigate = useNavigate();
  const item = homeCarouselData.map((item) => (
    <img
      className="cursor-pointer rounded-md"
      onClick={() => navigate("/women/clothing/dress")}
      src={item.image}
      alt=""
      onDragStart={handleDragStart}
      role="presentation"
    />
  ));
  return (
    <div>
      <Button className="relative px-4 sm:px-6 lg:px-8 ">
        <h2 className="text-2xl font-extrabold text-gray-900 py-5">
          Womens Section
        </h2>
      </Button>
      <AliceCarousel
        mouseTracking
        items={item}
        autoPlay
        infinite
        autoPlayInterval={2000}
        disableButtonsControls
      />
    </div>
  );
};

export default HomeCarousel;
