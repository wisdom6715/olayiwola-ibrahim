// Alusoft
// Jobifiy
// Quotient Africa
// 

"use client"
    
export default function WorkExperience(){
    const experience = [
      {
          id: 1,
          title: "Quotients Africa",
          description: "Media and newsletter platform architected and built end-to-end, scaling from 0 to 5,000 email subscribers with integrated analytics and SEO foundations.",
          image: "/images/quotient.jpg",
          details: "Served as the Founding Engineer, owning the complete architecture and production deployment of Quotients Africa. Designed and built the full-stack media platform from concept to launch, including a rich WYSIWYG article editor supporting formatted text, media, and embedded video. Engineered a custom newsletter management system powering content distribution and subscriber retention. Implemented SEO foundations to improve discoverability and content recommendation quality. Integrated user behavior analytics to track reading patterns across categories and measure engagement on daily, weekly, and monthly intervals. Contributed 10+ technical articles, directly supporting audience growth and positioning the platform as a technical thought leader.",
          link: "https://quotientsafrica.com",
      },
      {
          id: 2,
          title: "Jobifiy",
          description: "AI-enabled hiring platform with dashboards and workflow automation improving talent-employer matching and interview coordination.",
          image: "/images/logo_2.webp",
          details: "Worked as a Frontend Developer contributing to the core product experience at Jobifiy. Built AI-powered dashboards supporting talent applications, employer hiring workflows, and internal operations. Implemented resume generation, smart job recommendations, advanced filtering, and employer-side talent ranking to reduce time spent on unqualified applicants. Developed admin analytics dashboards to monitor platform activity and inform growth decisions. Integrated an interview invitation system with Google Calendar and Google Meet, streamlining interview scheduling and coordination across stakeholders.",
          link: "https://jobifiy.com",
      },
      {
          id: 3,
          title: "Eduporch (Alusoft)",
          description: "Legacy school management system modernized from HTML/PHP to React, significantly improving usability and platform adoption.",
          image: "/images/eduporch_logo.png",
          details: "At Alusoft, worked on Eduporch, a school management system originally built with legacy HTML and PHP. Led the frontend modernization initiative by transitioning the application to React, significantly improving performance, usability, and overall user experience for schools. Refactored core interfaces, redesigned workflows, and implemented component-based architecture to enhance maintainability and scalability. The transition improved user engagement and positioned the platform for future feature expansion and growth within educational institutions.",
          link: "https://www.alusofttechnologies.com/",
      }
  ]
  return{
    experience
  }
}