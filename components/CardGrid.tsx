import React, {Fragment, useState} from "react";
import Card, {CardProps} from "./Card";
import CategoriesList from "./CategoryList";

interface Props {
    cards: CardProps[];
}

const CardGrid: React.FC<Props> = ({cards}) => {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const handleSelectCategory = (category: string) => {
        setSelectedCategory(category);
    };

    return (
        <Fragment>
            <div className="p-6 ">
                <CategoriesList onSelectedCategory={handleSelectCategory}/>
                <div
                    className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-items-center place-items-center">
                    {cards.filter((card) => selectedCategory === "all" || card?.categories?.includes(selectedCategory)).map((card, index) => (
                        <Card {...card} key={index}/>
                    ))}
                </div>
            </div>
        </Fragment>
    );
};

export default CardGrid;
