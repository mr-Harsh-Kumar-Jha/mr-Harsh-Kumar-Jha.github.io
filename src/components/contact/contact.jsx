import React, { useRef } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FiInstagram } from 'react-icons/fi'
import { BsWhatsapp } from 'react-icons/bs';
import emailjs from 'emailjs-com';

import './contact.css';

const Contact = ({innerRef}) => {
   const form = useRef();

   const sendEmail = (e) => {
      e.preventDefault();
      emailjs.sendForm('service_gpd9lak', 'template_bokbvqx', form.current, 'nwmYuM79B7Qhcrk7G')
      e.target.reset();
   }
   return (
      <section id='contact' ref={innerRef}>
         <h5>Get In Touch</h5>
         <h2>Contact Me</h2>

         <div className="container contact__container">
            <div className="contact__options">
               <article className="contact__option">
                  <MdOutlineEmail className="contact__option-icon" />
                  <h4>Email</h4>
                  <h6>jhaharsh878@gmail.com</h6>
                  <a href="mailto:jhaharsh878@gmail.com" rel="noreferrer" target="_blank">Send a message</a>
               </article>
               <article className="contact__option">
                  <FiInstagram className="contact__option-icon" />
                  <h4>Instagram</h4>
                  <h6>_mr_h_a_r_s_h_j_h_a</h6>
                  <a href="https://www.instagram.com/_mr_h_a_r_s_h_j_h_a" rel="noreferrer" target="_blank">Send a message</a>
               </article>
               <article className="contact__option">
                  <BsWhatsapp className="contact__option-icon" />
                  <h4>WhatsApp</h4>
                  <h6>+91 9075840173</h6>
                  <a href="https://api.whatsapp.com/send?phone=9075840173" rel="noreferrer" target="_blank">Send a message</a>
               </article>
            </div>
            {/*End of Contact Options*/}
            <form ref={form} onSubmit={sendEmail}>
               <input type="text" name="name" placeholder='your full name' required />
               <input type="email" name="email" placeholder='xyz@example.com' required />
               <textarea name='message' rows='7' placeholder='Message' required></textarea>
               <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
         </div>
      </section>)
}

export default Contact