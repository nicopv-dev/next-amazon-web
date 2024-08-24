import logo from "@/assets/images/amazon_prime_logo.png";
import Product from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import { Rating } from "@mui/material";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { brand, title, choice, raiting } = product;

  return (
    <article className="flex flex-col justify-end gap-2">
      {/* amazon choice */}
      {choice && (
        <div className="w-max py-1.5 px-2 text-[10px] bg-primary-text text-white">
          Amazon <span className="text-primary">Choice</span>
        </div>
      )}
      {/* image */}
      <Link
        href={`/product/${product.id}`}
        className="overflow-hidden rounded-md"
      >
        <Image
          src="https://cdn.pixabay.com/photo/2020/07/15/15/36/tennis-5408067_1280.jpg"
          alt="Producto"
          width={0}
          height={0}
          sizes="100vw"
          className="w-full object-cover rounded-md scale-100 transition-all duration-200 ease-out hover:scale-105 hover:cursor-pointer"
        />
      </Link>

      {/* info */}
      <div className="flex flex-col gap-2">
        {/* title */}
        <Link href={`/product/${product.id}`} className="text-black font-bold">
          <span className="line-clamp-1">{brand}</span>
          <span className="text-black font-light line-clamp-2">{title}</span>
        </Link>

        {/* data */}
        <div>
          <Rating name="read-only" value={raiting} readOnly />
          <p className="text-2xl flex text-black font-medium">$80,99</p>

          <div className="flex items-center gap-1.5">
            <Image src={logo} alt="Amazon Prime" width={36} height={12} />
            <div className="flex flex-col">
              <p className="text-[10px] text-black/30">
                Obtenlo el{" "}
                <span className="font-semibold text-black/80">Viernes 15</span>
              </p>
              <p className="text-[10px] text-black/30">
                Despacho gratis por Amazon
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
