"use client"
import Image from 'next/image'
import React, { useEffect } from 'react'
import video from "@/app/about/image/video.png"
import Link from "next/link";
import { FaPlay } from "react-icons/fa";
import Aos from 'aos';
const Video = () => {
    useEffect(()=>{
           Aos.init(
            {
                duration: 1000,
                easing:"ease"
            }
           )
          }, [])
  return (
    <div className='mb-[50px] md:mb-[100px]'>
        <div className="container">
   
                <div className='relative'  data-aos="zoom-in-up"
            data-aos-delay="300">
                    <Image src={video} alt='video' className='rounded-[15px]'/>
                    <div className='w-[90px] h-[90px] bg-[#FF9330] group cursor-pointer hover:bg-[#FFB646] rounded-full flex items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]
                    hover:scale-105'>
                   
                        <FaPlay className='text-[20px] font-bold group-hover:text-white'/>
                    <Link href={"/"}/>
                    
                    </div>
                </div>
          
        </div>
    </div>
  )
}

export default Video