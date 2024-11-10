// import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <div className="container min-w-full fixed">
        <div className="container flex justify-between bg-white min-w-full">
          <div className="bg-red-400 px-80 max-w-[70%] ml-12">
            <h1 className="text-black font-mono">
              Hello Contact here 012-345-6789
            </h1>
          </div>
          <div className="bg-red-400 px-80 max-w-[70%] mr-24">
            <h1 className="text-black font-mono">About us | Join us</h1>
          </div>
        </div>

        <div className="container flex min-w-full bg-slate-800">
          <div className="bg-black gap-2 p-10">
            <h1 className="">Advice picture</h1>
          </div>
          <div className="container bg-red-400 flex flex-col min-w-full">
            <div className="container bg-red-700 flex gap-2 p-5 min-w-full">
              <div>Search Bar</div>
              <div>Compare product</div>
              <div>Favorite</div>
              <div>Cart</div>
              <div>Sign In</div>
            </div>
            <div className="container bg-slate-500 flex gap-2 p-5 min-w-full">
              <div>Product</div>
              <div>Shopping</div>
              <div>Dealer</div>
              <div>Customer of Advice</div>
              <div>Branches near you</div>
              <div>Supplier</div>
              <div>Service</div>
              <div>Franchise</div>
              <div>Investor</div>
              <div>IMG this price are vat included</div>
            </div>
          </div>
        </div>
      </div>
      {/* flex flex-col min-h-screen gap-2 p-10 max-w-xs */}
      {/* <div>
          <h2>HOLA</h2>
        </div>
        <div>Amigo</div>
        <div>Que pasa</div>
        <div>Que pasa</div>
        <div>Que pasa</div>
        <div>Que pasa</div>
        <div>Que pasa</div>
        <div>Que pasa</div>
        <div>Que pasa</div> */}
    </main>
  );
}
