"use client";

import { useState } from "react";
import { addNewHeroe } from "@/utils/addNewHeroe";

import Swal from "sweetalert2";



export default function FormAddNew() {
  //Nos permite tomar el estado del input del cada equipamiento del superheroe para luego
  //poder cargarlo en el array de equipamiento el cual se encuentra en objeto formData
  const [Equipment, setEquipment] = useState("");
  const [Images, setImages] = useState([])
  const [formData, setFormData] = useState({
    name: "",
    nameCharacter: "",
    year: 0,
    home: "",
    biography: "",
    equipment: [],
    imagesPath:[]
    
  });

  const handleResetForm = () => {
    formData.name = "";
    formData.nameCharacter = "";
    formData.year = 0;
    formData.home = "";
    formData.biography = "";
    formData.equipment.splice(0, formData.equipment.length);
    formData.imagesPath.splice(0, formData.imagesPath.length);
    setEquipment("");
    setImages([])
  };

  const handleEquipment = (e) => {
    setEquipment(e.target.value);
  };

  const handleImageUpload =(e) => {

    const imagenFile = e.target.files[0];
    setImages([...Images, imagenFile]);
  }
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const SendInfo = async () => {
    if (
      formData.name === "" ||
      formData.nameCharacter === "" ||
      formData.biography === "" ||
      formData.home === "" ||
      formData.year === 0 ||
      formData.equipment.length > 0
    ) {
      Swal.fire(
        'Cuidado!',
        `Debe Completar todos los campos`,
        'error'
      )
      return;
    }
    const NewArrayEquipment = Equipment.replace(/ /g, "").split(","); //Eliminamos espacios en blanco y transformmos en array
    formData.equipment.push(...NewArrayEquipment);
    formData.imagesPath.push(...Images)
    await addNewHeroe(formData);
    handleResetForm()
    Swal.fire(
      'Cargado!',
      `${formData.name} ha sido cargado correctamente.`,
      'success'
    )

  };

  return (
    <>
      <div className=" w-auto mx-auto max-w-3xl ">
        {/*content*/}
        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full overflow-y-auto bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex flex-col items-center justify-between p-5 border-b border-solid border-slate-200 rounded-t">
            <h3 className="text-3xl w-full text-center font-semibold">
              Agregar personaje
            </h3>
          
          </div>
          {/*body*/}
          <div className="relative p-6 flex justify-center">
            <form action="" className="w-11/12 flex gap-8">
              <section className="w-1/2">
                <div className="mb-4">
                  <label htmlFor="nombre" className="block mb-2">
                    Nombre:
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    required
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="nombrePersonaje" className="block mb-2">
                    Nombre del Personaje:
                  </label>
                  <input
                    type="text"
                    id="nombrePersonaje"
                    name="nameCharacter"
                    value={formData.nameCharacter}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="añoAparicion" className="block mb-2">
                    Año de Aparición:
                  </label>
                  <input
                    type="number"
                    id="añoAparicion"
                    name="year"
                    value={formData.year}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    required
                  />
                </div>
              </section>

              <section className="w-1/2">
                <div className="mb-4">
                  <label htmlFor="casa" className="block mb-2">
                    Casa a la que pertenece:
                  </label>
                  <select
                    name="home"
                    value={formData.home}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    required
                  >
                    <option >Seleccione una casa</option>
                    <option value="marvel">Marvel</option>
                    <option value="dc">DC</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="biografia" className="block mb-2">
                    Biografía:
                  </label>
                  <textarea
                    name="biography"
                    value={formData.biography}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="equipamiento" className="block mb-2">
                    Equipamiento <span className="text-slate-400">(separar por comas)</span>:
                  </label>
                  {/*------------------------------------------------- */}
                  <input
                    type="text"
                    value={Equipment}
                    onChange={handleEquipment}
                    placeholder="item1, item2, etc..."
                    className="border border-gray-300 rounded px-3 py-2  w-full"
                  />
                </div>
                <div className="flex flex-col gap-2">

                  <input type="file" onChange={handleImageUpload}/>

                  <input type="file" onChange={handleImageUpload}/>

                  <input type="file" onChange={handleImageUpload}/>

                </div>
              </section>
            </form>
          </div>
          {/*footer*/}
          <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
              onClick={SendInfo}
              className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Guardar
            </button>
            <button
              onClick={() => handleResetForm()}
              className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
