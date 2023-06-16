import React from "react";
import Link from "next/link";
import Image from "next/image";
import imagensuper from "../../assets/superheroe.svg"

const Navigation = () => {
  return (
    <nav className="w-full flex justify-evenly bg-slate-950 h-16">
        {/*W-2/4 = with : 50% */}
      <div className="w-2/4 h-full flex items-center ps-8 text-lg font-bold leading-6 text-white ">
        <Image src={imagensuper} alt="imagen" width={50} height={50} />
      </div>
      <div className="w-2/4">
        <ul className="w-full h-full flex justify-evenly items-center">
          <li>
            <Link className="text-lg font-bold leading-6 text-white" href="/">Inicio</Link>
          </li>
          <li>
            <Link className="text-lg font-bold leading-6 text-white" href="/Marvel">Marvel</Link>
          </li>
          <li>
            <Link className="text-lg font-bold leading-6 text-white " href="/DC">DC</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;