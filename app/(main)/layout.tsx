type Props = {
  children: React.ReactNode;
};

import MobileHeader from "@/components/shared/mobile-header";
import Sidebar from "@/components/shared/sidebar";
import React from "react";

const MainLayout = ({ children }: Props) => {
  return (
    <>
      <MobileHeader />
      <Sidebar className="hidden lg:flex" />
      <main className="lg:pl-[256px] h-full pt-[50px] lg:pt-0">
        <div className="h-full max-w-[1056px] mx-auto pt-6">{children}</div>
      </main>
    </>
  );
};

export default MainLayout;
