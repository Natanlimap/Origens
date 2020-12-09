import Contato from '../components/Contato'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Loja from '../components/Loja'
import Origens from '../components/Origens'
import Produtos from '../components/Produtos'
import Sal from '../components/Sal'

export default function IndexPage() {
  return (
    <div className='w-screen body'>
      <Header/>
      <Origens />
      <Sal />
      <Produtos />
      <Loja />
      <Contato />
      <footer id='Footer' className='flex flex-row justify-center'>
        <img style={{width: '5rem'}} className='py-5 my-auto'  src='./agencia.svg'></img>
      </footer>
    </div>
  )
}
