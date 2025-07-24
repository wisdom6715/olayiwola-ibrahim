"use client"

import type React from "react"

import { motion } from "framer-motion"
import { useState } from "react"
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
      <div className="bg-[#991dbe]">
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
          className="w-32 h-1 bg-[#991dbe] mb-8"
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
                href="https://www.linkedin.com/in/olayiwola-ibrahim-b0b468278/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#004a99] hover:text-[#003366]"
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link
                href="https://github.com/wisdom6715"
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
            <p>olayiwolaibrahim46@gmail.com</p>
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
            <p>(+234) 9024531295</p>
          </motion.div>
        </div>
      </motion.main>
    </div>
  )
}
