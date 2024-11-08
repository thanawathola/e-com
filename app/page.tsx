import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex justify-between gap-2 p-5 min-w-full bg-slate-800 fixed">
        <div className="bg-red-400">
          <h1 className="text-white px-36">Hello Contact here 012-345-6789</h1>
        </div>
        <div className="bg-red-400">
          <h1 className="">About us | Join us</h1>
        </div>
      </div>
      <div className="flex flex-col min-h-screen gap-2 p-10 max-w-xs">
        <div>
          <h2>HOLA</h2>
        </div>
        <div>Amigo</div>
        <div>Que pasa</div>
        <div>Que pasa</div>
        <div>Que pasa</div>
        <div>Que pasa</div>
        <div>Que pasa</div>
        <div>Que pasa</div>
        <div>Que pasa</div>
      </div>
    </main>
  );
}
