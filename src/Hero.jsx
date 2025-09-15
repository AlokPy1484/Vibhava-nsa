import React from 'react';
import arrow from './assets/dark-arrow.png';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from "gsap/SplitText";




function Hero() {

  useGSAP(()=>{
    // const heroSplit = SplitText.create(".hero-title", {
    //   type: "lines",
    //   linesClass: "line",
    //   wordsClass: "word++",
    //   autoSplit: true,});

    //   gsap.from(heroSplit.lines,{
    //     yPercent: 300,
    //     opacity: 0,
    //     duration: 1,
    //     stagger: {
    //       amount:0.2,
    //   },
    // });

    const subtextSplit = SplitText.create(".hero-subtext",{
        type: "lines,words",
        linesClass: "line",
        wordsClass: "word++",
        autoSplit: true,});

    const titleSplit = SplitText.create(".hero-title",{
      type: "lines,words",
      linesClass: "line",
      wordsClass: "word++",
      autoSplit: true,});

      gsap.from(subtextSplit.words,{
        yPercent: 300,
        opacity: 0,
        stagger: {
          amount:0.4,
      },
        delay:0.2,
        duration: 1,
        ease:"back.out",
      });
      gsap.from(titleSplit.words,{
        yPercent: 300,
        opacity: 0,
        stagger: {
          amount:0.5,
      },
        delay:0.2,
        duration: 1,
        ease:"back.out",
      });
    })

    



  return (
    <div className="hero">
        <div className='hero-content'>
        <h1 className='hero-title'>Vibhava</h1>
        <p className='hero-subtext'>Designing and development of a pressure transducer based equipment. </p>
        {/* <button className='btn'>Explore more  
            <img className="arrow" src={arrow} alt=""/>
        </button> */}
        </div>
    </div>
  );
}

export default Hero;
