import React, {useState} from 'react';
import VideoPlayer from './videoPlayer.jsx'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import SplitText from "gsap/SplitText";

function About(){
    useGSAP(()=>{
        //SplitText will split text to line,words,char
        let split = SplitText.create(".about p", {
          type: "lines",
          //index each word of text
          wordsClass: "word++",
          //to make each word a CSS variable(defacult class)
          propIndex: true,

        })

          gsap.from(split.lines, {
            scrollTrigger:{
                trigger:".about p",
                start:"top 90%",
                end:"top 50%",
                scrub:0.5,
                // markers: true,
                toggleActions:"resume pause resume pause"},
              xPercent: 100,
              opacity: 0,
              autoAlpha:0,
              //time btw each stagger
            //   stagger: 0.5,
              stagger: {
                amount:0.2,


            },
            //   ease:"back.in",
              duration:1,
            // //   repeat:-1,
            //   yoyo:true
            
            });
            gsap.from("#videoPlayer", {
                scrollTrigger:{
                    trigger:".about p",
                    start:"top 90%",
                    end:"top 50%",
                    scrub:0.5,
                    // markers: true,
                    toggleActions:"resume pause resume pause"},
                  xPercent: -100,
                  opacity: 0,
                  autoAlpha:0,
                  skewX:"-30",
                  //time btw each stagger
                //   stagger: 0.5,
                  stagger: {
                    amount:0.2,
    
    
                },
                //   ease:"back.in",
                  duration:1,
                // //   repeat:-1,
                //   yoyo:true
                
                });
          })

const[readMore,setReadMore] = useState(false);

const handleReadMore=()=>{
    readMore?setReadMore(r => false):setReadMore(r => true);
    ;
}

    return(
        <div className='about-container'>
        <div id="videoPlayer">
            <VideoPlayer/>
        </div>
        <div className="about">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti natus corporis repudiandae maiores voluptatibus, unde dolorum perferendis aliquam cupiditate nobis labore aperiam placeat tempora voluptatem incidunt tenetur architecto debitis ad culpa corrupti porro doloremque molestias! Aspernatur culpa in, libero ut iste reiciendis voluptas nesciunt. Quia, nulla corrupti? Saepe odit nisi nulla sunt, facere aut sit odio, tenetur ad explicabo accusantium sed. Inventore totam pariatur, quaerat libero aperiam voluptatem exercitationem. Veniam ipsam laboriosam, commodi ipsa asperiores nisi cumque, similique voluptates atque recusandae nihil beatae animi nulla, repudiandae maxime magni. Quod cupiditate eligendi autem, facere eaque temporibus magni nemo? Dolor, eius odit?
                </p>
                <button className='btnH' onClick={handleReadMore}>Learn More</button>
            <p className={`aboutHidden${readMore? 'about' : ''}`}> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique, facilis accusantium est minus vitae quasi molestiae corporis sit? Blanditiis quos, itaque deleniti voluptatibus earum aut tempora praesentium perferendis! Animi, et? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni eaque iusto dolor sapiente maiores doloremque</p>
        </div>
        </div>
    )
}

export default About;