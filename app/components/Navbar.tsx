"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
import { MdOutlineAccountCircle } from "react-icons/md";
import { UserButton, useAuth } from "@clerk/nextjs";
import Image from "next/image";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Men",
    href: "/Men",
  },
  {
    name: "Women",
    href: "/Women",
  },
  {
    name: "Teens",
    href: "/Teens",
  },
];

export default function Navbar() {
  const pathname = usePathname();

  const { handleCartClick } = useShoppingCart();

  const { userId } = useAuth();

  return (
    <header className="shadow sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl h-12 md:h-20">
        <Link href={`/`} className="flex items-center gap-3">
          <div className="h-8 w-8 border-4 border-rose-700 bg-white flex ml-2 mt-2 mb-2">
            <Image
              height={50}
              width={50}
              className="h-full w-full bg-cover bg-center object-cover"
              src="/images/logo.jpg"
              alt=""
            />
          </div>
          <h1 className="text-2xl md:text-4xl font-bold">
            Ethnic <span className="text-primary">Inator</span>
          </h1>
        </Link>

        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathname === link.href ? (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-primary"
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="flex gap-6 items-center">
          {userId ? (
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: {
                    width: "2rem",
                    height: "2rem",
                  },
                },
              }}
            />
          ) : (
            <Link className="flex gap-2" href={`/sign-in`}>
              <MdOutlineAccountCircle className="text-2xl" />
              <span className="font-semibold text-gray-800">Login</span>
            </Link>
          )}

          <button
            onClick={() => handleCartClick()}
            className="flex flex-row gap-x-2  w-12  sm:w-20  md:w-24 rounded-none"
          >
            <ShoppingBag />
            <span className="hidden font-semibold text-gray-800 sm:block">
              Cart
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
