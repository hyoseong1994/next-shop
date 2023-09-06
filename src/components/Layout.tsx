import React, { PropsWithChildren } from "react";
import Header from "@/components/Header";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-center h-screen p-4">
      <div className="w-80">
        <Header />
        {children}
      </div>
    </div>
  );
};
export default Layout;
