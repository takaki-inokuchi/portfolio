import React from 'react';
import { ContactForm } from "../features/contactForm";

export const ContactPage = () => {
  return (
    <div className='page-container'>
      <h1>お問い合わせページ</h1>
      <ContactForm />
    </div>
  );
};

export default ContactPage;