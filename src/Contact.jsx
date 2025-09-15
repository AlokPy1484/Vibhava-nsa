import React from 'react'
import instagram_icon from './assets/instagram.png'
import whatsapp_icon from './assets/whatsapp.png'
import discord_icon from './assets/discord.png'
import telegram_icon from './assets/telegram.png'



const Contact = () => {

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Let's Chat </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi amet cumque voluptate nisi minima nulla sequi numquam eum recusandae natus adipisci vitae, laboriosam ab deleniti?</p>
        <div className='icons'>
            <a className='instagram' href=''><img src={instagram_icon} alt="" /></a>
            <a className='whatsapp' href=''><img src={whatsapp_icon} alt="" /></a>
            <a className='discord' href=''><img src={discord_icon} alt="" /></a>
            <a className='telegram' href=''><img src={telegram_icon} alt="" /></a>
        </div>
      </div>
      {/* <hr></hr> */}
      <div className="contact-col">
        <form>
            <label>Enter Email</label>
            <input type="text" name='name' placeholder='Enter your name' required/>
            <label>Write your messages here</label>
            <textarea name="message" rows="6" placeholder='Enter your message' required></textarea>
            <button type='submit' className='btn2'>Submit now</button>
        </form>
      </div>
      
    </div>
  )
}

export default Contact
