"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Navbar from "@/components/navbar"
import { useState } from "react"

export default function Certificates() {
  const [selectedCertificate, setSelectedCertificate] = useState<string | null>(null)

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

  const imageHoverVariants = {
    hover: {
      scale: 1.05,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      },
    },
  }

  const certificates = [
    {
      id: "pwc",
      title: "Power BI Job Simulation",
      image: "/images/cert4.png",
      issuer: "PWC & Forage",
      date: "March 29, 2025",
      credentialId: "gAnpKAgscpmoAu3cZ",
    },
    {
      id: "accenture",
      title: "Data Analytics and Visualization Job Simulation",
      image: "/images/cert5.png",
      issuer: "Accenture & Forage",
      date: "March 29, 2025",
      credentialId: "hvT6MBjoc3AfbCdZe",
    },
    {
      id: "datacamp-data-literacy",
      title: "Data Literacy Certification",
      image: "/images/cert2.png",
      issuer: "DataCamp",
      date: "September 2, 2024",
      credentialId: "DL0037828429932",
    },
    {
      id: "datacamp-ai-fundamentals",
      title: "AI Fundamentals Certification",
      image: "/images/cert3.png",
      issuer: "DataCamp",
      date: "September 9, 2024",
      credentialId: "AIF002806373160",
    },
    {
      id: "datacamp-sql",
      title: "SQL Associate Certification",
      image: "/images/cert1.png",
      issuer: "DataCamp",
      date: "September 5, 2024",
      credentialId: "SQA001560968710",
    },
  ]

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="bg-[#004a99]">
        <Navbar activePage="certificates" />
      </div>

      <motion.main
        className="container mx-auto px-4 py-16"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.div variants={itemVariants} className="uppercase text-gray-400 mb-2">
          CERTIFICATES
        </motion.div>

        <motion.div
          className="w-32 h-1 bg-green-500 mb-8"
          initial={{ width: 0 }}
          animate={{ width: "8rem" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />

        <motion.h1 className="text-4xl md:text-5xl font-bold mb-12" variants={itemVariants}>
          My Certificates
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {certificates.map((certificate) => (
            <motion.div
              key={certificate.id}
              className="overflow-hidden rounded-lg cursor-pointer"
              variants={itemVariants}
              whileHover="hover"
              onClick={() => setSelectedCertificate(certificate.id)}
            >
              <motion.div variants={imageHoverVariants}>
                <Image
                  src={certificate.image || "/placeholder.svg"}
                  alt={certificate.title}
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </motion.div>
              <motion.div
                className="p-4 bg-gray-800"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="text-xl font-bold">{certificate.title}</h3>
                <p className="text-gray-300">
                  Issued by {certificate.issuer} • {certificate.date}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.main>

      {/* Modal for certificate preview */}
      {selectedCertificate && (
        <motion.div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setSelectedCertificate(null)}
        >
          <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-4 right-4 bg-white/10 rounded-full p-2 text-white hover:bg-white/20 transition-colors"
              onClick={() => setSelectedCertificate(null)}
            >
              ✕
            </button>
            <Image
              src={certificates.find((c) => c.id === selectedCertificate)?.image || ""}
              alt="Certificate Preview"
              width={1200}
              height={800}
              className="w-full h-auto rounded-lg"
            />
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
