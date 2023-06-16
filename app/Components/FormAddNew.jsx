"use client";

import { useState } from "react";
import ErrorForm from "./ErrorForm";
import { addNewHeroe } from "@/utils/addNewHeroe";




export default function FormAddNew() {
   const [Error, setError] = useState(false);
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

  const SendInfo = async (event) => {
    if (
      formData.name === "" ||
      formData.nameCharacter === "" ||
      formData.biography === "" ||
      formData.home === "" ||
      formData.year === 0 ||
      formData.equipment.length > 0
    ) {
      setError(true);
      return;
    }
    const NewArrayEquipment = Equipment.replace(/ /g, "").split(","); //Eliminamos espacios en blanco y transformmos en array
    formData.equipment.push(...NewArrayEquipment);
    formData.imagesPath.push(...Images)
    console.log(formData)
    await addNewHeroe(formData);
    handleResetForm()
    setError(false);
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
            {Error && <ErrorForm />}
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
                    id="casa"
                    name="home"
                    value={formData.home}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    required
                  >
                    <option value="">Seleccione una casa</option>
                    <option value="marvel">Marvel</option>
                    <option value="dc">DC</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="biografia" className="block mb-2">
                    Breve Biografía:
                  </label>
                  <textarea
                    id="biografia"
                    name="biography"
                    value={formData.biography}
                    onChange={handleInputChange}
                    className="border border-gray-300 rounded px-3 py-2 w-full"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="equipamiento" className="block mb-2">
                    Equipamiento:
                  </label>
                  {/*------------------------------------------------- */}
                  <input
                    type="text"
                    id="equipamiento"
                    value={Equipment}
                    onChange={handleEquipment}
                    placeholder="item1, item2, etc..."
                    className="border border-gray-300 rounded px-3 py-2  w-full"
                  />
                </div>
                <div className="mb-2 flex flex-col gap-2">
                  {/* <label
                        htmlFor="cantidadImagenes"
                        className="block font-medium mb-2"
                      >
                        Cargar Imágenes:
                      </label>

                      {Array.from(
                        { length: imageInputCounter.current },
                        (_, index) => (
                          <input key={index} type="file" />
                        )
                      )}

                      <div className="w-full flex justify-end mt-1 gap-2">
                        <ButtonAddMoreImage add={addimageInput} />
                        <ButtonRestImage
                          rest={restimageInput}
                          CantidadInputImagenes={imageInputCounter.current}
                        />
                      </div>*/}
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
              Save
            </button>
            <button
              onClick={() => handleResetForm()}
              className="bg-red-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-3 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </>
  );
}