import ProductCard from "@/components/common/ProductCard";
import { FAKE_PRODUCTS } from "@/utils/data";
import Image from "next/image";
import prime from "@/assets/images/amazon_prime_logo.png";
import { Checkbox } from "@/components/ui/checkbox";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Slider } from "@/components/ui/slider";
import { LayoutGrid, MenuIcon, SlashIcon } from "lucide-react";

export default function Search() {
  return (
    <div className="container">
      <div className="w-full py-4">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/" className="text-gray-400">
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon color="gray" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/components" className="text-gray-400">
                Categoria
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <SlashIcon color="gray" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Zapatillas</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <hr />

      <div className="flex py-4 gap-10">
        {/* sidebar filters */}
        <aside className="w-72 bg-white">
          <div className="h-screen sticky top-2 left-0 flex flex-col gap-6">
            {/* prime filter */}
            <div>
              <h4 className="text-black font-bold text-xs">Amazon prime</h4>
              <ul>
                <li className="flex items-center gap-1.5">
                  <Checkbox id="prime" />
                  <Image
                    alt="Amazon Prime"
                    src={prime}
                    width={36}
                    height={12}
                  />
                </li>
              </ul>
            </div>

            {/* price filter */}
            <div className="space-y-2">
              <h4 className="text-black font-bold text-xs">Precio</h4>
              <Slider defaultValue={[33]} max={100} step={1} />
            </div>

            {/* type filter */}
            <div>
              <h4 className="text-black font-bold text-xs">Tipo</h4>
            </div>

            {/* color filter */}
            <div>
              <h4 className="text-black font-bold text-xs">Color</h4>
            </div>

            <div>
              <button className="bg-secondary text-white py-2 w-full rounded-md text-sm">
                Limpiar filtros
              </button>
            </div>
          </div>
        </aside>

        {/* results */}
        <div className="w-full flex flex-col gap-4">
          <div className="flex justify-end">
            <div className="flex items-center gap-2">
              <button type="button" className="text-zinc-400">
                <LayoutGrid size={18} />
              </button>
              <button type="button" className="text-zinc-400">
                <MenuIcon size={18} />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-6">
            {FAKE_PRODUCTS(10).map((product, index) => (
              <ProductCard key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
