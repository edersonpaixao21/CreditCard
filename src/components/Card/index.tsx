import { ReactNode } from "react";

export const Card = ({ children }: { children: ReactNode }) => {
  return (
    <div
      className="mx-auto my-12 shadow-lg p-6 rounded-xl border border-gray-700"
      style={{ width: "600px" }}
    >
      {children}
    </div>
  );
};
