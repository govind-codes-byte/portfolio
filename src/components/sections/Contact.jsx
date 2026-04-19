import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import emailjs from '@emailjs/browser'

// ✅ Icons (safe)
import * as SiIcons from 'react-icons/si'
import { FaLinkedin } from 'react-icons/fa'
import { HiMail, HiLocationMarker, HiCheckCircle, HiXCircle } from 'react-icons/hi'

// Safe extraction
const { SiGithub, SiTwitter } = SiIcons

// EmailJS config
const EMAILJS_CONFIG = {
  SERVICE_ID: 'YOUR_SERVICE_ID',
  TEMPLATE_ID: 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: 'YOUR_PUBLIC_KEY',
}

const socials = [
  { icon: SiGithub, href: 'https://github.com/govind-codes-byte' },
  { icon: FaLinkedin, href: 'https://www.linkedin.com/in/govind-kumar-ab7965298/' }, // ✅ FIXED
  { icon: SiTwitter, href: 'https://twitter.com/yourusername' },
]

// Notification
const Notification = ({ type, message }) => (
  <motion.div
    className={`fixed bottom-10 right-10 px-4 py-3 rounded-lg ${
      type === 'success' ? 'bg-green-600' : 'bg-red-600'
    } text-white`}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0 }}
  >
    {type === 'success' ? <HiCheckCircle /> : <HiXCircle />}
    <span className="ml-2">{message}</span>
  </motion.div>
)

const Contact = () => {
  const formRef = useRef()
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sending, setSending] = useState(false)
  const [notification, setNotification] = useState(null)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!form.name || !form.email || !form.message) {
      setNotification({ type: 'error', message: 'All fields required' })
      return
    }

    setSending(true)
    try {
      await emailjs.sendForm(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        formRef.current,
        EMAILJS_CONFIG.PUBLIC_KEY
      )

      setForm({ name: '', email: '', message: '' })
      setNotification({ type: 'success', message: 'Message sent!' })
    } catch (err) {
      setNotification({ type: 'error', message: 'Failed to send' })
    }
    setSending(false)
  }

  return (
    <>
      <section className="p-10 bg-black text-white">
        <h2 className="text-3xl mb-6">Contact Me</h2>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* Left Side */}
          <div>
            <p className="mb-4 flex items-center gap-2">
              <HiMail /> govindsharma27147@gmail.com
            </p>
            <p className="mb-4 flex items-center gap-2">
              <HiLocationMarker /> Bihar, India
            </p>

            <div className="flex gap-4 mt-5">
              {socials.map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noreferrer">
                  {s.icon && <s.icon size={22} />}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="p-3 bg-gray-800 rounded"
            />
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="p-3 bg-gray-800 rounded"
            />
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Your Message"
              className="p-3 bg-gray-800 rounded"
              rows={4}
            />

            <button
              disabled={sending}
              className="bg-blue-500 py-2 rounded"
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>
          </form>

        </div>
      </section>

      <AnimatePresence>
        {notification && <Notification {...notification} />}
      </AnimatePresence>
    </>
  )
}

export default Contact