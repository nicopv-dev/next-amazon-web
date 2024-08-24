import CategoryCard from "@/components/common/CategoryCard";
import ProductCard from "@/components/common/ProductCard";
import { FAKE_PRODUCTS } from "@/utils/data";
import {
  ComputerIcon,
  SofaIcon,
  CameraIcon,
  AudioLinesIcon,
  ShoppingBasketIcon,
  Gamepad2Icon,
  Music2Icon,
  HomeIcon,
  VideotapeIcon,
  TouchpadOffIcon,
  BookAIcon,
} from "lucide-react";

const POPULAR_CATEGORIES = [
  {
    id: 1,
    name: "Home Appliances",
    icon: HomeIcon,
  },
  {
    id: 2,
    name: "Clothing",
    icon: SofaIcon,
  },
  {
    id: 3,
    name: "Shoes",
    icon: CameraIcon,
  },
  {
    id: 4,
    name: "Shop",
    icon: ShoppingBasketIcon,
  },
  {
    id: 5,
    name: "Toys",
    icon: Gamepad2Icon,
  },
  {
    id: 6,
    name: "Audio",
    icon: AudioLinesIcon,
  },
  {
    id: 7,
    name: "Beauty",
    icon: ComputerIcon,
  },
  {
    id: 8,
    name: "Sports",
    icon: Gamepad2Icon,
  },
  {
    id: 9,
    name: "Home",
    icon: SofaIcon,
  },
  {
    id: 10,
    name: "Health",
    icon: CameraIcon,
  },
  {
    id: 11,
    name: "Movies",
    icon: VideotapeIcon,
  },
  {
    id: 12,
    name: "Music",
    icon: Music2Icon,
  },
  {
    id: 13,
    name: "Books",
    icon: BookAIcon,
  },
  {
    id: 14,
    name: "Tools",
    icon: TouchpadOffIcon,
  },
];

export default function Categories() {
  return (
    <div className="container py-4 flex flex-col gap-10">
      <div className="rounded-lg p-10 bg-gradient-to-r from-primary to-secondary space-y-2">
        <h4 className="text-white text-3xl font-bold">Free delivery</h4>
        <p className="max-w-lg text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor porro
          saepe atque.
        </p>
        <button
          type="button"
          className="rounded-full text-primary bg-white text-sm font-semibold px-6 py-2"
        >
          Browser products
        </button>
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-semibold text-gray-800">
          Popular Categories
        </h3>
        <div className="flex items-center justify-between gap-4 flex-nowrap">
          {POPULAR_CATEGORIES.map((category, index) => (
            <CategoryCard key={index} icon={category.icon} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-xl font-semibold text-gray-800">Hot Products</h3>
        <div className="grid grid-cols-5 gap-6">
          {FAKE_PRODUCTS(10).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}
