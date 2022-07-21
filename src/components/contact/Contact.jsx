import React, { useRef } from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md"
import { RiMessengerLine } from "react-icons/ri"
import { BsWhatsapp } from "react-icons/bs"
import emailjs from 'emailjs-com';
const Contact = () => {


  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_xv8zcrh', 'template_lp98n7p', form.current, 'QTAXqbZiWdYcqPl-T');
    e.target.reset();
  };


  return <section id="contact">
    <h5>Get  In Touch</h5>
    <h2>Contact Me</h2>
    <div className="container contact__container">
      <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className="contact__option-icon" />
          <h4>Email</h4>
          <h5>anis.almouadeb@esprit.tn</h5>
          <a href="mailto:anis.almouadeb@esprit"> Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className="contact__option-icon" />
          <h4>Messenger</h4>
          <h5>Mdb Anis</h5>
          <a href="https://m.me/anis.meddeb.56" target="_blank"> Send a message</a>
        </article>
        <article className="contact__option">
          <BsWhatsapp className="contact__option-icon" />
          <h4>Whatsapp</h4>
          <a href="https://api.whatsapp.com/send?phone=+21621270909"> Send a message</a>
        </article>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" rows="7" placeholder="Your Message" />
        <button type="submit" className="btn btn-primary">Send Message</button>
      </form>
    </div>
  </section>;
};

export default Contact;
