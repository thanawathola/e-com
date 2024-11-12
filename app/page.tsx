// import Image from "next/image";
import React from "react";
import ScrollableMenu from "../components/scroll-menu";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="container fixed h-[80px]">
        {/* <div className="container flex bg-red-400 justify-between">
          <div>Contact us 012-345-6789</div>
          <div>About us | Join us</div>
        </div> */}
        <div className="container flex bg-slate-400">
          {/* <div className="m-4">Advice logo</div> */}
          <div className="flex flex-col w-full">
            <div className="flex gap-4">
              <div className="m-4">Advice logo</div>
              <div className="p-4">Search Bar</div>
              <div className="p-4">Shopping Cart</div>
              <div className="p-4">My Account</div>
            </div>
            <div className="flex gap-4">
              <div>First Page</div>
              <div>Product</div>
              <div>Article</div>
              <div>How to pay ?</div>
              <div>Confirm payment</div>
              <div>About us</div>
              <div>Contact us</div>
              <div>Services</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container bg-slate-700 pt-20">
        <div className="bg-red-400 flex flex-row max-h-[450px]">
          <ScrollableMenu />
          <div className="flex-auto">Hello</div>
        </div>

        <div className="flex bg-teal-400">
          <div className="text-black bg-white mx-auto">Promotion</div>
          <div className="bg-black px-4">See All </div>
        </div>
      </div>

      <div className="container fixed bottom-0 w-full bg-gray-300 p-4">
        <div className="text-center text-black">Footer Content Here</div>
      </div>
    </main>
  );
}
