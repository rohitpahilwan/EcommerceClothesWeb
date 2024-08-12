import React from "react";
import Maincarousel from "../../components/Homcarousel/Maincarousel";
import HomeSectionCarousel from "../../components/HomeSectionCarousel/HomeSectionCarousel";
import MensKurta from "../../../Data/Mens/MensKurta";
import MensShirt from "../../../Data/Mens/MensShirt";
import MensJeans from "../../../Data/Mens/MensJeans";
import WomenTop from "../../../Data/Women/WomenTop";
import WomenJeans from "../../../Data/Women/WomenJeans";
import WomenDress from "../../../Data/Women/WomenDress";
import Saree from "../../../Data/Women/Sarees";

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
          data={MensShirt}
          sectionName={"Men's Shirts"}
          autoPlayInterval={2000}
        />
        <HomeSectionCarousel
          data={MensJeans}
          sectionName={"Men's Jeans"}
          autoPlayInterval={2000}
        />
        <HomeSectionCarousel
          data={WomenTop}
          sectionName={"Women's Top"}
          autoPlayInterval={2000}
        />
        <HomeSectionCarousel
          data={WomenJeans}
          sectionName={"Women's Jeans"}
          autoPlayInterval={2000}
        />
        <HomeSectionCarousel
          data={WomenDress}
          sectionName={"Women's Dress"}
          autoPlayInterval={2000}
        />
        <HomeSectionCarousel
          data={Saree}
          sectionName={"Women's Sarees"}
          autoPlayInterval={2000}
        />
      </div>
    </div>
  );
}
