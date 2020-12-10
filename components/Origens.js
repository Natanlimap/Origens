import Image from "next/image";


export default function Origens() {
    return (
        <div id='Origens-fundo' >
            <div className='md:pt-10 pt-40' id='Origens'>
                <div className='lg:grid lg:grid-cols-7 lg:grid-cols-7   flex flex-row justify-center text-center' >
                    <div className='xl:col-start-5 lg:col-start-4 lg:col-end-8  md:col-end-7 lg:pt-0 md:pt-32 md:mt-0  mt-20 mt-10'>
                        <Image
                            src='/origens-logo.svg'
                            width={300}
                            height={100}
                        ></Image>
                        <div className='lg:mt-5 lg:text-lg mx-10 text-justify text-white text-base '>
                            <p className=''>Origens traz em seu nome sua razão de existir que é procurar nas fontes mais nobres um sal com sabor e qualidade que, diferentemente do sal comum, não precisa passar pelo processo de refinamento que tira os minerais tão importantes do sal.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}