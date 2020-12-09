import Image from "next/image";

export default function Loja() {
    return (
        <div id='Loja' className='flex flex-wrap-reverse flex-row justify-center text-center py-10'>
            <Image
                
                src='/loja-produtos.svg'
                alt="Picture of the author"
                width={400}
                height={400} />
            <div className='lg:w-1/4 lg:mx-20 md:mx-28 sm:mx-28 mx-10 my-auto'>
                <Image src='/loja-logo.svg' width={300} height={ 130}/>
                <p style={{ color: '#525252' }} className='lg:text-justify text-center pb-10 lg:pb-0 md:text-base text-base'>Além de supermercados e lojas especializadas em todo o país você pode encomendar nosso Flor de Sal e todos os produtos Maranata Premium para receber em casa.</p>
            </div>
        </div>
    )
}