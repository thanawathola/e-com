"use client";
import Image from "next/image";
import React from "react";
import ScrollableMenu from "../components/scroll-menu";
import SearchBar from "@/components/search-bar";
import ShoppingCart from "@/components/shopping-cart";
import UserIcon from "@/components/user-icon";
import AutoSlideshow from "@/components/auto-slide";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="container fixed h-[80px]">
        <div className="container bg-black">
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-4 gap-4">
              <Image
                src="/images/gump.png" // Corrected the path
                height={200}
                width={180}
                alt="Gump Logo" // Update with a meaningful alt text
                className="m-4" // TailwindCSS class for margin
              />
              <div className="p-4 m-4">
                <SearchBar />
              </div>
              <div className="p-4 m-4 flex gap-4">
                <div className="">
                  <ShoppingCart />
                </div>
                <div className="p-2">Shopping cart</div>
              </div>
              <div className="p-4 m-4 flex gap-4">
                <div className="">
                  <UserIcon />
                </div>
                <div className="p-2">My Account</div>
              </div>
            </div>

            <div className="grid grid-cols-8 gap-4 text-center">
              <div>First Page</div>
              <div>Product</div>
              <div>Article</div>
              <div>Pay Method</div>
              <div>Confirm payment</div>
              <div>About us</div>
              <div>Contact us</div>
              <div>Services</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-slate-700 pt-[135px] mt-6">
        <div className="bg-red-400 grid grid-cols-10 max-h-[450px] overflow-hidden">
          <ScrollableMenu />

          <AutoSlideshow />
        </div>

        <div>
          <div className="flex bg-teal-400">
            <div className="text-black bg-white mx-auto">Promotion</div>
            <div className="bg-black px-4">See All </div>
          </div>

          <div>Promotion product x4</div>
        </div>

        <div>
          <div className="flex bg-teal-400">
            <div className="text-black bg-white mx-auto">Recommended</div>
            <div className="bg-black px-4">See All </div>
          </div>

          <div>Promotion product x9</div>
        </div>

        <div>
          <div className="flex bg-teal-400">
            <div className="text-black bg-white mx-auto">Best Seller</div>
            <div className="bg-black px-4">See All </div>
          </div>

          <div>Promotion product x9</div>
        </div>

        <div>
          <div>Product slide</div>
          <div>See All Brand</div>
        </div>

        <div>
          <div>Payment method</div>
        </div>

        <div className="flex gap-4 p-2">
          <div className="flex flex-col m-2 gap-2">
            <div className="mb-10">Products</div>
            <div>promotion</div>
            <div>product reviews</div>
            <div>gaming gear</div>
            <div>IT/accessories</div>
            <div>prepaid card</div>
            <div>brands product</div>
            <div>all products</div>
          </div>
          <div className="flex flex-col m-2 gap-2">
            <div className="mb-10">Help</div>
            <div>How to sign up</div>
            <div>Confirm payment</div>
            <div>How to purchase</div>
            <div>Pay Method</div>
            <div>Delivery Method</div>
            <div>Insurance Policy</div>
            <div>Insurance duration</div>
            <div>Help !</div>
          </div>
          <div className="flex flex-col m-2 gap-2">
            <div className="mb-10">About us</div>
            <div>Home page</div>
            <div>About us</div>
            <div>Agreement and Policy</div>
            <div>Private Policy</div>
            <div>Youtube Channel</div>
          </div>
          <div className="flex flex-col m-2 gap-2">
            <div className="mb-10">Contact us</div>
            <div>Contact us</div>
            <div>Facebook</div>
            <div>Line</div>
          </div>
          <div className="flex flex-col m-2 gap-2">
            <div className="mb-10">Member</div>
            <div>Sign in</div>
            <div>Sign up</div>
            <div>History</div>
          </div>
        </div>

        <div className="flex gap-4">
          <div className="flex flex-col">
            Company info
            <div>1</div>
          </div>
          <div className="flex flex-row">
            Social media icon
            <div>1</div>
            <div>2</div>
            <div>3</div>
          </div>
        </div>
      </div>

      <div className="container fixed bottom-0 w-full bg-gray-300 p-4">
        <div className="text-center text-black">Footer Content Here</div>
      </div>
    </main>
  );
}
