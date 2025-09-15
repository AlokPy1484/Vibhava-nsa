import picture1 from './assets/program-1.jpg'
import picture2 from './assets/program-2.avif'
import picture3 from './assets/program-3.avif'
import picture4 from './assets/program-4.jpg'
import picture5 from './assets/program-5.jpg'
import picture6 from './assets/program-6.jpg'
import icon1 from './assets/icon1.png'
import icon2 from './assets/icon2.png'
import icon3 from './assets/icon3.png'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


function Service(){
    useGSAP(()=>{

        gsap.from(".card", {
            scrollTrigger:{
                trigger:".title",
                start:"top 95%",
                end:"top 13%",
                scrub:0.2,
                skewY:"30",
                // markers: true,
                toggleActions:"restart complete reverse none"},
              y: 500,
            //   opacity: 0,
              autoAlpha:0,
              //time btw each stagger
              stagger: 0.5,
            //   stagger: {
            //     amount:0.4,

            // },
            //   ease:"back.out",
              duration:1,
              skewY:"60",
            //   repeat:-1,
            //   yoyo:true
            
            });
          })
 


    return(
        <div className='services'>
        <div className="container">
            <div className="card">
                <img className='img' src={picture1} alt="profile picture"></img>
                <div className="icon">
                    <img src={icon3} alt="profile picture"></img>
                    <p>Eco Friendly</p>
                </div>
            </div>

            <div className="card">
                <img className='img' src={picture2} alt="profile picture"></img>
                <div className='icon'>
                    <img src={icon2} alt="profile picture"></img>
                    <p>Global Conectivity</p>
                </div>
            </div>

            <div className="card">
                <img className='img' src={picture3} alt="profile picture"></img>
                <div className='icon'>
                    <img src={icon1} alt="profile picture"></img>
                    <p>On Site Assistance</p>
                </div>
            </div>

            

        </div>

    

     


            


        </div>
    );
}

export default Service