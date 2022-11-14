
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#556f2b]'>
      <Head>
        <title>Christopher Johns Portfolio</title>
      </Head>

      <Header />

      <section id='about' className='snap-start'>
        <Hero />
      </section>
    </div>
  )
}
