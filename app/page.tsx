// import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen justify-center">
      <div className="container fixed items">
        <div className="container flex bg-red-400 justify-between">
          <div>Contact us 012-345-6789</div>
          <div>About us | Join us</div>
        </div>
        <div className="container flex bg-slate-400">
          <div className="m-4">Advice logo</div>
          <div className="flex flex-col w-full">
            <div className="flex gap-4">
              <div className="p-4">Search Bar</div>
              <div className="p-4">Cart</div>
              <div className="p-4">My Account</div>
            </div>
            <div className="flex gap-4">
              <div>First Page</div>
              <div>Product</div>
              <div>Article</div>
              <div>How to pay ?</div>
              <div>Confirm payment</div>
              <div>Services</div>
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
