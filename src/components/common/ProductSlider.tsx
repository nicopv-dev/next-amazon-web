import Product from "@/types/product";
import ProductCard from "./ProductCard";

interface Props {
  products: Product[];
  title: string;
}

export default function ProductSlider({ title, products }: Props) {
  return (
    <section className="container space-y-3">
      <div className="flex justify-between items-center">
        <h3 className="text-black flex items-center gap-1 font-medium">
          {/* <ShoppingBasket className="text-black" color="black" /> */}
          {title}
        </h3>

        <button
          type="button"
          className="text-primary text-xs font-medium hover:underline"
        >
          Ver más
        </button>
      </div>
      <div className="grid grid-cols-5 gap-4">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
}
