import React, {Fragment, useState} from "react";
import Sidebar from "./Sidebar";
import GoProPopup from "./GoproPopup";

interface Props {
    children: React.ReactNode;
    title: string;
}
export const SIDEBAR_ITEMS: any = [
    {
        label: "Templates",
        url: "/",
    },
    {
        label: "Fork this repo",
        url: "https://github.com/yuvalsuede/jasper-alternative-gpt",
        target: "blank"
    },
    {
        label: "Follow me on LinkedIn",
        url: "https://www.linkedin.com/in/yuval-suede/",
        target: "blank"
    },
    {
        label: "Contact",
        url: "https://www.linkedin.com/in/yuval-suede/",
        target: "blank"
    },
];


const Layout: React.FC<Props> = ({ children, title }) => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePopup = () => {
        setShowPopup(!showPopup);
    }
    return (
        <Fragment>
            <div className="min-h-screen relative w-full md:flex md:flex-row">
                <div className="md:hidden z-10 fixed left-0 top-0 h-full">
                    <Sidebar onShowPopup={handlePopup} items={SIDEBAR_ITEMS} />
                </div>
                <div className="hidden md:block md:relative ">
                    <Sidebar onShowPopup={handlePopup} items={SIDEBAR_ITEMS} />
                </div>
                <main className="w-full md:flex-grow">
                    { title && <h1 className="text-black text-2xl font-bold mb-4 mt-10 pr-4 pl-4 pt-4">{title}</h1> }
                    {children}
                </main>
                {showPopup && <GoProPopup onClose={() => setShowPopup(false)}/>}
            </div>
        </Fragment>
    );
};

export default Layout;
