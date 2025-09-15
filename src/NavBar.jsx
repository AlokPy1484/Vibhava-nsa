import React,{useState,useEffect} from 'react';
import logo from './assets/logo.png'
import menu_icon from './assets/menu-icon.png'
import {Link} from 'react-scroll';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';


function NavBar(){

    useGSAP(()=>{
        var tl = gsap.timeline();
        gsap.from(".logo",{
            y:-50,
            opacity:0,
            delay:0.2,
            duration:1,
            ease:"back.out",
        })
        tl.from("#stag",{
            y:-50,
            opacity:0,
            delay:0.2,
            duration:1,
            stagger: {
                amount:0.3,
            },
            ease:"back.out",
        })
        

        
    })

    const [sticky, setSticky] = useState(false);

    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            window.scrollY > 650 ? setSticky(true)  : setSticky(false);
            console.log(window.scrollY)
        
        })
    },[]);

    const [mobileMenu, setMobileMenu] = useState(false);
    const toggleMenu = ()=>{
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
    }



    return(
            <nav className={`navBar ${sticky? 'dark-nav' : ''}`}>
                <img className="logo"src={logo} alt=""/>
                <ul className={mobileMenu?'':'hide-mobile-menu'}>
                    <li><a id="stag" className='listItems' href=""><Link to='hero' smooth={true} offset={0} duration={1500}>Home</Link></a></li>
                    <li><a id="stag" className='listItems' href=""><Link to='services' smooth={true} offset={-230} duration={1500}>Services</Link></a></li>
                    <li><a id="stag" className='listItems' href=""><Link to='about-container' smooth={true} offset={-180} duration={1500}>About Us</Link></a></li>
                    <li><a id="stag" className='listItems' href=""><Link to='gallery' smooth={true} offset={-200} duration={1500}>Gallery</Link></a></li>
                    <li><a id="stag" className='listItems' href="">Testinonials</a></li>
                </ul>
                <button id="stag" className="btn"><Link to='contact' smooth={true} offset={0} duration={1500}>Contact us</Link></button>
                <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu}/>
            </nav>
    );
}

export default NavBar