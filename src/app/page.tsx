import ProductCard from "@/components/common/ProductCard";
import HomeBanner from "@/components/home/HomeBanner";
import { FAKE_PRODUCTS } from "@/utils/data";
import { ChevronRight, History, ShoppingBasket } from "lucide-react";
import Image from "next/image";
import arrow from "@/assets/images/amazon_arrow.png";
import ProductSlider from "@/components/common/ProductSlider";
import { AmazonCard, AmazonCardBlack } from "@/components/common/AmazonCard";

export default function Home() {
  return (
    <main className="space-y-20">
      <HomeBanner />

      {/* recomendations products */}
      <ProductSlider
        title="Products Recomendations"
        products={FAKE_PRODUCTS(5)}
      />

      {/* advertisement */}
      <section className="w-full h-36 bg-gradient-to-r from-primary to-secondary relative">
        <div className="container h-full flex gap-10 items-center py-10">
          {/* <div>
            <p className="text-white">gift cards</p>
            <Image src={arrow} alt="arrow" width={50} height={50} />
          </div> */}

          <div className="flex flex-col gap-2">
            <h4 className="text-3xl text-white">Escoge un perfecto regalo</h4>
            <button className="flex items-center gap-1 text-sm animate-bounce">
              <span className="text-white">Comprar ahora</span>
              <ChevronRight size={16} className="text-white" />
            </button>
          </div>
        </div>
        <AmazonCard className="absolute -top-4 right-80 z-20 -rotate-6" />
        <AmazonCardBlack className="absolute -bottom-4 z-10 right-28 rotate-3" />
      </section>

      {/* history browser */}
      <ProductSlider title="History Browser" products={FAKE_PRODUCTS(5)} />
    </main>
  );
}
