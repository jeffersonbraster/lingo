import React from "react";
import MobileSidebar from "./mobile-sidebar";

const MobileHeader = () => {
  return (
    <nav className="lg:hidden bg-green-500 px-6 h-[50px] flex items-center border-b fixed top-0 w-full z-50">
      <MobileSidebar />
    </nav>
  );
};

export default MobileHeader;
