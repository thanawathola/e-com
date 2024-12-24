"use client";
// import Image from "next/image";
import React from "react";
import ScrollableMenu from "../components/scroll-menu";
import SearchBar from "@/components/search-bar";
import ShoppingCart from "@/components/shopping-cart";
import UserIcon from "@/components/user-icon";
import AutoSlideshow from "@/components/auto-slide";
import CustomCarousel from "@/components/brand-slide";
import { Image } from "antd";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="container fixed h-[80px] header">
        <div className="container bg-black">
          <div className="flex flex-col w-full">
            <div className="grid grid-cols-4 gap-4">
              <Image
                src="/images/gump.png" // Corrected the path
                // height={200}
                width={180}
                alt="Gump Logo" // Update with a meaningful alt text
                // className="m-4" // TailwindCSS class for margin
              />
              <div className="p-4 m-4">
                <SearchBar />
              </div>
              <div className="p-4 m-4 flex gap-4">
                <div className="">
                  <ShoppingCart />
                </div>
                <div className="p-2 ">Shopping cart</div>
              </div>
              <div className="p-4 m-4 flex gap-4">
                <div className="border-l-2 border-blue-500">
                  <UserIcon />
                </div>
                <div className="p-2 ">My Account</div>
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
        <div className="bg-red-400 grid grid-cols-8 max-h-[450px] overflow-hidden">
          <div className="col-span-2">
            <ScrollableMenu />
          </div>
          <div className="col-span-6">
            <AutoSlideshow />
          </div>
        </div>

        <div>
          <div className="flex bg-black items-center m-4">
            <div className="border rounded border-blue-500 h-2 bg-blue-500 flex-1 mx-2"></div>
            <div className=" mx-auto font-serif text-3xl">Promotion</div>
            <div className="border rounded border-blue-500 h-2 bg-blue-500 flex-1 mx-2"></div>
            <div className=" px-4 font-serif text-xl">See All </div>
          </div>

          <div className="grid grid-cols-2 bg-black md:grid-cols-3 lg:grid-cols-4 gap-2 m-2">
            <Image
              src="/images/prom1.jpg" // Corrected the path
              // height={200}
              // width={180}
              alt="Gump Logo" // Update with a meaningful alt text
              // className="m-2 w-1/4 sm:w-1/2 md:w-1/3 lg:w-1/4" // TailwindCSS class for margin
            />
            <Image
              src="/images/prom2.jpg" // Corrected the path
              // height={200}
              // width={180}
              alt="Gump Logo" // Update with a meaningful alt text
              // className="m-2 w-1/4 sm:w-1/2 md:w-1/3 lg:w-1/4" // TailwindCSS class for margin
            />
            <Image
              src="/images/prom3.jpg" // Corrected the path
              // height={200}
              // width={180}
              alt="Gump Logo" // Update with a meaningful alt text
              // className="m-2 w-1/4 sm:w-1/2 md:w-1/3 lg:w-1/4" // TailwindCSS class for margin
            />
            <Image
              src="/images/prom4.jpg" // Corrected the path
              // height={200}
              // width={180}
              alt="Gump Logo" // Update with a meaningful alt text
              // className="m-2 w-1/4 sm:w-1/2 md:w-1/3 lg:w-1/4" // TailwindCSS class for margin
            />
          </div>
        </div>

        <div>
          <div className="flex bg-black items-center m-4">
            <div className="border rounded border-blue-500 h-2 bg-blue-500 flex-1 mx-2"></div>
            <div className="mx-auto font-serif text-3xl">Recommended</div>
            <div className="border rounded border-blue-500 h-2 bg-blue-500 flex-1 mx-2"></div>
            <div className="px-4 font-serif text-xl">See All </div>
          </div>

          <div className="grid grid-cols-2 bg-black md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 m-2 ">
            <div className="">
              <Image
                src="/images/rec1.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of rec1" // Provide a meaningful description
                // className="mx-auto w-full" // Center the image within the div
              />
              <div className="text-center">Hello</div>
            </div>
            <div className="">
              <Image
                src="/images/rec2.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of rec1" // Provide a meaningful description
                // className="mx-auto w-full" // Center the image within the div
              />
            </div>
            <div className="">
              <Image
                src="/images/rec3.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of rec1" // Provide a meaningful description
                // className="mx-auto w-full" // Center the image within the div
              />
            </div>
            <div className="">
              <Image
                src="/images/rec4.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of rec1" // Provide a meaningful description
                // className="mx-auto w-full" // Center the image within the div
              />
            </div>
            <div className="">
              <Image
                src="/images/rec5.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of rec1" // Provide a meaningful description
                // className="mx-auto w-full" // Center the image within the div
              />
            </div>
          </div>

          <div className="grid grid-cols-2 bg-black md:grid-cols-3 lg:grid-cols-4 m-2 ">
            <div className="">
              <Image
                src="/images/rec6.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of rec1" // Provide a meaningful description
                // className="justify-center" // Center the image within the div
              />
            </div>
            <div className="">
              <Image
                src="/images/rec7.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of rec1" // Provide a meaningful description
                // className=" justify-center" // Center the image within the div
              />
            </div>
            <div className="">
              <Image
                src="/images/rec8.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of rec1" // Provide a meaningful description
                // className="justify-center" // Center the image within the div
              />
            </div>
            <div className="">
              <Image
                src="/images/rec9.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of rec1" // Provide a meaningful description
                // className="justify-center" // Center the image within the div
              />
            </div>
          </div>
        </div>

        <div>
          <div className="flex bg-black items-center m-4">
            <div className="border rounded border-blue-500 h-2 bg-blue-500 flex-1 mx-2"></div>
            <div className="mx-auto font-serif text-3xl">Best Seller</div>
            <div className="border rounded border-blue-500 h-2 bg-blue-500 flex-1 mx-2"></div>
            <div className="px-4 font-serif text-xl">See All </div>
          </div>

          <div className="grid grid-cols-2 bg-black md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 m-2  justify-center">
            <div className="">
              <Image
                src="/images/b1.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of b1" // Provide a meaningful description
                // className="mx-auto w-full" // Center the image within the div
              />
              <div>Hello</div>
            </div>
            <div className="">
              <Image
                src="/images/b2.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of b2" // Provide a meaningful description
                // className="mx-auto w-full" // Center the image within the div
              />
            </div>
            <div className="">
              <Image
                src="/images/b3.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of b3" // Provide a meaningful description
                // className="mx-auto w-full" // Center the image within the div
              />
            </div>
            <div className="">
              <Image
                src="/images/b4.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of b4" // Provide a meaningful description
                // className="mx-auto w-full" // Center the image within the div
              />
            </div>
            <div className="">
              <Image
                src="/images/b5.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of b5" // Provide a meaningful description
                // className="mx-auto w-full" // Center the image within the div
              />
            </div>
          </div>

          <div className="grid grid-cols-2 bg-black md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 m-2  justify-center">
            <div className="">
              <Image
                src="/images/b6.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of b6" // Provide a meaningful description
                // className="mx-auto w-full" // Center the image within the div
              />
            </div>
            <div className="">
              <Image
                src="/images/b7.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of b7" // Provide a meaningful description
                // className="mx-auto w-full" // Center the image within the div
              />
            </div>
            <div className="">
              <Image
                src="/images/b8.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of b8" // Provide a meaningful description
                // className=" mx-auto w-full" // Center the image within the div
              />
            </div>
            <div className="">
              <Image
                src="/images/b9.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of b9" // Provide a meaningful description
                // className="mx-auto w-full" // Center the image within the div
              />
            </div>
            <div className="">
              <Image
                src="/images/b10.jpg" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of b10" // Provide a meaningful description
                // className="mx-auto w-full" // Center the image within the div
              />
            </div>
          </div>
        </div>

        <div>
          <div className="border rounded border-gray-500 h-4 bg-gray-500 flex-1 m-2"></div>
          <div className="">
            <CustomCarousel />
          </div>
          <div className="flex">
            <div className="border rounded border-gray-500 h-4 bg-gray-500 flex-1 m-2"></div>
            <div className="font-serif text-xl text-green-400">
              See All Brand
            </div>
            <div className="border rounded border-gray-500 h-4 bg-gray-500 flex-1 m-2"></div>
          </div>
        </div>

        <div>
          <div className="text-center bg-white pt-2">
            <Image
              src="/images/pm1.png" // Path to your image file
              // height={200}
              // width={180}
              alt="Description of pm1" // Provide a meaningful description
              // className="mx-auto w-full" // Center the image within the div
            />
            {/* <Image
            src="/images/pm1.jpg"
            alt="Description of pm1"
            /> */}
          </div>
          <div className="text-center bg-white pt-2">
            <Image src="/images/pm2.png" alt="Description of pm2" />
          </div>
        </div>

        <div className="grid grid-cols-5 gap-4 p-2 font-serif text-md bg-gray-800">
          <div className="flex flex-col m-2 gap-2 ">
            <div className="mb-10 text-blue-500 text-2xl">Products</div>
            <div>promotion</div>
            <div>product reviews</div>
            <div>gaming gear</div>
            <div>IT/accessories</div>
            <div>prepaid card</div>
            <div>brands product</div>
            <div>all products</div>
          </div>
          <div className="flex flex-col m-2 gap-2">
            <div className="mb-10 text-blue-500 text-2xl">Help</div>
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
            <div className="mb-10 text-blue-500 text-2xl">About us</div>
            <div>Home page</div>
            <div>About us</div>
            <div>Agreement and Policy</div>
            <div>Private Policy</div>
            <div>Youtube Channel</div>
          </div>
          <div className="flex flex-col m-2 gap-2">
            <div className="mb-10 text-blue-500 text-2xl">Contact us</div>
            <div>Contact us</div>
            <div>Facebook</div>
            <div>Line</div>
          </div>
          <div className="flex flex-col m-2 gap-2">
            <div className="mb-10 text-blue-500 text-2xl">Member</div>
            <div>Sign in</div>
            <div>Sign up</div>
            <div>History</div>
          </div>
        </div>
        <div className="flex justify-between pb-[60px] bg-gray-800  border-t-2 border-blue-500">
          <div className="flex flex-col">
            <div>
              <Image
                src="/images/pm1.png" // Path to your image file
                // height={200}
                // width={180}
                alt="Description of pm1" // Provide a meaningful description
                // className="flex-shrink-0 flex-grow-0 basis-0" // Center the image within the div
              />
            </div>

            <div className="flex gap-2">
              <div className="">
                Right reserve © Immense Corporation Co., Ltd. Email :
              </div>
              <div className="text-blue-500">support@gump.in.th</div>
              <div className=""> Tel: </div>
              <div className="text-blue-500">081-846-0558</div>
              <div className=""> Fax: </div>
              <div className="text-blue-500">02-953-5599</div>
            </div>
          </div>
          <div className="flex flex-row gap-2 px-4 m-2">
            <div className="">
             Facebook
            </div>
            <div>Line</div>
            <div>Youtube</div>
          </div>
        </div>
      </div>

      <div className="container fixed bottom-0 w-full bg-gray-300 p-4 h-[60px]">
        <div className="text-center text-black">Footer Content Here</div>
      </div>
    </main>
  );
}
