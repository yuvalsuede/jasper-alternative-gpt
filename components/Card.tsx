import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  Card as UICard,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import FavouriteButton from "./FavouriteButton";

export interface CardProps {
  icon: string;
  title: string;
  description: string;
  categories: string[];
  id: string;
}

export type FavouriteListState = {
  favouriteList: CardProps[];
  setFavouriteTemplate: React.Dispatch<React.SetStateAction<[] | CardProps[]>>;
};

const Card: React.FC<CardProps & FavouriteListState> = ({
  icon,
  title,
  description,
  id,
  categories,
  setFavouriteTemplate,
  favouriteList,
}) => {
  const [isInFavourite, setIsInFavourite] = useState(false);

  useEffect(() => {
    setIsInFavourite(favouriteList.findIndex((card) => card.id === id) !== -1);
  }, []);

  return (
    <div className=" relative group">
      {/* This the little star icon that is visible when hovered */}

      <FavouriteButton
        isInFavourite={isInFavourite || false}
        icon={icon}
        title={title}
        description={description}
        id={id}
        // This state setter is to change the star icon from being filled to unfilled and vice versa
        setIsInFavourite={setIsInFavourite}
        // This state setter is to remove the templates when we are in the templates tab
        setFavouriteTemplate={setFavouriteTemplate}
        categories={categories}
      />

      <Link key={id} href={`/templates/${id}`}>
        <UICard className="relative min-h-[300px] max-w-xl transition-all focus:ring-gray-400 focus:shadow-xl duration-150 rounded-2xl shadow-sm hover:shadow-lg hover:ring-gray-300 hover:ring-2 ring-1 ring-gray-200 group flex flex-col bg-white">
          <CardHeader>
            <div className="flex items-center justify-center w-16 h-16 text-2xl rounded-full text-gray-600 mb-6 bg-gray-100/75">
              <span dangerouslySetInnerHTML={{ __html: icon }} />
            </div>

            <CardTitle className="mb-2 text-lg font-semibold text-gray-700">
              {title}
            </CardTitle>
            <CardDescription className="text-gray-500 flex-1">
              {description}
            </CardDescription>
          </CardHeader>
        </UICard>
      </Link>
    </div>
  );
};

export default Card;
