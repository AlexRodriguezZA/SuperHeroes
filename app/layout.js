"use client"
import './globals.css'
import ButtonAdd from './Components/ButtonAdd'
import Navigation from './Components/Navigation'
import Modal from './Components/FormAddNew'
import { Passion_One } from 'next/font/google';
import { usePathname } from 'next/navigation'

// If loading a variable font, you don't need to specify the font weight
const font = Passion_One({ subsets: ['latin'], weight: ["400","700","900"]});


export default function RootLayout({ children }) {
  const pathname = usePathname()
  // const page_name = path.basename(pathname);
  // console.log(page_name)
  return (
    <html lang="en" >
      <body className={font.className} >
        <header className='w-full'>
          <Navigation/>
        </header> 
        {children} 
      {
        pathname === "/AddNew" ? null : <ButtonAdd/> 
      }
      </body>
    </html>
  )
}
