import React from "react";
function Hero() {
  return (
    <div className='mb-12  mt-32 '>
      {/* h1 */}
      <div>
        <div className='tag '>{"<h1>"}</div>
        {/* <Image src={p} /> */}
        <div className='me pl-5 text-4xl '>
          Hi,{" "}
          <div className=''>
            I’m <span className='plogo '>P</span>rakhar,
          </div>{" "}
          Web Developer
        </div>
        <div className='tag text-right pr-5'>{"</h1>"}</div>
      </div>

      {/* p1 */}
      <div>
        <div className='tag pt-2 pb-1'>{"<p>"}</div>
        <div className='font-open px-5 text-base text-[#808080] font-light'>
          Front-end Developer
        </div>
        <div className='tag pt-2'>{"</p>"}</div>
      </div>
      <button className='mt-8 tracking-widest w-36 border text-center border-[#05FDD8] hover:fill-slate-500'>
        <a href='mailto:sethprakhar12@gmail.com'>
          <div className='font-open text-sm text-[#05FDD8] px-4 py-1'>
            Contact me !
          </div>
        </a>
      </button>
      <div className='-left-5 absolute text-xs font-play top-[35rem] rotate-90 animate-pulse	'>
        Scroll Down
      </div>
      <div className='-right-5 absolute text-xs font-play top-[35rem] rotate-90 animate-pulse	'>
        Scroll Down
      </div>
    </div>
  );
}

export default Hero;
