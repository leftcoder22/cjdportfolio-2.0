import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
    pageInfo: PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
        <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5}}


        className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
    <h3 className='absolute top-10 uppercase tracking-[20px] text-gray-500 text-2xl'>
        About
    </h3>

    <motion.img 
    initial={{
        x: -200,
    }}

    transition={{
        duration: 1.2,
    }}

    whileInView={{ opacity: 1, x: 0}}
    viewport={{ once: true}}
    src={urlFor(pageInfo?.profilePic).url()}
    className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-95 xl:w-[500px] xl:h-[600px]' 
    />

    <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here a <span className='underline decoration-[#556b2f]'>little</span> tale
        </h4>
        <p className='text-base'> Im Christopher John, but my friends call me CJ. I will be your guard through
            the wonderful world of mobile and web development. First..let me tell you something
            about me. I was born in New York City, specifically I am Bronx kid. I am huge
            basketball and tech lover. I have been coding for adquitlety for 5 year now. As a
            Full-Stack developer I have worked with both startups straight up to medium sized
            companies to build & scale their companies. Along the journey in life, I quickly r
            realized that helping people understand tech, and helping entrepenuers and businesses
            reach their goals through software.
        </p>
    </div>
    </motion.div>
    )
}