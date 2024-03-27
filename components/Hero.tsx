import Image from 'next/image'
import React from 'react'
import Button from './Button'
import StudentImage from '../public/student-photo.png'
import Link from 'next/link'
import "../app/globals.css"


const Hero = () => {
  return (
    <section
        className='max-container 
        padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row'
    >
        <div className='hero-map'></div>
        

    {/* LEFT */}
        <div className='relative z-20 flex flex-1 flex-col xl:w-1/2'>
            {/* <Image 
                src="/camp.svg"
                alt='camp'
                width={50}
                height={50}
                className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
            /> */}

            <h1 className='bold-52 lg:bold-88 text-white'>
            <span className="text-pink-10">Learning </span>is the only <span className="text-orange-10">Way Ahead</span></h1>
            <p className='regular-16 mt-6 text-gray-30 xl:max-w-[520px]'>
            <span>The function of education is to teach one to think intensively and to think critically. Intelligence plus character - that is the goal of true education.</span><br/><span className='text-gray-40'> - Martin Luther King Jr.</span>
            </p>

            <Link href="/dynamiccontent/LoginFlow"  className='flex  w-full gap-3 mt-6 sm:flex-row'>
                <Button 
                    type='button'
                    title='Explore Programs'
                    variant='btn_pink_orange'
                    
                />
            </Link>
            
           
        </div>

        {/* RIGHT */}


        <div className='relative flex flex-1 items-start'>
            <div className='h-full relative z-20  flex-col gap-8 rounded-3xl px-7 py-8 '>
                    <Image
                        src={StudentImage}
                        alt="map"
                         width={3500}
                         height={3500}
                    />
            </div>
        </div>
    </section>
  )
}

export default Hero