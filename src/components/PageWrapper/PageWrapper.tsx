import React from "react";

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="lg:ml-72 min-h-screen mx-auto my-20 lg:my-0">
      {children}
    </div>
  );
};
