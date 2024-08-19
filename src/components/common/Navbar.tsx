"use client";

import { useState } from "react";
import { ChevronDown, Menu, SearchIcon, ShoppingCart } from "lucide-react";
import logo from "@/assets/images/amazon_logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [searchInput, setSearchInput] = useState<string>("");
  const router = useRouter();

  return (
    <header className="h-20 bg-primary-text flex items-center">
      <nav className="container flex items-center gap-4">
        {/* logo */}
        <Link href={"/"}>
          <Image
            src={logo}
            alt="Amazon"
            width={100}
            height={40}
            objectFit="contain"
          />
        </Link>

        {/* search */}
        <div className="flex items-center grow gap-8">
          <div className="flex items-center gap-4">
            <button type="button">
              <Menu className="text-white" />
            </button>
            <div>
              <p className="text-xs text-white/50">Selecciona</p>
              <button className="flex items-center gap-1 text-white">
                Categoria
                <ChevronDown size={14} />
              </button>
            </div>
          </div>

          <form className="flex items-center grow h-10">
            <input
              type="text"
              placeholder="Buscar productos"
              className="w-full h-full px-4 focus: outline-none text-primary-text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
              type="button"
              className="bg-primary h-full px-3"
              onClick={() => router.push(`/search?q=${searchInput}`)}
            >
              <SearchIcon />
            </button>
          </form>
        </div>

        {/* user - cart */}
        <div className="flex justify-end gap-6">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary to-yellow-500" />
            <div>
              <p className="text-xs text-white/70">Hola Nicolas</p>
              <p className="text-sm font-semibold text-white">Cuenta y lista</p>
            </div>
          </div>

          <button className="relative">
            <ShoppingCart size={28} className="text-white" />
            <p className="absolute -top-[7px] left-3 text-primary text-sm font-extrabold">
              1
            </p>
          </button>
        </div>
      </nav>
    </header>
  );
}
