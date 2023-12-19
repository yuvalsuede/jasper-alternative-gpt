"use client";
import React, { ReactElement } from "react";
import Star from "./ui/Logos/Star";
import { Button } from "./ui/button";
import { CardProps } from "./Card";
import { cn } from "@/lib/utils";

type extraProps = {
  isInFavourite: boolean;
  setIsInFavourite: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function FavouriteButton({
  icon,
  title,
  description,
  id,
  categories,
  setFavouriteTemplate,
  setIsInFavourite,
  isInFavourite,
}: CardProps & extraProps): ReactElement {
  function saveFavourite() {
    let template = [
      {
        icon,
        title,
        description,
        id,
        categories,
      },
    ];

    // TODO Save this to DB of choice
    //! For now saving the data to localStorage

    // Check whether the favourite already exits or not.
    let favourites: CardProps[] | [] = JSON.parse(
      localStorage.getItem("favourite") || "[]"
    );
    if (favourites.length > 0) {
      template = [...template, ...favourites];
    }
    localStorage.setItem("favourite", JSON.stringify(template));
    setIsInFavourite(true);
  }

  function removeFromFavourite() {
    let favourites: CardProps[] | [] = JSON.parse(
      localStorage.getItem("favourite") || "[]"
    );
    const updatedFavourite = favourites.filter((card) => card.id !== id);
    if (setFavouriteTemplate) {
      setFavouriteTemplate([...updatedFavourite]);
    }
    localStorage.setItem("favourite", JSON.stringify(updatedFavourite));
    setIsInFavourite(false);
  }

  return (
    <div className="absolute top-4 right-4 hidden group-hover:block p-0 m-0 z-50">
      <Button
        onClick={!isInFavourite ? saveFavourite : removeFromFavourite}
        className="p-2 transition duration-150 rounded-md bg-inherit hover:text-yellow-400 text-gray-200 hover:bg-gray-200/50"
      >
        <Star
          className={cn(isInFavourite ? "fill-yellow-400" : "fill-none")}
        ></Star>
      </Button>
    </div>
  );
}
