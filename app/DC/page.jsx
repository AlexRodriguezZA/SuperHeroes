import React from 'react'
import SectionDC from '@/app/Components/Sections/SectionDC'

async function getData() {
  const res = await fetch("http://localhost:5000/getDCs", {
    cache: "no-store",
  });

  return res.json();
}
const page = async () => {
  const { data } = await getData();

  return (
    <div>
      <SectionDC data={data}/>
    </div>
  )
}

export default page