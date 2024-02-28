"use client";
import React, { Fragment, useEffect, useState } from "react";
import Card, { CardProps } from "./Card";
import CategoriesList from "./CategoryList";
import FavouriteList from "./FavouriteList";
import { useToast } from "./ui/use-toast";

interface Props {
  cards: CardProps[];
}

const CardGrid: React.FC<Props> = ({ cards }) => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [favouriteTemplate, setFavouriteTemplate] = useState<CardProps[] | []>(
    []
  );

  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  useEffect(() => {
    console.log(favouriteTemplate);
  }, [favouriteTemplate]);
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
    <Fragment>
      <div className="p-6 ">
        <CategoriesList onSelectedCategory={handleSelectCategory} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 justify-items-center place-items-center">
          {selectedCategory === "favourite" && (
            <FavouriteList
              favouriteTemplates={favouriteTemplate}
              setFavouriteTemplate={setFavouriteTemplate}
            />
          )}

          {cards
            .filter(
              (card) =>
                selectedCategory === "all" ||
                card?.categories?.includes(selectedCategory)
            )
            .map((card, index) => (
              <Card
                {...card}
                key={index}
                favouriteList={favouriteTemplate}
                setFavouriteTemplate={setFavouriteTemplate}
              />
            ))}
          <FinalCard></FinalCard>
        </div>
      </div>
    </Fragment>
  );
};

function FinalCard() {
  return (
    <div
      style={{ minHeight: "300px", background: "#6366F1" }}
      className="relative p-6 h-full rounded-2xl shadow-sm bg-white"
    >
      <div className="flex items-center justify-center w-16 h-16 text-3xl rounded-full mb-4 bg-white text-indigo-500">
        <i className="fas fa-robot"></i>
      </div>
      <h3 className="mb-2 text-lg font-bold text-white">
        Want to integrate AI into your business?
      </h3>
      <a
        href="https://tidycal.com/yuvalsuede/60-minute-consultation-with-yuval"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-block px-6 py-2 text-sm font-medium bg-white text-indigo-500 rounded-full shadow-md hover:bg-opacity-90"
      >
        Talk to me
      </a>
    </div>
  );
}
export default CardGrid;
