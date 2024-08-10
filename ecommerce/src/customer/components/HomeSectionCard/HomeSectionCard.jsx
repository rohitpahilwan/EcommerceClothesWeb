import React from "react";

const HomeSectionCard = ({ product }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white mx-3 border border-black rounded-lg overflow-hidden">
      <div className="h-[13rem] w-[10rem]">
        <img
          className="object-cover object-top w-full h-full rounded-t-lg"
          src={product.imageUrl}
          alt=""
        />
      </div>
      <div className="p-4"></div>
      <h3 className="text-lg font-medium text-gray-900">{product.brand}</h3>
      <p className="my-2 text-sm text-gray-500">{product.title}</p>
    </div>
  );
};

export default HomeSectionCard;
