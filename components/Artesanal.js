import Image from 'next/image'

export default function Artesanal() {
    return (
        <div id='Artesanal' className='flex flex-wrap-reverse flex-row justify-center text-center'>
            <Image
                className='lg:mx-20'
                src='/artesanal-sal.svg'
                alt="Picture of the author"
                width={400}
                height={400} />
            <div className='lg:w-1/4 lg:mx-20 md:mx-28 sm:mx-28 mx-10 my-auto'>
                <Image src='/artesanal.svg' width={300} height={130} />
                <p style={{ color: '#525252' }} className='lg:text-justify text-center pb-10 lg:pb-0 md:text-base text-sm'>A flor de sal traz realce de sabor através de um processo artesanal que retira uma finíssima película de cristais de sal que se forma na superfície das salinas de Mossoró, levando o requinte da alta cozinha para sua mesa.</p>
            </div>
        </div>
    )
}