
import next_icon from './assets/next-icon.png'
import back_icon from './assets/back-icon.png'
import gallery1 from './assets/gallery-1.png'
import gallery2 from './assets/gallery-2.png'
import gallery3 from './assets/gallery-3.png'
import gallery4 from './assets/gallery-4.png'

import React, { useRef } from 'react'
import './Testimonials.css'



const Gallery = () => {

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
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Pressure Transducer</h3>
                        </div>
                    </div>
                    <p>A pressure transducer converts physical pressure into an electrical signal for measurement or control. It’s used in applications like monitoring fluid or gas pressure in industrial systems, automotive engines, medical devices, and aerospace systems for safety, performance, and process optimization.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Distance Sensor</h3>
                        </div>
                    </div>
                    <p>A distance sensor measures the space between the sensor and an object without contact. It’s used in robotics for navigation, vehicles for collision avoidance, industrial automation for object detection, and consumer electronics for gesture control or proximity-based functions.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>Moinsture Sensor</h3>
                        </div>
                    </div>
                    <p>A moisture sensor measures the water content in soil, air, or materials. It’s widely used in agriculture for irrigation management, industrial processes for quality control, and environmental monitoring to prevent overwatering, detect leaks, and protect structures from moisture-related damage.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <div>
                            <h3>ESP32 Microcontroller</h3>
                        </div>
                    </div>
                    <p>The ESP32 is a low-cost, low-power microcontroller with built-in Wi-Fi and Bluetooth, used for IoT applications, home automation, wearable devices, robotics, and industrial control, enabling wireless communication, data processing, and device integration in compact, energy-efficient, and versatile projects.</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Gallery




