import Image from "next/image"
import logoMarvel from "../../../assets/Logos/DC_logo.png"

const HeaderDC = () => {
  return (
    <div className='w-full flex flex-col items-center'>
      <picture className="flex justify-center w-5/6">
        <Image src={logoMarvel}  alt="Logo de marvel comics en la seccion de marvel" width={205}/>
      </picture>
      <div className="w-4/5 mt-8 md:w-2/6">
        <input  className="w-full h-8 bg-cyan-950 text-white border drop-shadow-xl rounded-md py-3 px-4 mb-3" type="text" placeholder="Search..."/>
      </div>
    </div>
  )
}

export default HeaderDC