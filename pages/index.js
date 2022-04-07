import Head from "next/head";
import Hero from "./Hero";
import Port from "./port";
import Aboutme from "./Aboutme";
// import Image from 'next/image'
// import p from "..public/p.png";
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>PS || Front-End Developer</title>
        <link rel='icon' type='image/png' href='/p.png' />
      </Head>
      <div className='bg-[#FFFFFF] text-black flex flex-col justify-center px-5 '>
        <Hero />
        <Port />
        <Aboutme />
      </div>
    </>
  );
}
