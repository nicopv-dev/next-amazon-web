import ProductCard from "@/components/common/ProductCard";
import HomeBanner from "@/components/home/HomeBanner";
import { FAKE_PRODUCTS } from "@/utils/data";
import { ChevronRight, History, ShoppingBasket } from "lucide-react";

export default function Home() {
  return (
    <main className="space-y-10 pb-10">
      <HomeBanner />

      {/* recomendations products */}
      <section className="container space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-black flex items-center gap-1 font-bold">
            <ShoppingBasket className="text-black" color="black" />
            Recomendados
          </h3>

          <button type="button" className="text-primary text-xs font-semibold">
            Ver más
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {FAKE_PRODUCTS(5).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>

      <section className="container space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-black flex items-center gap-1 font-bold">
            <ShoppingBasket className="text-black" color="black" />
            Recomendados
          </h3>

          <button type="button" className="text-primary text-xs font-semibold">
            Ver más
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {FAKE_PRODUCTS(5).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>

      {/* advertisement */}
      <section className="w-full h-40 bg-gradient-to-r from-primary to-secondary">
        <div className="container h-full flex flex-col gap-2 justify-center">
          <h4 className="text-3xl text-white">Escoge un perfecto regalo</h4>
          <button className="flex items-center gap-1 text-sm animate-bounce">
            <span className="text-white">Comprar ahora</span>
            <ChevronRight size={16} className="text-white" />
          </button>
        </div>
      </section>

      {/* devices */}
      <section className="container space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-black flex items-center gap-1 font-bold">
            <ShoppingBasket className="text-black" color="black" />
            Dispositivos de Amazon
          </h3>

          <button type="button" className="text-primary text-xs font-semibold">
            Ver más
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {FAKE_PRODUCTS(5).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>

      {/* history browser */}
      <section className="container space-y-2">
        <div className="flex justify-between items-center">
          <h3 className="text-black flex items-center gap-1 font-bold">
            <History className="text-black" color="black" />
            Historial de busqueda
          </h3>

          <button type="button" className="text-primary text-xs font-semibold">
            Ver más
          </button>
        </div>
        <div className="grid grid-cols-5 gap-4">
          {FAKE_PRODUCTS(5).map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
      </section>
    </main>
  );
}
