import { cn } from "@/lib/utils";
import Image from "next/image";
import amazon from "@/assets/images/amazon_card_logo.png";
import amazon2 from "@/assets/images/amazon_arrow.png";

interface Props {
  className?: string;
}

export function AmazonCard({ className }: Props) {
  return (
    <div
      className={cn(
        className,
        "w-56 h-36 bg-white rounded-lg flex justify-center items-center card-shadow transition-all duration-200 ease-in-out translate-y-0 hover:-translate-y-2"
      )}
    >
      <Image src={amazon} alt="amazon" width={100} height={80} />
    </div>
  );
}

export function AmazonCardBlack({ className }: Props) {
  return (
    <div
      className={cn(
        className,
        "w-56 h-36 bg-black rounded-lg flex justify-center items-center card-shadow transition-all duration-200 ease-in-out translate-y-0 hover:-translate-y-2"
      )}
    >
      <Image src={amazon2} alt="amazon-arrow" width={100} height={80} />
    </div>
  );
}
