"use client";
import React from "react";
import flash from "../../../assets/SuperHeroesCards/Flash.png";
import Image from "next/image";
import Link from "next/link";

const Card = ({nombre, nombrePersonaje, biografia, imagenHeroe, id}) => {
  const prefix = "uploads/";
  const startIndex = imagenHeroe.indexOf(prefix) + prefix.length;
  const result = imagenHeroe.substring(startIndex);
  const ruta_imagen = "http://localhost:5000/publicCharactersImage/" + result;

  const longitudMaxima = 100;
  const biografiaTruncada = biografia.substring(0, longitudMaxima) + "...";

  return (
    <div className="w-64 mb-9  border-2 border-blue-950 bg-blue-900 flex items-center flex-col  hover:drop-shadow-2xl">
      <h2 className="text-cyan-50 text-3xl font-bold mt-2 tracking-wider uppercase">
        {nombre}
      </h2>
      <div className="w-full flex">
        <Image src={ruta_imagen} alt="Super heroe" width="300" height="300"/>

      </div>
      <section className="w-full h-full flex flex-col items-center justify-center">
        <h3 className="text-xl text-cyan-400 font-bold uppercase">
          {nombrePersonaje}
        </h3>

        <section className="w-full h-full flex flex-col items-center mt-3">
          <p className="w-11/12 text-md text-cyan-50 text-center">
            {biografiaTruncada}
          </p>
        </section>
        <div className="w-full px-4 py-2">
          <button className="w-full rounded-lg bg-cyan-200 mb-1 h-10 hover:cursor-pointer">
            <Link href={`/${id}`} className="w-full h-full">Ver</Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Card;
