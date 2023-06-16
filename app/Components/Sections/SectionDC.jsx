import HeaderDC from "../Headers/HeaderDC"
import CardList from "../CardList";
async function getData() {
  const res = await fetch("http://localhost:5000/getDCs", {
    cache: "no-store",
  });

  return res.json();
}
const SectionDC = async () => {
  const dataHeroesDC = await getData();

  return (
    <>
    <section className="mt-5 w-full">
      <HeaderDC/>
    </section>
    <section className="w-full flex flex-col justify-center items-center mb-10">
    <CardList heroes={dataHeroesDC}/>
    </section>

  </>
  )
}

export default SectionDC