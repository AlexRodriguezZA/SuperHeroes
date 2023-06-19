"use client";

import flash from "@/assets/SuperHeroesCards/Flash.png";
import Image from "next/image";
import Marvel from "../../../assets/Logos/marvel_logo.svg";
import DC from "../../../assets/Logos/DC_logo.png";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import Swal from "sweetalert2";

import { useState } from "react";
import { deleteHeroe } from "@/utils/deleteHeroe";
import { useRouter } from "next/navigation";
import { updateHeroe } from "@/utils/updateHeroe";
import { getPathImage } from "@/utils/getPathImage";

const CardDetail = ({ heroe, id }) => {
  const router = useRouter();

  //Activamos el  modo de edición de la card 
   const [EditingMode, setEditingMode] = useState(false);
 //Transformamos el array de equipamiento a string para editarlo
  const Equipamiento = heroe.equipment.toString();


  const [name, setname] = useState(heroe.name);
  const [nameCharacter, setnameCharacter] = useState(heroe.nameCharacter);
  const [home, sethome] = useState(heroe.home);
  const [year, setyear] = useState(heroe.year);
  const [biography, setbigraphy] = useState(heroe.biography);
  const [equipment, setequipment] = useState(Equipamiento);

  const handleDeleteHeroe = async () => {
    Swal.fire({
      title: "Are you sure?",
      text: `Se eliminará permanentemente ${heroe.name}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Eliminar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await deleteHeroe(heroe._id);
        if (res === "OK") {
          Swal.fire(
            "Eliminado!",
            `${heroe.name} ha sido eliminado.`,
            "success"
          );
          router.push("/");
        }
      }
    });
  };

  const handleUpdateHeroe = async () => {
    if (
      name === "" ||
      nameCharacter === "" ||
      home === "" ||
      year === 0 ||
      biography === "" ||
      equipment === ""
    ) {
      console.log("error");
    } else {
      const NewArrayEquipment = equipment.replace(/ /g, "").split(","); //Eliminamos espacios en blanco y transformmos en array

      const SuperHeroe = {
        name: name,
        nameCharacter: nameCharacter,
        home: home,
        year: year,
        biography: biography,
        equipment: NewArrayEquipment,
      };
      const res = await updateHeroe(SuperHeroe, id);
      if (res === "OK") {
        Swal.fire(
          "Editado con exito!",
          `${heroe.name} ha sido editado.`,
          "success"
        );
        setEditingMode(false);
        window.location.replace("");
      }
    }
  };
  return (
    <div className="w-11/12 flex flex-col items-center mt-4 bg-slate-100 divide-y-4 divide-slate-400/25 md:flex-row md:w-4/5 md:items-start md:gap-4 md:divide-y-0 md:shadow-md md:border-2	">
      <section className="w-4/5 md:flex md:h-full	">
        <AwesomeSlider
          bullets={false}
          className="h-full md:max-h-96"
          animation="foldOutAnimation"
        >
          {heroe.imagesPath &&
            heroe.imagesPath.map((imagen, index) => {
              let path = getPathImage(imagen.path);
              return <div className="w-full" data-src={path} key={index} />;
            })}
        </AwesomeSlider>
      </section>

      <section className="flex flex-col w-full">
        {!EditingMode ? (
          <h3 className="w-full text-center text-4xl md:text-5xl mt-4 tracking-wider uppercase underline decoration-pink-500">
            {heroe.name}
          </h3>
        ) : (
          <div className="w-full flex justify-center mt-4">
            <input
              type="text"
              name=""
              value={name}
              id=""
              onChange={(e) => setname(e.target.value)}
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
              value={nameCharacter}
              onChange={(e) => setnameCharacter(e.target.value)}
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
              type="number"
              name=""
              id=""
              value={year}
              onChange={(e) => setyear(e.target.value)}
              className="w-4/12 h-5 border-2 border-sky-900 text-xl rounded-lg text-center tracking-wider text-slate-600"
            />
          )}
        </p>
        <p className="ml-4 text-xl mt-3">
          Equipamiento{" "}
          {!EditingMode ? (
            <span className="text-slate-600">{Equipamiento}</span>
          ) : (
            <input
              type="text"
              name=""
              id=""
              value={equipment}
              onChange={(e) => setequipment(e.target.value)}
              className="w-4/12 h-5 border-2 border-sky-900 text-xl rounded-lg text-center tracking-wider text-slate-600"
            />
          )}
        </p>
        <div className="ml-4 text-xl mt-3 flex flex-row items-center gap-3">
          Casa:{" "}
          {!EditingMode ? (
            <div>
              {heroe.home === "dc" ? (
                <Image src={DC} alt="DC comics" width={40} />
              ) : (
                <Image src={Marvel} alt="DC comics" width={70} />
              )}
            </div>
          ) : (
            <select
              name=""
              value={home}
              onChange={(e) => sethome(e.target.value)}
            >
              <option value="dc">DC</option>
              <option value="marvel">Marvel</option>
            </select>
          )}
        </div>
        <div className="w-full flex mt-3 flex-col justify-center items-center">
          <p className="text-xl mt-3 underline decoration-sky-500">Biografía</p>

          {!EditingMode ? (
            <article className="w-11/12 text-slate-600 md:w-4/5 md:text-lg text-justify md:text-justify">
              {heroe.biography}
            </article>
          ) : (
            <textarea
              type="text"
              name=""
              id=""
              value={biography}
              rows={4}
              onChange={(e) => setbigraphy(e.target.value)}
              className="w-11/12 p-4 border-2 border-sky-900 text-lg text-justify rounded-lg tracking-wider text-slate-600"
            />
          )}
        </div>
        <div className="w-full flex justify-center my-4 md:mt-10 md:gap-3">
          {EditingMode ? (
            <button
              onClick={() => handleUpdateHeroe()}
              className="bg-sky-800 text-slate-200 active:bg-sky-900 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
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
            <button
              onClick={handleDeleteHeroe}
              className="text-slate-200 bg-red-500 font-bold uppercase px-3 py-2 rounded text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Eliminar
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

export default CardDetail;
