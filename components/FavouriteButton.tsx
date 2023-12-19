"use client";
import React, { ReactElement } from "react";
import Star from "./ui/Logos/Star";
import { Button } from "./ui/button";
import { CardProps } from "./Card";

export default function FavouriteButton({
  icon,
  title,
  description,
  id,
  categories,
}: CardProps): ReactElement {
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
  }

  return (
    <div className="absolute top-4 right-4 hidden group-hover:block p-0 m-0 z-50">
      <Button
        onClick={saveFavourite}
        className="p-2 transition duration-150 rounded-md bg-inherit hover:text-yellow-400 text-gray-200 hover:bg-gray-200/50"
      >
        <Star></Star>
      </Button>
    </div>
  );
}
