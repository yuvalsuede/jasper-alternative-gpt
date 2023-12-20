"use client";
import React, { ReactElement } from "react";
import Card, { CardProps } from "./Card";

interface Props {
  favouriteTemplates: CardProps[];
  setFavouriteTemplate: React.Dispatch<React.SetStateAction<CardProps[] | []>>;
}

export default function FavouriteList({
  favouriteTemplates,
  setFavouriteTemplate,
}: Props): ReactElement {
  return (
    <>
      {favouriteTemplates?.map((card, index) => (
        <Card
          key={index}
          favouriteList={favouriteTemplates}
          setFavouriteTemplate={setFavouriteTemplate}
          {...card}
        />
      ))}
    </>
  );
}
