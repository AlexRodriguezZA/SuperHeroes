"use client";

import Image from "next/image";
import IronMan from "../../assets/Static_images/Iron-man.png";
import batman from "../../assets/Static_images/Batman.png";
import drStrange from "../../assets/Static_images/DrStrange.png";
import { motion } from "framer-motion";

const MainBanner = () => {
  return (
    <div className="w-full h-full flex justify-center bg-gradient-to-r from-indigo-950 to-indigo-700">
      <div className="w-11/12 flex justify-center m-10">
        <section className="w-4/12 h-full">
          <motion.div
            initial={{ x: -200 }} // Posición inicial de la imagen (fuera de la pantalla a la izquierda)
            animate={{ x: 0 }} // Posición final de la imagen (en el centro de la pantalla)
            transition={{ duration: 0.8 }} // Duración de la transición en segundos
          >
            <Image src={IronMan} alt="Iron main image" height={500} />
          </motion.div>
        </section>
        <section className="w-4/12 flex flex-col items-center">
          <h1 className="text-center text-6xl font-bold text-yellow-400 my-5 uppercase">Super Info</h1>
          <p className="mt-10 text-center text-lg text-cyan-50">
            La mejor información de los super heroes y villanos de DC comics y Marvel en un solo lugar
          </p>

          <picture className="w-full mt-16">
            <motion.div
              initial={{ y: 40 }}   // Opacidad y posición inicial de la imagen
              animate={{ y: [-10, 10] }}  // Opacidad y posición final de la imagen (de -50 a 50)
              transition={{
                duration: 5,
                repeat: Infinity,  // Hace que la animación se repita infinitamente
                repeatType: "reverse",  // Invierte la dirección del movimiento al reiniciar
                ease: "easeInOut" // Tipo de easing para suavizar el movimiento
              }}
            >
              <Image src={drStrange} alt="Dr strange" height={300} />
            </motion.div>
          </picture>
        </section>
        <section className="w-4/12 h-full">
          <motion.div
            initial={{ x: 400 }} // Posición inicial de la imagen (fuera de la pantalla a la izquierda)
            animate={{ x: 0 }} // Posición final de la imagen (en el centro de la pantalla)
            transition={{ duration: 0.8 }} // Duración de la transición en segundos
          >
            <Image src={batman} alt="Iron main image" height={500} />
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default MainBanner;
