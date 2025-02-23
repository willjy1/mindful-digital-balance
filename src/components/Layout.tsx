
import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-[100dvh] bg-background">
      <main className="flex-1">{children}</main>
    </div>
  );
};
