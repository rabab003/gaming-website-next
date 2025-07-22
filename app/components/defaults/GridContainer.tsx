import React, { ReactNode } from "react";

const GridContainer = ({
  cols,
  children,
  className,
}: {
  cols: number;
  children: ReactNode;
  className?: string;
}) => {
  const gridClasses =
    {
      1: `grid grid-col-1`,
      2: `grid grid-col-2`,
      3: `grid grid-col-3`,
      4: `grid grid-col-4`,
      5: `grid grid-col-5`,
      6: `grid grid-col-6`,
      7: `grid grid-col-7`,
      8: `grid grid-col-8`,
      9: `grid grid-col-9`,
      10: `grid grid-col-10`,
      11: `grid grid-col-11`,
      12: `grid grid-col-12`,
    }[cols] || "grid grid-cols-4";
  return (
    <div className={`grid ${className || ""} ${gridClasses[cols]}`}>
      {children}
    </div>
  );
};

export default GridContainer;
