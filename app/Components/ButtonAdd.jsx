"use client"
import { useRouter } from 'next/navigation';


const ButtonAdd = () => {
  const router = useRouter();

  return (
    <div className="fixed bottom-4 right-2">
      
      <button onClick={() => router.push('/AddNew')} className="bg-black hover:bg-blue-950 text-cyan-100 font-bold py-2 px-4 rounded">
        + Add new
      </button>
    </div>
  );
};

export default ButtonAdd;
