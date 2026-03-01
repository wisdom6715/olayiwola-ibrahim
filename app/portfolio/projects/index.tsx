"use client"
    
export default function portfolioProjects(){
    const projects = [
      {
        id: 1,
        title: "Quotient Africa",
        description: "This mobile app provides real-time fuel price information across fuel stations in Lagos. Users can view current petrol, diesel, and gas prices at nearby stations, displayed on an interactive map. The app helps commuters and drivers make smarter route and refueling decisions, ultimately saving time and money.",
        image: "/images/quotient.jpg",
        category: "CMS (SAAS)",
        details: "This mobile app provides real-time fuel price information across various stations in Lagos, displayed on an interactive map. Designed to help drivers, commuters, and logistics operators plan smarter routes, the app allows users to compare fuel prices (petrol, diesel, gas) in different areas before deciding where to refuel. It features live updates, user-submitted price reports, and integrated route planning to help users avoid overpriced stations and reduce fuel costs. By combining accurate location data with transparent pricing, the app enhances commuting efficiency and promotes better decision-making for fuel-related expenses in Lagos.",
        link: "https://quotientsafrica.com",
        stack: [
            'Next.js', 'Typescript', 'TailwindCSS', 'Node.js', 'Dynamodb', 'AWS EC2', 'AWS S3', 'AWS Amplify'
          ]
      },
      {
        id: 2,
        title: "PilotOps",
        description: "This mobile app provides real-time fuel price information across fuel stations in Lagos. Users can view current petrol, diesel, and gas prices at nearby stations, displayed on an interactive map. The app helps commuters and drivers make smarter route and refueling decisions, ultimately saving time and money.",
        image: "/images/pilotops.png",
        category: "AI SAAS",
        details: "This mobile app provides real-time fuel price information across various stations in Lagos, displayed on an interactive map. Designed to help drivers, commuters, and logistics operators plan smarter routes, the app allows users to compare fuel prices (petrol, diesel, gas) in different areas before deciding where to refuel. It features live updates, user-submitted price reports, and integrated route planning to help users avoid overpriced stations and reduce fuel costs. By combining accurate location data with transparent pricing, the app enhances commuting efficiency and promotes better decision-making for fuel-related expenses in Lagos.",
        link: "https://pilotops.xyz",
        stack: [
          'Next.js', 'Typescript', 'TailwindCSS', 'Node.js', 'Pinecone', 'Langchain', 'Dynamodb', 'AWS Lambda', 'AWS SQS', 'AWS EC2', 'AWS S3', 'AWS Bedrock', 'Cloudfront'
        ]
      },
    {
      id: 3,
      title: "Fillng",
      description: "This mobile app provides real-time fuel price information across fuel stations in Lagos. Users can view current petrol, diesel, and gas prices at nearby stations, displayed on an interactive map. The app helps commuters and drivers make smarter route and refueling decisions, ultimately saving time and money.",
      image: "/images/fillng.png",
      category: "MOBILE APP",
      details: "This mobile app provides real-time fuel price information across various stations in Lagos, displayed on an interactive map. Designed to help drivers, commuters, and logistics operators plan smarter routes, the app allows users to compare fuel prices (petrol, diesel, gas) in different areas before deciding where to refuel. It features live updates, user-submitted price reports, and integrated route planning to help users avoid overpriced stations and reduce fuel costs. By combining accurate location data with transparent pricing, the app enhances commuting efficiency and promotes better decision-making for fuel-related expenses in Lagos.",
      link: "https://fillng.ng",
      stack: [
          'React Native', 'Expo', 'TailwindCSS', 'Firebase'
        ]
    },
    {
      id: 4,
      title: "ClinicAgent",
      description: "ClinicAgent Agents is an AI-powered platform that empowers healthcare providers—ranging from hospitals and clinics to government health agencies—to create custom AI agents for a wide range of use cases. These agents can deliver voice-based support, inbound and outbound call capabilities, and intelligent automation for health education, diagnostics, and patient engagement.",
      image: "/images/clinicagents.png",
      category: "SAAS (WEB APP)",
      details: "ClinicAgent Agents allows healthcare organizations to design and deploy specialized AI agents tailored to specific medical needs such as malaria awareness, radiology support, maternal care, chronic disease follow-up, and more. The platform supports voice-based interactions, enabling patients to speak naturally with AI agents through inbound or outbound calls—ideal for areas with low digital literacy or limited internet access. With easy-to-configure workflows, healthcare teams can set up virtual agents that provide information, triage symptoms, send reminders, collect patient data, or escalate to human professionals when needed. ClinicAgent Agents reduces the burden on health workers, increases outreach efficiency, and ensures consistent, scalable healthcare communication across urban and rural populations.",
      link: "https://clinic-agents.vercel.app/",
      stack: [
          'Next.js', 'Typescript', 'TailwindCSS', 'Node.js', 'Twilio', 'Pinecone', 'Langchain', 'Dynamodb', 'AWS Lambda', 'AWS SQS', 'AWS EC2', 'AWS S3', 'AWS Bedrock', 'Cloudfront'
        ]
    },
    {
      id: 5,
      title: "ClipSave",
      description: "ClipSave is a user-friendly website that allows users to download the latest movies in high quality. It provides fast access to newly released films across various genres, including action, drama, comedy, and more, with an easy-to-navigate interface and minimal ads.",
      image: "/images/clipsave.png",
      category: "WEB APP",
      details: "ClipSave is built for movie enthusiasts who prefer to download and watch films offline. The platform regularly updates its library with the latest releases, offering multiple download options (480p, 720p, 1080p) to suit users’ data and device preferences. With a responsive web design, ClipSave is accessible on both desktop and mobile. The website also features a search bar, genre filters, and a preview option to help users find and select content easily. Whether you're catching up on a recent blockbuster or looking for a hidden gem, ClipSave offers a convenient, fast, and reliable experience for downloading movies.",
      link: "https://movies.clipsave.ng",
      stack: [
          'Next.js', 'Typescript', 'TailwindCSS', 'Django',  'MongoDB', 'Railway', 'AWS S3'
        ]
    },
    {
      id: 6,
      title: "LearnLinkGPT",
      description: "LearnLinkGPT is a Progressive Web App (PWA) that empowers students to study smarter by reading educational files—PDFs, Word documents, and PowerPoint slides—while engaging with ChatGPT as a real-time study companion. It also features a cloud library for storing materials and a built-in quiz environment to test understanding and reinforce learning.",
      image: "/images/learnlink.png",
      category: "WEB APP (PWA)",
      details: "LearnLinkGPT combines traditional study materials with AI-powered support, allowing students to upload and read documents directly in the app. As they study, they can ask ChatGPT to explain concepts, summarize content, or generate key takeaways. All uploaded materials are saved in a secure personal cloud library, so students can access their files from any device. The app also includes a quiz module that generates or allows students to take questions based on their study materials, helping them actively recall and assess their knowledge. Built as a PWA, LearnLinkGPT is lightweight, mobile-friendly, and works offline—making it ideal for learning anywhere, anytime.",
      link: "https://github.com/wisdom6715/LearnLinkGPT",
      stack: [
          'Next.js', 'Typescript', 'TailwindCSS', 'Node.js', 'Pinecone', 'Langchain', 'Dynamodb', 'AWS Lambda', 'AWS SQS', 'AWS EC2', 'AWS S3', 'AWS Bedrock', 'Cloudfront'
        ]
    },
    {
      id: 7,
      title: "Database Detection Intrusion Alert System (D-DIS)",
      description: "The Database Detection Intrusion Alert System (D-DIS) is a security-focused application designed to monitor and detect suspicious activities within a database—such as unauthorized insertions, deletions, or schema modifications—and instantly alert the administrator via SMS using Twilio.",
      image: "/images/DIDS.png",
      category: "WEB APP",
      details: "D-DIS continuously monitors database operations for anomalies or unauthorized changes, acting as a real-time intrusion detection system. Whether it's unexpected data insertion, deletion, or alterations to the database schema, the system identifies these actions and immediately sends detailed SMS alerts through the Twilio API to notify the administrator. This ensures rapid awareness and response to potential threats or malicious activities. D-DIS can be integrated into existing database environments and is ideal for developers, DevOps engineers, or security-conscious teams looking to add a lightweight, proactive alerting layer to their data infrastructure.",
      link: "https://github.com/wisdom6715/Database-Intrusion-Detection-System",
      stack: [
          'HTML and CSS', 'Javascript', 'Node.js', 'Superbase', 'Twilio'
        ]
    },

    {
      id: 8,
      title: "Evana.AI",
      description: "Evana.AI is an AI-powered customer support platform designed to streamline and enhance customer service experiences. It intelligently handles customer queries through real-time chat, seamlessly switches from bot to human when needed, and provides advanced analytics for continuous support improvement.",
      image: "/images/project4.png",
      category: "SAAS (WEB APP)",
      details: "Evana.AI acts as a smart assistant for support teams by handling routine customer queries instantly via AI-powered chatbots. When the conversation requires human intervention, it smoothly transitions the conversation to a live support agent without losing context. The platform supports real-time communication, ensuring fast response times and improved customer satisfaction. In addition, Evana.AI includes a powerful analytics dashboard that provides insights into customer behavior, response efficiency, resolution rates, and agent performance—helping teams identify gaps and optimize their support strategies. Whether for startups or enterprises, Evana.AI enhances support workflows, reduces workload, and ensures customers always feel heard.",
      link: "https://github.com/wisdom6715/Evana",
      stack: [
          'Next.js', 'Typescript', 'TailwindCSS', 'Flask', 'Node.js', 'Weaviate', 'Langchain', 'Dynamodb', 'AWS Lambda', 'AWS EC2', 'AWS S3', 'Cloudfront'
        ]
    },
    {
      id: 9,
      title: "Esher.AI",
      description: "Esher.AI is an AI-powered agency offering API-as-a-Service for e-commerce companies, delivering intelligent product recommendations and actionable product insights. By integrating seamlessly into existing e-commerce platforms, Esher.AI enhances customer engagement and boosts conversion rates through data-driven personalization.",
      image: "/images/esher.png",
      category: "SAAS (WEB APP)",
      details: "Esher.AI enables online retailers to integrate advanced AI capabilities directly into their websites via a lightweight, developer-friendly API. Once integrated, the system analyzes user behavior, purchase patterns, and product data to deliver real-time product recommendations tailored to each visitor. Beyond recommendations, Esher.AI also provides deep product insights—helping businesses understand which products are performing well, which are trending, and where opportunities for upselling exist. Designed to scale with any e-commerce platform, Esher.AI helps businesses increase customer satisfaction, drive sales, and make smarter inventory and marketing decisions based on data.",
      link: "https://esher-ai-nc.vercel.app/",
      stack: [
          'Next.js', 'Typescript', 'TailwindCSS', 'Node.js', 'Pinecone', 'Langchain', 'Dynamodb', 'AWS Lambda', 'AWS SQS', 'AWS EC2', 'AWS S3', 'AWS Bedrock', 'Cloudfront'
        ]
    },
    {
      id: 10,
      title: "Voice Agent",
      description: "Voice Agents is a voice-based AI platform built to simulate intelligent, real-time voice interactions using Retrieval-Augmented Generation (RAG). It enables natural conversations with AI through speech, combining cutting-edge voice technology and large language models for immersive, audio-first experiences.",
      image: "/images/voiceagents.png",
      category: "WEB APP",
      details: "The platform leverages DeepGram for real-time speech-to-text (STT) and text-to-speech (TTS) processing, ensuring fast and accurate voice interactions. At its core, it integrates LLaMA embeddings with Pinecone as the vector database, enabling retrieval-augmented responses from a custom knowledge base. LiveKit powers the real-time audio infrastructure, allowing low-latency voice communication between the user and the AI agent. The result is a highly responsive RAG-based voice AI application capable of simulating intelligent agents across different domains—from customer support to virtual assistants and interactive training.",
      link: "https://github.com/wisdom6715/Voice-Agent",
      stack: [
          'Next.js', 'Typescript', 'TailwindCSS', 'LiveKit', 'Deepgram (STT and TTS)', 'Node.js', 'Pinecone', 'Langchain', 'Dynamodb', 'AWS EC2', 'AWS Bedrock'
        ]
    },
    {
      id: 11,
      title: "Nexus Ltd",
      description: "Nexus Ltd is a technology solutions agency specializing in cloud computing, cybersecurity, and software development. The company provides expert services that help businesses modernize their infrastructure, build secure and scalable applications, and stay ahead in a rapidly evolving digital world.",
      image: "/images/nexus.png",
      category: "WEBSITE",
      details: "Nexus Ltd brings together a team of seasoned professionals with deep expertise across key areas of tech—delivering tailored solutions for startups, enterprises, and government organizations. In cloud computing, the agency offers migration, deployment, and cloud-native architecture services across platforms like AWS, Azure, and Google Cloud. In cybersecurity, Nexus Ltd focuses on threat detection, risk assessment, compliance, and proactive defense strategies to protect digital assets. Their software development arm builds web, mobile, and enterprise applications, following best practices in scalability, performance, and user experience.",
      link: "https://academy-nexus.vercel.app/nexus",
      stack: [
          'Next.js', 'Typescript', 'TailwindCSS', 'Node.js', 'Superbase'
        ]
    },
    {
      id: 12,
      title: "Codesphere",
      description: "CodeSphere is an academy website designed to empower aspiring tech professionals by offering structured, industry-relevant training in digital and technology skills. From software development to cloud computing, cybersecurity, graphic design, UI/UX, and more—CodeSphere provides a comprehensive platform where students can explore course details, view curriculums, and register for programs that match their career goals.",
      image: "/images/codesphere.png",
      category: "WEBSITE",
      details: "At CodeSphere, learners gain access to expertly crafted course outlines, hands-on projects, and real-world training across various digital domains. Each course is designed with clear learning objectives, skill outcomes, and mentorship opportunities to guide students from beginner to advanced levels. The platform features a smooth enrollment process, allowing students to browse through detailed curricula, instructor bios, and class schedules before signing up. Whether you're pursuing a tech career in software engineering, cloud computing, cybersecurity, graphic design, or UI/UX, CodeSphere offers a flexible and modern learning environment tailored to meet the demands of today’s digital economy.",
      link: "https://academy-nexus.vercel.app/home",
      stack: [
          'Next.js', 'Typescript', 'TailwindCSS', 'Node.js', 'Superbase'
        ]
    },
    {
      id: 13,
      title: "Esher Documentation Site",
      description: "The EsherAI documentaion site is a dedicated documentation and integration portal that guides developers on how to embed EsherAI’s product recommendation and insight engine into their company’s e-commerce platform. It serves as the technical backbone for implementing EsherAI’s API-as-a-Service.",
      image: "/images/doc-esher.png",
      category: "WEBSITE",
      details: "This site provides step-by-step integration guides, API references, code samples, and best practices for developers tasked with integrating EsherAI into existing e-commerce systems. With support for popular frameworks and platforms, the documentation ensures a smooth and efficient setup process. Developers can learn how to connect the EsherAI engine to product catalogs, enable personalized recommendations, and retrieve actionable insights in real time. The portal also includes onboarding checklists, authentication methods, troubleshooting tips, and version control updates—making it the go-to hub for technical teams working with EsherAI.",
      link: "https://esher-doc.vercel.app/",
      stack: [
          'Next.js', 'Typescript', 'TailwindCSS',
        ]
    },
    
    {
      id: 14,
      title: "Esher.AI React Package",
      description: "The Esher React Package is a modular integration tool designed for e-commerce websites built on modern JavaScript frameworks such as React, Vue, and vanilla JavaScript. It provides a seamless way to connect Esher-powered services—like authentication, product management, analytics, or AI features—into e-commerce platforms using framework-specific methods, including direct React components and iframe-based embedding.",
      image: "/images/esher-package.png",
      category: "PACKAGE",
      details: "This package enables developers to plug Esher-based capabilities directly into their e-commerce applications with minimal configuration. For React-based platforms, the package offers native React components that integrate deeply into the component tree. For frameworks like Vue or plain JavaScript + CSS environments, the package provides iframe-based solutions to embed Esher-powered interfaces or tools without heavy refactoring. Whether you're managing product recommendations, handling payments, or integrating customer support tools, the Esher React Package ensures compatibility, flexibility, and ease of deployment across various front-end stacks.",
      link: "https://www.npmjs.com/package/esher?activeTab=readme",
      stack: [
          'Javascript', 'Node.js',
        ]
    },
    {
      id: 15,
      title: "Chattify",
      description: "Chatify is a WhatsApp Web clone built to simulate the experience of developing a real-time, full-stack messaging application. It replicates the core functionality and intuitive user interface of WhatsApp Web, showcasing expertise in WebSocket integration, dynamic UI design, and responsive front-end architecture.",
      image: "/images/chattify.png",
      category: "WEB APP",
      details: "Chatify was developed to demonstrate proficiency in building robust communication systems using WebSockets for real-time messaging. The project features one-on-one chat functionality, live message updates, message status indicators, and a clean, WhatsApp-like UI for a familiar and user-friendly experience. The frontend emphasizes responsiveness and usability, while the backend handles real-time communication and message delivery. Chatify serves as a practical demonstration of developing modern, interactive web applications with efficient data flow and real-time user interactions—perfect for showcasing advanced front-end and full-stack capabilities.",
      link: "https://wisdom-port-qq3o.vercel.app/",
      stack: [
          'React.js', 'Typescript', 'TailwindCSS', 'Node.js', 'Websocket', 'socket.io', 'Postgre SQL',
        ]
    }
  ]
  return{
    projects
  }
}