import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { Checkbox } from "../ui/checkbox";
import prime from "@/assets/images/amazon_prime_logo.png";

const BRANDS = [
  {
    id: 1,
    name: "Nike",
  },
  {
    id: 2,
    name: "Adidas",
  },
  {
    id: 3,
    name: "Puma",
  },
  {
    id: 4,
    name: "Reebok",
  },
  {
    id: 5,
    name: "Vans",
  },
  {
    id: 6,
    name: "Converse",
  },
  {
    id: 7,
    name: "New Balance",
  },
];

const TYPES = [
  {
    id: 1,
    name: "Running",
  },
  {
    id: 2,
    name: "Casual",
  },
  {
    id: 3,
    name: "Basketball",
  },
  {
    id: 4,
    name: "Soccer",
  },
  {
    id: 5,
    name: "Skate",
  },
  {
    id: 6,
    name: "Tennis",
  },
  {
    id: 7,
    name: "Training",
  },
];

export default function SearchSidebar() {
  return (
    <aside className="w-72 bg-white">
      <div className="h-[80vh] sticky top-0 left-0 overflow-y-scroll flex flex-col gap-6 scrollbar-thin">
        {/* prime filter */}
        <div>
          <h4 className="text-black font-bold text-sm">Amazon prime</h4>
          <ul>
            <li className="flex items-center gap-1.5">
              <Checkbox id="prime" />
              <Image alt="Amazon Prime" src={prime} width={36} height={12} />
            </li>
          </ul>
        </div>

        <hr className="mr-2" />

        {/* price filter */}
        <div className="flex flex-col gap-1">
          <h4 className="text-black font-bold text-sm">Precio</h4>
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>

        <hr className="mr-2" />

        {/* brand filter */}
        <div className="flex flex-col gap-1">
          <h4 className="text-black font-bold text-sm">Marcas</h4>

          <ul className="flex flex-col gap-1">
            {BRANDS.map((brand) => (
              <li key={brand.id} className="flex items-center gap-2">
                <Checkbox id={brand.name} />
                <span className="text-sm">{brand.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <hr className="mr-2" />

        {/* type filter */}
        <div className="flex flex-col gap-1">
          <h4 className="text-black font-bold text-sm">Tipo</h4>

          <ul className="flex flex-col gap-1">
            {TYPES.map((type) => (
              <li key={type.id} className="flex items-center gap-2">
                <Checkbox id={type.name} />
                <span className="text-sm">{type.name}</span>
              </li>
            ))}
          </ul>
        </div>

        <hr className="mr-2" />

        {/* color filter */}
        <div className="flex flex-col gap-1">
          <h4 className="text-black font-bold text-sm">Color</h4>
        </div>

        <div>
          <button className="bg-secondary text-white py-2 w-full rounded-md text-sm">
            Limpiar filtros
          </button>
        </div>
      </div>
    </aside>
  );
}
