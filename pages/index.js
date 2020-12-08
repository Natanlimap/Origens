import Artesanal from '../components/Artesanal'
import Contato from '../components/Contato'
import Loja from '../components/Loja'
import Nav from '../components/nav'
import Produtos from '../components/Produto'

export default function IndexPage() {
  return (
    <div className='w-screen body'>
      <Nav />
    
      <Artesanal/>
      <Produtos/>
      <Loja/>
      <Contato/>
    </div>
  )
}
