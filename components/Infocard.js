import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/24/solid";
import { StarIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

function Infocard({ img, location, title, description, star, price, total }) {
  const [isRed, setIsRed] = useState(false);

  const handleClick = () => {
    setIsRed(!isRed);
  };

  return (
    <div className="flex py-7 px-2 cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out border-t">
      <div className="flex relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image className="rounded-xl" src={img} height={1000} width={1000} />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon
            onClick={handleClick}
            className={`${
              isRed ? "text-red-500" : "text-gray-300"
            } h-7 cursor-pointer transition transform duration-150 hover:text-red-500`}
          />
        </div>
        <h4 className="text-xl">{title}</h4>
        <div className="border-b w-10 pt-2"></div>

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>
          <div>
            <p className="text-lg font-semibold pb-2 lg:text-2xl">{price}</p>
            <p className="text-right font-extralight">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infocard;
