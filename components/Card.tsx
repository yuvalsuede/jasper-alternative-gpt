import React from "react";
import Link from "next/link";

export interface CardProps {
    icon: string;
    title: string;
    description: string;
    categories: string[];
    id: string;
}

const Card: React.FC<CardProps> = ({icon, title, description, id}) => {
    // @ts-ignore
    return (
        <Link key={id} href={`/templates/${id}`}>

            <div
                style={{ minHeight: '300px'}}
                className="relative p-6 transition-all h-full focus:ring-gray-400 focus:shadow-xl duration-150 rounded-2xl shadow-sm hover:shadow-lg hover:ring-gray-300 hover:ring-2 ring-1 ring-gray-200 group flex flex-col bg-white">
                <div className="absolute top-4 right-4 hidden group-hover:block">
                    <button
                        className="p-2 transition duration-150 rounded-md hover:text-yellow-400 text-gray-200 hover:bg-gray-200/50">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                             stroke="currentColor" aria-hidden="true" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"></path>
                        </svg>
                    </button>
                </div>
                <div
                    className="flex items-center justify-center w-16 h-16 text-2xl rounded-full text-gray-600 mb-6 bg-gray-100/75">
                    <span dangerouslySetInnerHTML={{ __html: icon }} />

                </div>
                <h3 className="mb-2 text-lg font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-500 flex-1">{description}</p>
            </div>
        </Link>
    );
};

export default Card;
