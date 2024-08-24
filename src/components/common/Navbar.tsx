"use client";

import { useState } from "react";
import {
  ChevronDown,
  Heart,
  Menu,
  SearchIcon,
  ShoppingCart,
} from "lucide-react";
import logo from "@/assets/images/amazon_logo.png";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [searchInput, setSearchInput] = useState<string>("");
  const router = useRouter();

  const search = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/search?q=${searchInput}`);
  };

  return (
    <header className="h-[72px] bg-primary-text flex items-center">
      <nav className="container flex items-center gap-4">
        {/* logo */}
        <Link href={"/"}>
          <Image src={logo} alt="Amazon" width={100} height={40} />
        </Link>

        {/* search */}
        <div className="flex items-center grow gap-8">
          <div className="flex items-center gap-4">
            <button type="button">
              <Menu className="text-white" />
            </button>
            <div>
              <p className="text-xs text-white/50">Select</p>
              <button
                className="flex items-center gap-1 text-white text-sm"
                onClick={() => router.push("/categories")}
              >
                Category
                <ChevronDown size={14} />
              </button>
            </div>
          </div>

          <form className="flex items-center grow h-10" onSubmit={search}>
            <div className="w-full rounded-lg flex items-center h-full bg-primary-text-900/50 border border-zinc-700">
              <input
                type="text"
                placeholder="Buscar productos"
                className="bg-transparent w-full h-full px-4 focus:outline-none text-white text-sm"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button type="submit" className="bg-transparent h-full px-3">
                <SearchIcon className="text-primary" />
              </button>
            </div>
          </form>
        </div>

        {/* user - cart */}
        <div className="flex justify-end gap-6">
          <div className="flex items-center gap-2">
            {/* <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-primary to-yellow-500" /> */}
            <div>
              <p className="text-xs text-white/70">Hola Nicolas</p>
              <p className="text-sm font-semibold text-white">Cuenta y lista</p>
            </div>
          </div>

          <button
            type="button"
            className="relative bg-primary rounded-lg h-10 w-10 flex justify-center items-center"
          >
            <ShoppingCart size={20} className="text-primary-text" />
            <div className="absolute -top-1.5 -right-1.5 bg-white w-4 h-4 rounded-full text-[10px] font-medium flex items-center justify-center">
              1
            </div>
          </button>
        </div>
      </nav>
    </header>
  );
}
