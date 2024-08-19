import { Bookmark, LucideShoppingCart, SlashIcon } from "lucide-react";
import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export default function Product() {
  return (
    <div className="min-h-[90vh] container">
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

      <div className="h-full grid grid-cols-2 gap-16 pt-8">
        {/* gallery */}
        <div className="flex gap-4">
          <div className="w-24 flex flex-col gap-2">
            {Array.from({ length: 4 }).map((_, index) => (
              <Image
                key={index}
                alt="Nike Blazer Mid '77 Vintage"
                src={
                  "https://cdn.pixabay.com/photo/2020/07/15/15/36/tennis-5408067_1280.jpg"
                }
                width={0}
                height={0}
                sizes="100vw"
                className="w-full h-auto object-cover rounded-md border border-zinc-200 shadow"
              />
            ))}
          </div>

          <div className="w-full space-y-2">
            <Image
              alt="Nike Blazer Mid '77 Vintage"
              src={
                "https://cdn.pixabay.com/photo/2020/07/15/15/36/tennis-5408067_1280.jpg"
              }
              width={0}
              height={0}
              sizes="100vw"
              className="w-full h-auto object-cover rounded-md border border-zinc-200 shadow hover:cursor-pointer"
            />

            <p className="text-center text-zinc-400 font-light text-xs">
              Haz click en la imagen para ver completa
            </p>
          </div>
        </div>

        {/* info */}
        <div className="flex flex-col  gap-4">
          <div className="flex flex-col gap-4">
            <div>
              <div className="flex items-center justify-between">
                <p className="text-zinc-400">
                  Por <span className="text-primary font-semibold">Nike</span>
                </p>
                <button type="button" className="text-primary">
                  <Bookmark size={20} />
                </button>
              </div>
              <h2 className="text-primary-text font-medium text-3xl">
                Nike Blazer Mid 77 Vintage
              </h2>
              <p className="text-4xl font-medium">$169</p>
              <span className="text-xs text-zinc-400">1.3435 reviews</span>
            </div>

            <hr />

            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <p className="text-zinc-400 text-xs">
                  Despacho GRATIS,{" "}
                  <span className="text-primary-text font-semibold">
                    Viernes 14
                  </span>{" "}
                  en Chile.{" "}
                  <span className="text-tertiary underline hover:cursor-pointer">
                    Ver detalles
                  </span>
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Architecto, ex officia? Inventore suscipit exercitationem
                  iusto dolores, hic nulla at quibusdam veritatis sequi
                  voluptatem sit a temporibus ut, alias libero fugit?
                </p>
              </div>
            </div>
          </div>

          {/* buttons */}
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              className="bg-secondary text-white py-2 rounded-md"
            >
              Agregar a la lista
            </button>
            <button
              type="button"
              className="bg-primary text-white py-2 rounded-md flex items-center justify-center gap-2"
            >
              Agregar al carro
              <LucideShoppingCart size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
