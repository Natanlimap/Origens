import Image from "next/image";


export default function Produtos() {
    return (
        <div className='flex flex-col py-20 lg:px-0 px-20' id='Produtos'>
            <Image

                src='/produtos-logo.svg'
                alt="Picture of the author"
                width={100}
                height={100} />
            <div className='lg:py-5 pb-10'></div>
            <Image

                src='/produtos-sal.svg'
                alt="Picture of the author"
                width={300}
                height={180} />
            <div className='text-center lg:mt-10'>
                <p className='font-bold text-lg mb-5' style={{color: '#d44342'}}>FLOR DE SAL</p>
                <p className='font-bold text-lg' style={{color: '#d44342'}}>120g</p>
                <p className='font-thin text-base'>Net Wt. 4,2 oz</p>
            </div>
        </div>
    )
}