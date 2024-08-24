import ProductCard from "@/components/common/ProductCard";
import { FAKE_PRODUCTS } from "@/utils/data";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronsRightIcon, LayoutGrid, MenuIcon } from "lucide-react";
import SearchSidebar from "@/components/search/SearchSidebar";

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
              <ChevronsRightIcon className="text-gray-400" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/calzado" className="text-gray-400">
                Calzado
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator>
              <ChevronsRightIcon className="text-gray-400" />
            </BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbPage>Zapatillas</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      <hr />

      <div className="flex py-4 gap-8">
        {/* sidebar filters */}
        <SearchSidebar />

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
