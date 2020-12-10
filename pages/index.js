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
      <a href="https://api.whatsapp.com/send?phone=+558434220100" class="float" target="_blank">
        <i class="my-float"><img src='./wpp.png'></img></i>
      </a>
      <div style={{backgroundColor: '#086aa0'}}>
        <Header />
        <div style={{backgroundColor: '#086aa0'}}>
          <Origens />
          <div style={{backgroundColor: '#fbe4d3'}}>
            <Sal />
            <div style={{backgroundColor: '#fbe4d3'}}>
              <Produtos />
              <div style={{backgroundColor: '#fbe4d3'}}>
                <Loja />
                <Contato />
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer id='Footer' className='flex flex-row justify-center'>
        <img style={{ width: '5rem' }} className='py-0 my-auto' src='./agencia.svg'></img>
      </footer>
    </div>
  )
}
