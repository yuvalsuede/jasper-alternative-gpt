"use client";
import React, { ReactElement, useEffect, useState } from "react";
import Card, { CardProps } from "./Card";
import { useToast } from "./ui/use-toast";

interface Props {}

export default function FavouriteList({}: Props): ReactElement {
  const [favouriteTemplate, setFavouriteTemplate] = useState<CardProps[] | []>(
    []
  );
  const { toast } = useToast();
  useEffect(() => {
    // TODO get the stored favourites from DB
    //! For now getting the favourites form localStorage
    const unparsedTemplate = localStorage.getItem("favourite") || "[]";
    try {
      const templates = JSON.parse(unparsedTemplate) as CardProps[];
      setFavouriteTemplate(templates);
    } catch {
      // Throw error if . Someone manually adds something that cannot be parsed to localStorage
      toast({
        title: "Invalid Favourite List",
      });
    }
  }, []);
  return (
    <>
      {favouriteTemplate?.map((card, index) => (
        <Card
          key={index}
          setFavouriteTemplate={setFavouriteTemplate}
          {...card}
        />
      ))}
    </>
  );
}
