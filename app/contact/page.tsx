"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Share2, Linkedin, Github } from "lucide-react"
import Navbar from "@/components/navbar"
import Link from "next/link"

export default function Contact() {
  const [formState, setFormState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
    setFormState({
      firstName: "",
      lastName: "",
      email: "",
      subject: "",
      message: "",
    })

    // Reset success message after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false)
    }, 5000)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  }

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="bg-[#004a99]">
        <Navbar activePage="contact" />
      </div>

      <motion.main
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="uppercase text-gray-400 mb-2">
          CONTACT
        </motion.div>

        <motion.div
          className="w-32 h-1 bg-green-500 mb-8"
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1 className="text-4xl md:text-5xl font-bold mb-12" variants={itemVariants}>
          Get in touch
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-6">
          <motion.div
            variants={itemVariants}
            className="bg-white text-gray-800 p-6 rounded-md shadow-md"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center mb-4">
              <MapPin className="text-[#004a99] mr-3" size={24} />
              <h3 className="text-xl font-semibold">Location</h3>
            </div>
            <p>Lagos, Nigeria</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white text-gray-800 p-6 rounded-md shadow-md"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center mb-4">
              <Share2 className="text-[#004a99] mr-3" size={24} />
              <h3 className="text-xl font-semibold">Social Profiles</h3>
            </div>
            <div className="flex space-x-3">
              <Link
                href="https://www.linkedin.com/in/oladosu-ibrahim/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004a99] hover:text-[#003366]"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/Sudaisib"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004a99] hover:text-[#003366]"
              >
                <Github size={24} />
                <span className="sr-only">Github</span>
              </Link>
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white text-gray-800 p-6 rounded-md shadow-md"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center mb-4">
              <Mail className="text-[#004a99] mr-3" size={24} />
              <h3 className="text-xl font-semibold">Email Me</h3>
            </div>
            <p>Oladosuadeniyi39@gmail.com</p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="bg-white text-gray-800 p-6 rounded-md shadow-md"
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            <div className="flex items-center mb-4">
              <Phone className="text-[#004a99] mr-3" size={24} />
              <h3 className="text-xl font-semibold">Call Me</h3>
            </div>
            <p>(+234) 8168044655</p>
          </motion.div>
        </div>

        <motion.form onSubmit={handleSubmit} className="mt-12 space-y-6" variants={containerVariants}>
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div variants={itemVariants}>
              <Input
                id="firstName"
                name="firstName"
                placeholder="Your First Name"
                value={formState.firstName}
                onChange={handleChange}
                required
                className="bg-white text-gray-800 border-gray-300 h-12"
              />
            </motion.div>

            <motion.div variants={itemVariants}>
              <Input
                id="lastName"
                name="lastName"
                placeholder="Your Last Name"
                value={formState.lastName}
                onChange={handleChange}
                required
                className="bg-white text-gray-800 border-gray-300 h-12"
              />
            </motion.div>
          </div>

          <motion.div variants={itemVariants}>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Your Email"
              value={formState.email}
              onChange={handleChange}
              required
              className="bg-white text-gray-800 border-gray-300 h-12"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Input
              id="subject"
              name="subject"
              placeholder="Subject"
              value={formState.subject}
              onChange={handleChange}
              required
              className="bg-white text-gray-800 border-gray-300 h-12"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <Textarea
              id="message"
              name="message"
              placeholder="Message"
              value={formState.message}
              onChange={handleChange}
              required
              rows={6}
              className="bg-white text-gray-800 border-gray-300"
            />
          </motion.div>

          <motion.div className="flex justify-center" variants={itemVariants}>
            <Button
              type="submit"
              className="bg-[#004a99] hover:bg-[#003366] text-white px-8 py-3 h-auto text-lg"
              disabled={isSubmitting || isSubmitted}
            >
              {isSubmitting ? (
                <span className="flex items-center">
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </Button>
          </motion.div>

          {isSubmitted && (
            <motion.div
              className="mt-4 p-4 bg-green-600/20 border border-green-600 rounded-md text-green-500 text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Thank you for your message! I'll get back to you soon.
            </motion.div>
          )}
        </motion.form>
      </motion.main>
    </div>
  )
}
