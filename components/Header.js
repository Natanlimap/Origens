import Image from "next/image";
import MyNavbar from "./nav";


export default function Header(){
    return(
        <div className='md:h-screen' >
            <MyNavbar></MyNavbar>
           <img  id='image-web' className='sm:block hidden h-full w-screen' src='./header-background.svg'></img>
           <img className='sm:hidden block w-screen ' src='./header-background-mobile.svg'></img>

        </div>
    )
}