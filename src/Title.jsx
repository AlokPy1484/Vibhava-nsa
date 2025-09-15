import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
function Title(props){
    // useGSAP(()=>{
    //     //SplitText will split text to line,words,char
    //     let split = SplitText.create(".title", {
    //       type: "lines,words,chars",
    //       //index each word of text
    //       wordsClass: "word++",
    //       //to make each word a CSS variable(defacult class)
    //       propIndex: true,

    //     })
    //     gsap.from(split.chars, {
    //         scrollTrigger:{
    //             trigger:".title",
    //             start:"top 99%",
    //             end:"top 50%",
    //             // scrub:0.2,
    //             markers: true,
    //             toggleActions:"restart complete reverse none"},
    //           yPercent: 300,
    //           opacity: 0,
    //           autoAlpha:0,
    //           //time btw each stagger
    //         //   stagger: 0.5,
    //           stagger: {
    //             amount:0.4,

    //         },
    //           ease:"back.out",
    //           duration:1.2,
    //         //   repeat:-1,
    //         //   yoyo:true
            
    //         });
    //       })

    return(<div className="title">
       <h3 className="title-subtext">{props.subtext}</h3>
       <h1 className="title-title">{props.title}</h1>


    </div>)
}

export default Title;