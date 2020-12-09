import { useState } from "react";
import { Link } from "react-scroll";



export default function MyNavbar({ fixed }) {
  const [teste, setTeste] = React.useState(<div></div>)

  function openNav(event) {
    event.preventDefault()
    setTeste(
      <div id='floatSide' style={{backgroundColor: '#0a5c99'}} className='h-screen w-1/2 '>
        <div className='flex flex-row justify-end'>
          <button  onClick={closeNav} className='text-white pr-5 pt-5'>x</button>
        </div>
        <div className='flex text-left flex-col ml-5'>
          <Link to={'Origens'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>Origens</p></Link>
          <Link to={'Produtos'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>Produtos</p></Link>
          <Link to={'Loja'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>Loja</p></Link>
          <Link to={'Contato'} smooth={true} style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>Contato</p></Link>
        </div>
      </div>
    )
  }

  function closeNav() {
    setTeste(
      <div></div>
    )
  }
  return (
    <div>
      {teste}
      <div className='py-10  mx-10 flex flex-row justify-center'>
        <div className='lg:w-1/4 '>
          <img className='lg:w-2/4 w-2/4' style={{minWidth: '10px'}} src='./nav-logo.svg'></img>
        </div>
        <div className='hidden md:flex flex-row my-auto'>
           <Link href='/' to={'Origens'} smooth={true} className='text-white text-xl mx-5'><p>Origens</p></Link>
           <Link href='/' to={'Produtos'} smooth={true} className='text-white text-xl mx-5'><p>Produtos</p></Link>
           <Link href='/' to={'Loja'} smooth={true} className='text-white text-xl mx-5'><p>Loja</p></Link>
           <Link href='/' to={'Contato'} smooth={true} className='text-white text-xl mx-5'><p>Contato</p></Link>
        </div>
        <a className='flex md:hidden' onClick={openNav}><img src='./hamburguer.svg'></img></a>
      </div>
    </div>
  );
}