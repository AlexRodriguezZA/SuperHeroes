import React from 'react'
import HeaderMarvel from '../Headers/HeaderMarvel'
import CardList from '../CardList';


async function getData() {
  const res = await fetch("http://localhost:5000/getMarvels", {
    cache: "no-store",
  });

  return res.json();
}
const SectionMarvel = async() => {
  const dataHeroesMarvel = await getData();

  return (
    <>
      <section className="mt-5 w-full">
        <HeaderMarvel/>
      </section>
      <section className="w-full flex flex-col justify-center items-center mt-10 mb-10" >
      <CardList heroes={dataHeroesMarvel}/>
      </section>
    </>
  )
}

export default SectionMarvel