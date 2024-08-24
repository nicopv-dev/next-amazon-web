import { LucideProps } from "lucide-react";
import React, { RefAttributes } from "react";

interface Props {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>
  >;
}

export default function CategoryCard({ icon: Icon }: Props) {
  return (
    <div className="p-4 rounded-lg bg-white shadow group relative hover:cursor-pointer">
      <span className="absolute bottom-0 left-0 w-full h-0 transition-all bg-primary z-0 group-hover:h-full rounded-lg" />
      <Icon
        size={30}
        className="text-zinc-500 group-hover:text-white relative z-10"
      />
    </div>
  );
}
