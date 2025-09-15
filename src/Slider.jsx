import React, { useRef } from 'react'
import next_icon from './assets/next-icon.png'
import back_icon from './assets/back-icon.png'

const Slider = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <div ref={slider}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore nemo, mollitia placeat saepe dolorum aliquam tempora iste possimus pariatur cupiditate molestias praesentium hic delectus quod non recusandae quos ab eaque beatae! Nihil, voluptate repellat! Commodi et voluptas ipsa adipisci corrupti sed hic sequi id, vitae quia est, exercitationem alias. Laudantium quasi saepe reprehenderit, minima optio doloremque ea ducimus eius repellat adipisci dolorum quia quos corporis dolore amet iure sint aliquam deserunt error odio commodi quibusdam. Eaque fuga nemo nesciunt magnam magni assumenda blanditiis, quidem unde voluptatibus voluptate alias nam illum corrupti aliquid, eius laborum dolorem repudiandae officia, ipsum quisquam nostrum! Odit excepturi sint quisquam nesciunt libero aperiam ipsum fugit at earum minus, consequuntur molestiae, corporis distinctio aut, fuga sunt natus obcaecati repellendus? Consequatur tempore id eum repellat possimus debitis dolore quo nisi? Exercitationem quasi distinctio facere, earum odio ad expedita vero magni totam reprehenderit velit. Tempora, beatae. Suscipit, assumenda. Dolor similique, voluptate delectus adipisci quas ducimus, reiciendis assumenda possimus voluptatibus impedit velit. Sit asperiores quam accusantium repudiandae incidunt aliquid dolores fugit similique! Asperiores repellendus inventore rem quas, quaerat dolores aliquid fugiat quos laborum illum dignissimos! Eius, dolorem. Nostrum magnam sed eaque! Distinctio ducimus cupiditate, mollitia exercitationem odio sequi officiis dolorem.</div>
      </div>
    </div>
  )
}

export default Slider
