"use client";

import Image from "next/image";
import flash from "../../../assets/SuperHeroesCards/Flash.png";
import Marvel from "../../../assets/Logos/marvel_logo.svg";
import DC from "../../../assets/Logos/DC_logo.png";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import { useState } from "react";

//TODO: Hacer andar el map de la imagenes

const CardDetail = ({ heroe }) => {
  //Evaluate that it is in edit mode to activate the inputs
  const [EditingMode, setEditingMode] = useState(false);
  const prefix = "uploads/";
  const startIndex = heroe.imagesPath[0].path.indexOf(prefix) + prefix.length;
  const result = heroe.imagesPath[0].path.substring(startIndex);
  const ruta_imagen = "http://localhost:5000/publicCharactersImage/" + result;
  console.log(heroe.imagesPath[0])
  return (
    <div className="w-11/12 flex flex-col items-center mt-4 bg-slate-100 divide-y-4 divide-slate-400/25 md:flex-row md:w-4/5 md:items-start md:gap-4 md:divide-y-0 md:shadow-md md:border-2	">
      <section className="w-4/5 md:flex md:h-full	">
        {/*Carrousel          <Image src={flash} alt="Imagen del superheroe" />
         */}
         <AwesomeSlider bullets={false} className="h-full md:max-h-96" animation="foldOutAnimation">
    { heroe.imagesPath?.length === 1 ? (
      <div className="w-4/5">
        <Image
          src={ruta_imagen}
          width={400}
          height={500}
          alt="Imagen del superheroe"
        />
      </div>
    ): (
      heroe.imagesPath?.map((imagen)=>{
        <div className="w-4/5">
        <Image
          src={ruta_imagen}
          width={400}
          height={500}
          alt="Imagen del superheroe"
        />
      </div>
      })
    )
  }
 
  </AwesomeSlider>
      </section>

      <section className="flex flex-col w-full">
        {!EditingMode ? (
          <h3 className="w-full text-center text-5xl mt-4 tracking-wider uppercase underline decoration-pink-500">
            {heroe.name}
          </h3>
        ) : (
          <div className="w-full flex justify-center mt-4">
            <input
              type="text"
              name=""
              id=""
              className="w-4/5 h-12  border-2 border-pink-500 rounded-lg text-5xl text-center tracking-wider"
            />
          </div>
        )}

        <p className="ml-4 text-xl mt-4">
          Nombre personaje:{" "}
          {!EditingMode ? (
            <span className="text-slate-600">{heroe.nameCharacter}</span>
          ) : (
            <input
              type="text"
              name=""
              id=""
              className="w-4/12 h-5 border-2 border-sky-900 text-xl rounded-lg text-center tracking-wider text-slate-600"
            />
          )}
        </p>
        <p className="ml-4 text-xl mt-3">
          Año de aparición:{" "}
          {!EditingMode ? (
            <span className="text-slate-600">{heroe.year}</span>
          ) : (
            <input
              type="text"
              name=""
              id=""
              className="w-4/12 h-5 border-2 border-sky-900 text-xl rounded-lg text-center tracking-wider text-slate-600"
            />
          )}
        </p>
        <p className="ml-4 text-xl mt-3">
          Equipamiento: <span className="text-slate-600">No tiene</span>
        </p>
        <div className="ml-4 text-xl mt-3 flex flex-row items-center gap-3">
          Casa:{" "}
          {!EditingMode ? (
            <div>
              {
                heroe.home === "dc" ? <Image src={DC} alt="DC comics" width={40} />
                : <Image src={Marvel} alt="DC comics" width={70} />

              }
            </div>
          ) : (
            <select name="" id="">
              <option value="">DC</option>
              <option value="">Marvel</option>
            </select>
          )}
        </div>
        <div className="w-full flex mt-3 flex-col justify-center items-center">
          <p className="text-xl mt-3 underline decoration-sky-500">Biografía</p>

          {!EditingMode ? (
            <article className="w-11/12 text-slate-600 md:w-4/5 md:text-lg md:text-justify">
              {heroe.biography}
            </article>
          ) : (
            <textarea
              type="text"
              name=""
              id=""
              rows={4}
              className="w-11/12 border-2 border-sky-900 text-lg text-justify rounded-lg tracking-wider text-slate-600"
            />
          )}
        </div>
        <div className="w-full flex justify-center my-4 md:mt-10 md:gap-3">
          {EditingMode ? (
            <button className="bg-sky-800 text-slate-200 active:bg-sky-900 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              Guardar
            </button>
          ) : (
            <button
              className="bg-emerald-500 text-slate-200 active:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={() => setEditingMode(true)}
            >
              Editar
            </button>
          )}

          {EditingMode ? (
            <button
              className="text-slate-200 bg-red-800 font-bold uppercase px-3 py-2 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              onClick={() => setEditingMode(false)}
            >
              Cancelar
            </button>
          ) : (
            <button className="text-slate-200 bg-red-500 font-bold uppercase px-3 py-2 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              Eliminar
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default CardDetail;
