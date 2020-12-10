import Image from "next/image";


export default function Sal() {
    return (
        <div id='Sal' className='h-screen pt-40'>
            <div className='xl:mx-40 lg:mx-10 md:mx-40 flex flex-col justify-center pt-0 mx-10'>
                <div className='flex flex-col justify-center'>
                    <img id='Origens-sal-duplo-mobile' className='md:p-0 sm:mt-5 pt-10 pb-4' src='/sal-produto-duplo.svg'></img>

                    <img className='text-center lg:mx-60' src='/sal-mesa.svg'></img>

                    <div className='flex flex-row justify-around'>
                        <div id='Origens-sal-duplo-web' className='lg:ml-16'></div>
                        <div className=' lg:w-3/4 flex flex-col lg:my-auto'>
                            <p className='lg:text-xl lg:text-justify text-white py-5 text-sm text-center'>O Sal Marinho, produzido com uma técnica exclusiva em Mossoró, é seco naturalmente no sol e em seu processo diferenciado consegue preservar cerca de 80 minerais, entre eles cloreto, cálcio, potássio, ferro, magnésio e o tão importante iodo. Essa variedade de minerais faz do Sal Marinho uma opção e tanto pra quem quer mais saúde na mesa.</p>
                            <div className='border mt-2'>
                                <p className='lg:text-xl lg:p-5 text-white text-center text-sm p-2'>Para mantê-lo conservado por mais tempo e evitar desperdícios é ideal manter em local fechado, seco, arejado e longe do sol e umidade.</p>
                            </div>
                        </div>
                        <div className='lg:w-full' id='Origens-sal-duplo-web'>
                            <img src='/sal-produto-duplo.svg'></img>
                        </div>
                    </div>
                </div>

                {/* MODERACAO */}
                <div className='lg:flex-row md:mt-20 flex flex-col text-center mt-5 mx-10'>
                    <div id='Origens-sal-duplo-web' className='xl:w-0'></div>
                    <div className='lg:w-1/4'>
                        <img className='mr-10' src='/sal-moderacao.svg' />
                    </div>
                    <p className='lg:my-auto lg:w-2/4 lg:text-xl lg:ml-10 xl:mt-10  md:mt-0  lg:text-justify text-white text-sm' >Nosso Sal Marinho não passa pelo processo de refinamento o que conserva muito mais minerais e é ideal para usar em preparos.</p>

                   
                </div>
                <div className='lg:flex-row md:mt-10  lg:mx-20 flex flex-col justify-center'>
                        <div className='mx-auto mt-5 text-center'>
                            <p style={{ color: '#f3e2d2' }} className=' font-bold text-xl'>Carnes e Aves</p>
                            <img className='mt-2  lg:px-10 md:px-24 sm:px-10 px-14' src='./sal-carne.svg'></img>
                        </div>
                        <div className='mx-auto mt-5 text-center'>
                            <p style={{ color: '#f3e2d2' }} className=' font-bold text-xl'>Peixes</p>
                            <img className='mt-2 lg:px-10 md:px-24 sm:px-10 px-14' src='./produtos-peixe.svg'></img>
                        </div>
                        <div className='mx-auto mt-5 text-center'>
                            <p style={{ color: '#f3e2d2' }} className=' font-bold text-xl'>Verduras e Legumes</p>
                            <img className='mt-2 lg:px-10 md:px-24 sm:px-10 px-14' src='./produtos-verdura.svg'></img>
                        </div>
                    </div>
            </div>

            {/* Parte rosa */}
            <div className='xl:mx-40 lg:mx-10 lg:pt-20 md:mx-40 flex flex-col justify-center pt-0 mx-10'>
                <div className='flex flex-col justify-center'>
                    <img id='Origens-sal-duplo-mobile' className='md:p-0 sm:mt-5 pt-5 pb-4' src='/sal-duplo-rosa.svg'></img>

                    <Image width={500} height={200} className='text-center lg:mx-80' src='/sal-rosa.svg'></Image>

                    <div className='flex flex-row justify-around'>
                        <div id='Origens-sal-duplo-web' className='lg:ml-16'></div>
                        <div className='lg:w-full' id='Origens-sal-duplo-web'>
                            <Image height={500} width={600} src='/sal-duplo-rosa.svg'></Image> 
                        </div>
                        <div className=' lg:w-3/4 flex flex-col lg:my-auto'>
                            <p className='lg:text-xl lg:text-right text-white py-5 text-sm text-center'>O Sal Rosa verdadeiro vem direto das  cadeias montanhosas localizadas no Himalaia. Contém até 84 minerais entre eles sódio, cloreto, cálcio, potássio, ferro, magnésio e o tão importante iodo. Essa variedade de minerais faz com que o sal rosa seja considerado um dos mais saudáveis</p>
                        </div>
                        
                    </div>
                </div>

                {/* MODERACAO */}
                <div className='lg:flex-row flex flex-col text-center mt-5 mx-10'>
                    <div id='Origens-sal-duplo-web' className='xl:w-1/6'></div>
                    <div className='lg:w-1/4'>
                        <img className='mr-10' src='/sal-moderacao.svg' />
                    </div>
                    <p className='lg:my-auto lg:w-2/4 lg:text-xl lg:ml-10 xl:mt-10  md:mt-0  lg:text-justify text-white text-sm' >Para manter todos os nutrientes concentrados no seu prato recomendamos o sal rosa do himalaia para:</p>

                   
                </div>
                <div className='lg:flex-row lg:mt-20 lg:mx-20 flex flex-col justify-center'>
                        <div className='mx-auto mt-5 text-center'>
                            <p style={{ color: '#f3e2d2' }} className=' font-bold text-3xl'>Temperar</p>
                            <p style={{ color: '#f3e2d2' }} className=' text-xl'>saladas</p>
                            <img className='mt-2 lg:px-10 md:px-24 sm:px-10 px-14' src='./produtos-salada.svg'></img>
                        </div>
                        <div className='mx-auto mt-5 text-center'>
                            <p style={{ color: '#f3e2d2' }} className=' font-bold text-3xl'>Fazer</p>
                            <p style={{ color: '#f3e2d2' }} className=' text-xl'>molhos</p>
                            <img className='mt-2 lg:px-10 md:px-24 sm:px-10 px-14' src='./produtos-molhos.svg'></img>
                        </div>
                        <div className='mx-auto mt-5 text-center'>
                            <p style={{ color: '#f3e2d2' }} className=' font-bold text-3xl'>Finalizar</p>
                            <p style={{ color: '#f3e2d2' }} className=' text-xl'>pratos</p>
                            <img className='mt-2 lg:px-10 md:px-24 sm:px-10 px-14' src='./produtos-finalizar.svg'></img>
                        </div>
                    </div>
            </div>
        </div>
    )
}