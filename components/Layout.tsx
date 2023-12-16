"use client";
import React, { Fragment, useState } from "react";
import Sidebar from "./Sidebar";
import GoProPopup from "./GoproPopup";
import { SIDEBAR_ITEMS } from "@/constants/templates";

interface Props {
  children: React.ReactNode;
  title: string;
}

const Layout: React.FC<Props> = ({ children, title }) => {
  const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };

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
          {title && (
            <h1 className="text-black text-2xl font-bold mb-4 mt-10 pr-4 pl-4 pt-4">
              {title}
            </h1>
          )}
          {children}
        </main>
        {showPopup && <GoProPopup onClose={() => setShowPopup(false)} />}
      </div>
    </Fragment>
  );
};

export default Layout;
