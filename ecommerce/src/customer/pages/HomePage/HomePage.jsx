import React from "react";
import Maincarousel from "../../components/Homcarousel/Maincarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import MensKurta from "../../../Data/MensKurta";

export default function HomePage() {
  return (
    <div>
      <Maincarousel />
      <div className="space-y-10 py=20 flex flex-col justify-center px-5 lg:px-10">
        <HomeSectionCarousel
          data={MensKurta}
          sectionName={"Men's Kurta"}
          autoPlayInterval={1500}
        />

        <HomeSectionCarousel
          data={MensKurta}
          sectionName={"Men's Shirts"}
          autoPlayInterval={2000}
        />
        <HomeSectionCarousel
          data={MensKurta}
          sectionName={"Women's Saree"}
          autoPlayInterval={2000}
        />
        <HomeSectionCarousel
          data={MensKurta}
          sectionName={"Women's Dress"}
          autoPlayInterval={2000}
        />
      </div>
    </div>
  );
}
