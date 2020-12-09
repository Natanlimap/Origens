

export default function Produtos() {
    return (
        <div id='Produtos'>
            <div className='lg:flex-row justify-center flex flex-col text-center md:mx-40  mx-10'>
                <img className='md:px-96' src='/produtos-logo.svg' />


            </div>
            <div className='lg:flex-row md:mt-0  lg:mx-20 md:px-40   flex flex-col justify-center'>
                <div className='mx-auto mt-5 text-center'>
                    <img className='mt-2 mx-auto lg:px-30 md:px-20 sm:px-30 px-32' src='./produto-azul.png'></img>
                    <p className='mt-5 mx-20 font-light'>Sal marinho moído de <strong className='font-bold'>Mossoró</strong> | Sea Salt</p>
                    <img className='px-24 py-5 ' src='/produto-mais.svg' />
                    <p className='font-bold'>1KG</p>
                    <p className='text-sm'>Net Wt. 35,2 oz</p>
                </div>
                <div className='mx-auto mt-5 text-center'>
                    <img className='mt-2 mx-auto  lg:px-30 md:px-20 sm:px-30 px-32' src='./produto-verde.png'></img>
                    <p className='mt-5 mx-20 font-light'>Sal marinho moído de <strong className='font-bold'>Mossoró</strong> | Sea Salt</p>
                    <img className='px-24 py-5' src='/produto-mais.svg' />
                    <p className='font-bold'>1KG</p>
                    <p className='text-sm'>Net Wt. 35,2 oz</p>
                </div>
                <div className='mx-auto mt-5 text-center'>
                    <img className='mt-2 mx-auto  lg:px-30 md:px-20 sm:px-30 px-32' src='./produto-rosa.png'></img>
                    <p className='mt-5 mx-20 font-light'>Sal marinho moído de <strong className='font-bold'>Mossoró</strong> | Sea Salt</p>
                    <img className='px-24 py-5' src='/produto-puro.svg' />
                    <p className='font-bold'>500g</p>
                    <p className='text-sm'>Net Wt. 17,6 oz</p>
                </div>
            </div>
        </div>
    )
}