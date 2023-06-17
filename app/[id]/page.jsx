import CardDetail from "../Components/Cards/CardDetail";

async function getDataHeroe(id) {
  const res = await fetch(`http://localhost:5000/getCharacter/${id}`, {
    cache: "no-store",
  });

  return res.json();
}
const page = async ({ params }) => {
  const { id } = params;
  const heroe = await getDataHeroe(id);

  return (
    <div className="w-full flex justify-center">
      <CardDetail heroe={heroe.data} />
    </div>
  );
};

export default page;
