"use client"; // Ensure this component is a client component

import Link from "next/link";
import { usePathname } from "next/navigation";
import PageBanner from "../common/PageBanner/PageBanner";

export default function ShopLayout({ children }) {
  const pathname = usePathname();

  const routeName =
    pathname === "/shop"
      ? "All"
      : pathname === "/shop/news"
      ? "News"
      : pathname === "/shop/products"
      ? "Products"
      : "Shop";

  return (
    <>
      <PageBanner
        image={
          "https://tz47gb.yourbrand.studio/files/dynamicContent/sites/tz47gb/images/en/webpage_15/ls0ljad8/element_296/rwdMode_1/2400x284/other_header.webp"
        }
        title={"Shop"}
      />
      <div className="shop">
        <div className="container">
          <div className="shop-content">
            <div className="sidebar">
              <Link href="/shop">All</Link>
              <Link href="/shop/news">News</Link>
              <Link href="/shop/products">Products</Link>
            </div>
            <div className="product">
              <h3>Shop / {routeName}</h3>
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
