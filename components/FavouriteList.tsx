"use client";
import React, { ReactElement, useEffect, useState } from "react";
import Card, { CardProps } from "./Card";
import { useToast } from "./ui/use-toast";

interface Props {}

export default function FavouriteList({}: Props): ReactElement {
  const [favouriteTemplate, setFavouriteTemplate] = useState<
    CardProps[] | []
  >();
  const { toast } = useToast();
  useEffect(() => {
    const unparsedTemplate = localStorage.getItem("favourite") || "[]";
    try {
      const templates = JSON.parse(unparsedTemplate) as CardProps[];
      setFavouriteTemplate(templates);
    } catch {
      toast({
        title: "Invalid Favourite List",
      });
    }
  }, []);
  return (
    <>
      {favouriteTemplate?.map((card, index) => (
        <Card {...card} key={index} />
      ))}
    </>
  );
}
