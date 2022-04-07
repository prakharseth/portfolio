import React from "react";
import Image from "next/image";
import image1 from "../public/portfolio/1.svg";
import image2 from "../public/portfolio/2.svg";
import image3 from "../public/portfolio/3.svg";
import image4 from "../public/portfolio/4.svg";
import image5 from "../public/portfolio/5.svg";
import image6 from "../public/portfolio/6.svg";
function port() {
  return (
    <div>
      <div className='font-play font-bold text-4xl text-[#FD2155] mt-40'>
        My Portfotlio
      </div>
      <div className='pt-7 font-play uppercase text-sm pr-5'>
        A small gallery of recent{" "}
        <span className='text-[#FD2155]'>projects</span> chosen by me.{" "}
      </div>
      <div className='grid grid-flow-col grid-rows-3 gap-3 pt-10'>
        <a href='https://animania.vercel.app/'>
          <Image src={image1} />
        </a>
        <a href='https://crypto-prakharseth.vercel.app/'>
          <Image src={image2} />
        </a>
        <a href='https://qr-code-component-mocha.vercel.app/'>
          <Image src={image3} />
        </a>
        <a href='https://social-proof-section-master-blush-ten.vercel.app/'>
          <Image src={image4} />
        </a>
        <a href='https://stats-preview-card-component-beta-pink.vercel.app/'>
          <Image src={image5} />
        </a>
        <a href='https://time-tracker-lemon.vercel.app/'>
          <Image src={image6} />
        </a>
      </div>
    </div>
  );
}

export default port;
