import CardList from '../CardList'

async function getData() {
  const res = await fetch("http://localhost:5000/getCharacters", {
    cache: "no-store",
  });

  return res.json();
}

const SectionMain = async () => {
  const dataHeroes = await getData();

  return (
    <section className="w-full flex flex-col justify-center items-center mb-10">
        <h2 className="text-5xl mt-8 mb-8 uppercase">Súper Heroes y villanos</h2>
        <CardList heroes={dataHeroes.data} />
    </section>
  )
}

export default SectionMain