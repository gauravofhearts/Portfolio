import React from 'react'
import Title from '../components/Title/Title'
import SubTitle from '../components/Title/SubTitle'
import ContactForm from '../components/Form/ContactForm'

const Contact = () => {
  return (
    <>
      <Title text="Welcome to Contact Form Page!"/>
      <SubTitle text="A contact page should provide visitors with clear
                       instructions on how to get in touch with your business."/>
      <ContactForm/>
    </>
  )
}

export default Contact