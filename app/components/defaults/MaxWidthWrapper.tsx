import { cn } from "@/lib/utils";
import React from "react";

const MaxWidthWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <section
      className={cn(
        "max-w-[1357px] w-full | px-5 md:px-10 lg:px-20",
        className || ""
      )}
    >
      {children}
    </section>
  );
};

export default MaxWidthWrapper;

// 50:20
