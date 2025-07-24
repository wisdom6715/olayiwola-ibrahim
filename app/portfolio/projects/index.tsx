"use client"
    
export default function portfolioProjects(){
    const projects = [
    {
      id: 1,
      title: "Fillng",
      description: "The US Super Store Sales Analysis project is a retail analytics case study that examines sales, profitability, customer behavior, product trends, and regional performance using transactional data from a fictional U.S. superstore.",
      image: "/images/fillng.png",
      category: "MOBILE APP",
      details: "The US Super Store Sales Analysis project is a comprehensive retail analytics case study focused on uncovering insights from transactional data of a fictional superstore operating across the United States. It explores key business areas such as sales performance, profitability, customer behavior, product trends, and regional operations.",
      link: "https://fillng.ng",
    },
    {
      id: 2,
      title: "ClipSave",
      description: "A data-driven analysis of key factors influencing airline passenger satisfaction using real-world survey data.",
      image: "/images/clipsave.png",
      category: "WEB APP",
      details: "The Airline Passenger Satisfaction Analysis project is a comprehensive study focused on understanding the key factors that influence passenger satisfaction in the airline industry. Using real-world survey data, this project analyzes various aspects of the passenger experience, including demographics, travel behavior, service quality, flight performance, and delays.",
      link: "https://movies.clipsave.ng",
    },
    {
      id: 3,
      title: "LearnLinkGPT",
      description: "A data-driven analysis of Amazon sales trends, product performance, customer preferences, and regional distribution.",
      image: "/images/learnlink.png",
      category: "WEB APP (PWA)",
      details: "The Amazon Sales Performance Analysis project is a data-driven exploration of sales activities on one of the world's largest e-commerce platforms. This analysis focuses on understanding sales trends, product performance, customer preferences, delivery efficiency, and regional sales distribution",
      link: "https://github.com/wisdom6715/LearnLinkGPT",
    },
    {
      id: 12,
      title: "Database Detection Intrusion Alert System (D-DIS)",
      description: "The Adult Census Income Dashboard predicts income levels based on U.S. demographic and occupational data, revealing key socioeconomic trends.",
      image: "/images/DIDS.png",
      category: "WEB APP",
      details: "The Adult Census Income in USA Dashboard analyzes demographic and occupational patterns to predict whether an individual earns more or less than $50,000 per year. Built for data-driven insights, this project explores socioeconomic trends across age, education, gender, marital status, and more.",
      link: ""
    },

    {
      id: 4,
      title: "Evana.AI",
      description: "An analysis of customer data to identify key factors influencing bank customer churn and predict attrition patterns.",
      image: "/images/project4.png",
      category: "SAAS (WEB APP)",
      details: "The Bank Churn Analysis project focuses on identifying key factors that contribute to customer attrition in a banking environment. Using a dataset containing customer demographics, account information, and banking activity, this project aims to uncover patterns and behaviors that indicate whether a customer is likely to leave the bank (churn).",
      link: "https://github.com/wisdom6715/Evana",
    },
    {
      id: 5,
      title: "Esher.AI",
      description: "An Excel-based BI dashboard analyzing customer churn, retention trends, and revenue patterns in the MTN Pulse segment.",
      image: "/images/esher.png",
      category: "SAAS (WEB APP)",
      details: "The MTN Pulse Churn Analysis & Retention Intelligence Dashboard is a business intelligence solution designed to uncover key factors driving customer churn and revenue fluctuations within the MTN Pulse segment. Built using Microsoft Excel, this project provides a centralized, interactive environment to monitor retention trends, subscription behaviors, and revenue performance metrics",
      link: "",
    },
    {
      id: 6,
      title: "ClinicAgent",
      description: "The Adult Census Income Dashboard predicts income levels based on U.S. demographic and occupational data, revealing key socioeconomic trends.",
      image: "/images/clinicagents.png",
      category: "SAAS (WEB APP)",
      details: "The Adult Census Income in USA Dashboard analyzes demographic and occupational patterns to predict whether an individual earns more or less than $50,000 per year. Built for data-driven insights, this project explores socioeconomic trends across age, education, gender, marital status, and more.",
      link: "https://clinic-agents.vercel.app/"
    },
    {
      id: 10,
      title: "Voice Agent",
      description: "The Adult Census Income Dashboard predicts income levels based on U.S. demographic and occupational data, revealing key socioeconomic trends.",
      image: "/images/voiceagents.png",
      category: "WEB APP",
      details: "The Adult Census Income in USA Dashboard analyzes demographic and occupational patterns to predict whether an individual earns more or less than $50,000 per year. Built for data-driven insights, this project explores socioeconomic trends across age, education, gender, marital status, and more.",
      link: "https://github.com/wisdom6715/Voice-Agent"
    },
    {
      id: 17,
      title: "Nexus Ltd",
      description: "Global Electronics, founded in 2005, is a leading consumer electronics brand operating in 8 countries, known for its innovative tech products and excellent customer service.",
      image: "/images/nexus.png",
      category: "WEBSITE",
      details: "Founded in 2005, Global Electronics is a global leader in consumer electronics, offering a wide range of tech products including computers, phones, TVs, appliances, and more. With a presence in 8 countries, the company has built a reputation for quality, innovation, and exceptional customer service.",
      link: "https://academy-nexus.vercel.app/nexus",
    },
    {
      id: 7,
      title: "Codesphere",
      description: "Global Electronics, founded in 2005, is a leading consumer electronics brand operating in 8 countries, known for its innovative tech products and excellent customer service.",
      image: "/images/Codesphere.png",
      category: "WEBSITE",
      details: "Founded in 2005, Global Electronics is a global leader in consumer electronics, offering a wide range of tech products including computers, phones, TVs, appliances, and more. With a presence in 8 countries, the company has built a reputation for quality, innovation, and exceptional customer service.",
      link: "https://academy-nexus.vercel.app/home",
    },
    {
      id: 8,
      title: "Esher Documentation Site",
      description: "The UK Train Ride project analyzes real-world railway data to uncover insights into passenger behavior, journey trends, revenue, and route performance.",
      image: "/images/doc-esher.png",
      category: "WEBSITE",
      details: "The UK Train Ride project is a comprehensive data analysis and visualization initiative that explores railway travel data in the United Kingdom. Using real-world train ride data, this project uncovers insights into passenger behavior, journey trends, revenue generation, and route performance.",
      link: "https://esher-doc.vercel.app/",
    },
    
    {
      id: 14,
      title: "Esher.AI React Package",
      description: "The Adult Census Income Dashboard predicts income levels based on U.S. demographic and occupational data, revealing key socioeconomic trends.",
      image: "/images/esher-package.png",
      category: "PACKAGE",
      details: "The Adult Census Income in USA Dashboard analyzes demographic and occupational patterns to predict whether an individual earns more or less than $50,000 per year. Built for data-driven insights, this project explores socioeconomic trends across age, education, gender, marital status, and more.",
      link: "https://www.npmjs.com/package/esher?activeTab=readme"
    },
    {
      id: 9,
      title: "Chattify",
      description: "The Adult Census Income Dashboard predicts income levels based on U.S. demographic and occupational data, revealing key socioeconomic trends.",
      image: "/images/Chattify.png",
      category: "WEB APP",
      details: "The Adult Census Income in USA Dashboard analyzes demographic and occupational patterns to predict whether an individual earns more or less than $50,000 per year. Built for data-driven insights, this project explores socioeconomic trends across age, education, gender, marital status, and more.",
      link: "https://wisdom-port-qq3o.vercel.app/"
    }
  ]
  return{
    projects
  }
}