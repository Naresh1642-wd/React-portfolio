import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import "./contact.css"

const Contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_os79ywg', 'template_jfqwjj5', form.current, 'PrMTLLKEGa0XuTBTI')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      };

  return (
<section className="contact" id="contact">
        <div className="heading">
            <h2>Contact</h2>
        </div>
        <div className="contact-form">
                <form ref={form} onSubmit={sendEmail} action="" className='form'>
                <input type="text" placeholder="Your Name" name="user_name"required/>
                <input type="email" name="user_mail" id="" placeholder="Your Email" required/>
                <textarea name="user_message" id="" cols="30" rows="10" placeholder="Write Message Here..." required></textarea>
                <input type="submit" value="Send" className="contact-button"/>
            </form>
        </div>
    </section>
      )
}

export default Contact;