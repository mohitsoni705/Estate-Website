import React from 'react'

const ContactForm = () => {
  return (
   <div className="container-form">
    <div className="about">
        <div className='flex-row'>
        <h1>Contact</h1>
        <p className='underline'>With Us</p>
        </div>
        <div>
        <p className='about-para'>Ready to Make a Move? Let’s Build Your Future Together</p>
        </div>
      </div>
    <div>
    <form>
  <div className="input-row">
    <input type="text" placeholder="Your Name" />
    <input type="email" placeholder="Your Email" />
  </div>
  <input type="text" placeholder="Your Message" className="message-box" />
  <button className="btn-2" type="submit">Send Message</button>
</form>
    </div>
   </div>
  )
}

export default ContactForm
