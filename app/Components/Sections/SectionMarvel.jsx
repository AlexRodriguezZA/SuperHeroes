"use client"

import React from 'react'
import HeaderMarvel from '../Headers/HeaderMarvel'
import CardList from '../CardList';

import { useState } from 'react';



const SectionMarvel = async({data}) => {
  const [Heroes, setHeroes] = useState(data)

  const handlerSearch = (search) => {
    if (!search) {
      setHeroes(dataHeroesDC.data);

    } else {

      setTimeout(() => {
        const filteredData = dataHeroesDC.data.filter((item) => {
          console.log(filteredData)
        });

        setHeroes(filteredData);
      }, 500); 
    }
  };
  return (
    <>
      <section className="mt-5 w-full">
        <HeaderMarvel/>
      </section>
      <section className="w-full flex flex-col justify-center items-center mt-10 mb-10" >
        <CardList heroes={Heroes}/>
      </section>
    </>
  )
}

export default SectionMarvel