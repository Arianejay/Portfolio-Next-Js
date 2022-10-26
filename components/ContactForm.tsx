import React, { useRef } from 'react'

// context
import { useStateContext } from '../context/Context'

// lib
import emailjs from '@emailjs/browser'
import toast, { Toast } from 'react-hot-toast'

const ContactForm: React.FC = () => {
  // dark mode
  const { isDarkMode } = useStateContext()

  // email.js
  const form = useRef<HTMLInputElement | any>(null)

  const sendEmail = (e: any) => {
    e.preventDefault()

    emailjs
      .sendForm(
        process.env.SERVICE_ID as string,
        process.env.TEMPLATE_ID as string,
        form.current,
        process.env.PUBLIC_KEY as string,
      )
      .then(
        (result) => {
          toast.success('Message Sent')

          // clear form values
          e.target.reset()
        },
        (error) => {
          toast.error('Error, please try again')
          console.log(error.text)
        },
      )
  }

  return (
    <div className="w-full flex items-center justify-center text-[1.2rem]">
      <div className="h-full w-full p-8">
        <form
          onSubmit={sendEmail}
          ref={form}
          className={
            isDarkMode
              ? 'flex flex-col gap-4 text-[#121212]'
              : 'flex flex-col gap-4'
          }
        >
          <input
            type="text"
            name="user_name"
            className="border-[1.5px] border-[#121212] outline-none pl-2 placeholder:text-[1rem] placeholder:opacity-70 md:h-10"
            placeholder="Name"
            autoComplete="off"
            spellCheck="false"
          />
          <input
            type="text"
            name="user_email"
            className="border-[1.5px] border-[#121212] outline-none pl-2 placeholder:text-[1rem] placeholder:opacity-70 md:h-10"
            placeholder="Email"
            autoComplete="off"
            spellCheck="false"
          />
          <textarea
            name="message"
            className="border-[1.5px] border-[#121212] outline-none pl-2 placeholder:text-[1rem] placeholder:opacity-70 resize-none md:h-40"
            placeholder="Message"
            spellCheck="false"
          />
          <div className="w-full flex items-center justify-start">
            <button
              type="submit"
              value="send"
              className={
                isDarkMode
                  ? 'flex items-center border-[1.5px] border-[#fff] px-2 uppercase tracking-[0.2rem] button__hover__dark text-[#fff]'
                  : 'flex items-center border-[1.5px] border-[#121212] px-2 uppercase tracking-[0.2rem] button__hover__light'
              }
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ContactForm
