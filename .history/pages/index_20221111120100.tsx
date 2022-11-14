/* eslint-disable @next/next/no-img-element */
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Header from '../components/Header'
import Hero from '../components/Hero'
import styles from '../styles/Home.module.css'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Link from 'next/link'

type Props = {
 
}

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory 
    overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#556f2b]'>
      <Head>
        <title>Christopher Johns Portfolio</title>
      </Head>

      <Header />

      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      <section id='about' className='snap-center'>
      <About />
      </section>

      <section id='workexperience' className='snap-center'>
      <WorkExperience />
      </section>

      <section id='skills' className='snap-start'>
      <Skills />
      </section>

      <section id='projects' className='snap-start'>
        <Projects />
      </section> 

      <Link href="#hero">
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
                className=' h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer'
                src="https://i.imgur.com/e2yvD6A.png"
                alt=''
             />
          </div>
        </footer>
      </Link> 
    </div>
  )
};

export default Home;
