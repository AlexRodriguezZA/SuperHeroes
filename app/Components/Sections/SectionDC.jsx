"use client"

import HeaderDC from "../Headers/HeaderDC"
import CardList from "../CardList";
import { useState } from "react";

const SectionDC = async ({data}) => {


  const [Heroes, setHeroes] = useState(data)

  return (
    <>
    <section className="mt-5 w-full">
      <HeaderDC/>
    </section>
    <section className="w-full flex flex-col justify-center items-center mt-10 mb-10">
      <CardList heroes={Heroes}/>
    </section>

  </>
  )
}

export default SectionDC