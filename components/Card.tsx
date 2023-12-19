import React from "react";
import Link from "next/link";

import {
  Card as UICard,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Star from "./ui/Logos/Star";

export interface CardProps {
  icon: string;
  title: string;
  description: string;
  categories: string[];
  id: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description, id }) => {
  return (
    <Link key={id} href={`/templates/${id}`} className="dark">
      <UICard className=" relative max-w-max min-h-[300px] transition-all focus:ring-gray-400 focus:shadow-xl duration-150 rounded-2xl shadow-sm hover:shadow-lg hover:ring-gray-300 hover:ring-2 ring-1 ring-gray-200 group flex flex-col">
        {/* This the little star icon that is visible when hovered */}
        <div className="absolute top-4 right-4 hidden group-hover:block p-0 m-0">
          <button className="p-2 transition duration-150 rounded-md hover:text-yellow-400 text-gray-200 hover:bg-gray-200/50">
            <Star></Star>
          </button>
        </div>

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
  );
};

export default Card;
