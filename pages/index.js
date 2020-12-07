import Artesanal from '../components/Artesanal'
import Contato from '../components/Contato'
import Loja from '../components/Loja'
import Nav from '../components/nav'

export default function IndexPage() {
  return (
    <div className='w-screen'>
      <Nav />
    
      <Artesanal/>
      <Loja/>
      <Contato/>
    </div>
  )
}
