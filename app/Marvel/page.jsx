import React from 'react'
import SectionMarvel from '@/app/Components/Sections/SectionMarvel'

async function getData() {
  const res = await fetch("http://localhost:5000/getMarvels", {
    cache: "no-store",
  });

  return res.json();
}

const page =async () => {
  const { data } = await getData();

  return (
    <section className='w-full'>
      <SectionMarvel data={data}/>
    </section>
  )
}

export default page