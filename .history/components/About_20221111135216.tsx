import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'

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
    src='https://scontent-sin6-4.xx.fbcdn.net/v/t1.18169-9/10264828_10153304215223359_3522408088836776415_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_ohc=XyUtZKHRxbcAX8mIXCI&_nc_ht=scontent-sin6-4.xx&oh=00_AT-Ql4xAsAOiHHYEr7fUlASL8m88cG4rTuqQpYbOjDS32g&oe=637BCEF0'
    className='mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:h-95 xl:w-[500px] xl:h-[600px]' 
    />

    <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4xl font-semibold'>Here a <span className='underline decoration-[#556b2f]'>little</span> tale
        </h4>
        <p className='text-base'>
            {pageInfo?.backgroundInformation}
        </p>
    </div>
    </motion.div>
    )
}