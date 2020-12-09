import { useState } from "react";



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
          <a href='/' style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>Origens</p></a>
          <a href='/' style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>Produtos</p></a>
          <a href='/' style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>Loja</p></a>
          <a href='/' style={{ fontSize: '25px'}} className='text-white text-3xl mx-5'><p>Contato</p></a>
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
      <div className='py-5 lg:mx-40 mx-10 flex flex-row justify-between'>
        <div className='lg:w-1/4 '>
          <img className='lg:w-2/4 w-2/4' style={{minWidth: '10px'}} src='./nav-logo.svg'></img>
        </div>
        <div className='hidden md:flex flex-row my-auto'>
          <a href='/' className='text-white mx-5'><p>Origens</p></a>
          <a href='/' className='text-white mx-5'><p>Produtos</p></a>
          <a href='/' className='text-white mx-5'><p>Loja</p></a>
          <a href='/' className='text-white mx-5'><p>Contato</p></a>
        </div>
        <a href='/' className='flex md:hidden' onClick={openNav}><img src='./hamburguer.svg'></img></a>
      </div>
    </div>
  );
}