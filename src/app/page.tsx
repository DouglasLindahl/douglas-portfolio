'use client'
import React, { useRef } from 'react'

export default function Home() {
  type SectionRef = React.RefObject<HTMLDivElement>
  const aboutSectionRef: SectionRef = useRef<HTMLDivElement>(null)
  const showcaseSectionRef: SectionRef = useRef<HTMLDivElement>(null)
  const contactSectionRef: SectionRef = useRef<HTMLDivElement>(null)

  const projects = [
    {
      title: 'Timeframe',
      link: 'time-frame.vercel.app',
    },
    {
      title: 'Uppsikt',
      link: 'uppsikt.se',
    },
  ]
  const contacts = [
    {
      title: 'LinkedIn',
      link: 'linkedin.com/in/douglaslindahl',
    },
  ]

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const scrollToShowcase = () => {
    if (showcaseSectionRef.current) {
      showcaseSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }
  const scrollToContact = () => {
    if (contactSectionRef.current) {
      contactSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <main className="bg-background-color">
      <section
        id="hero"
        className="relative h-screen text-white flex flex-col pt-16 md:pt-0 md:justify-center items-center gap-4 text-center"
      >
        <p className=" font-extrabold text-4xl xl:text-6xl">Douglas Lindahl</p>
        <h1 className="text-6xl font-extrabold w-10/12 xl:text-8xl">
          I create <span className="text-primary-color">modern</span> and{' '}
          <span className="text-primary-color">responsive</span> websites
        </h1>
        <p className="w-9/12 text-xl xl:text-2xl">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident
        </p>
        <button
          onClick={scrollToShowcase}
          className="px-16 py-4 rounded-full text-2xl mt-8 border-2 border-secondary-color "
        >
          Work Showcase &rsaquo;&rsaquo;
        </button>
        <button
          onClick={scrollToAbout}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-20 border-2 border-primary-color w-20 h-20 rounded-full text-5xl flex flex-row justify-center items-center rotate-90"
        >
          <span className="text-center align-middle leading-none h-[52px]">
            &rsaquo;&rsaquo;
          </span>
        </button>
      </section>
      <section
        ref={aboutSectionRef}
        id="about"
        className="flex flex-col md:justify-center md:pt-0 pt-16 items-center gap-4 relative h-screen w-full text-white text-center"
      >
        <h2 className="text-2xl text-primary-color font-semibold">ABOUT ME</h2>
        <h3 className="text-4xl md:text-8xl font-extrabold w-10/12">
          EXPERIENCE
        </h3>
        <p className="text-xl md:text-2xl w-10/12 md:w-8/12">
          I am a creative full-stack developer who has been programming for 6+
          years. I received my high school diploma in game development in 2021
          and professional higher education diploma in web development in 2024,
          all the while creating multiple websites for different purposes.
        </p>
        <p className="text-xl md:text-2xl w-10/12 md:w-8/12">
          I have always had a passion for creating and building web-based
          solutions. I want to help build the future with my skills in
          webdevelopment
        </p>
        <p className="text-2xl font-bold">{"Let's do it."}</p>
        <button
          onClick={scrollToShowcase}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-20 border-2 border-primary-color w-20 h-20 rounded-full text-5xl flex flex-row justify-center items-center rotate-90"
        >
          <span className="text-center align-middle leading-none h-[52px]">
            &rsaquo;&rsaquo;
          </span>
        </button>
      </section>
      <section
        ref={showcaseSectionRef}
        id="showcase"
        className="relative h-screen w-full text-white flex flex-col justify-start items-center gap-4 text-center"
      >
        <h3 className="text-6xl md:text-8xl font-extrabold w-10/12 mx-auto pt-16 pb-8">
          Work Showcase
        </h3>
        <div className="flex flex-col w-full justify-center items-center gap-4">
          {projects.map((project, index) => (
            <a
              key={index}
              className="w-full flex justify-center items-center"
              href={`https://${project.link}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="w-4/6 px-16 py-4 rounded-full border-2 border-primary-color">
                {project.title + ' '}&rsaquo;&rsaquo;
              </p>
            </a>
          ))}
        </div>
        <button
          onClick={scrollToContact}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-20 border-2 border-primary-color w-20 h-20 rounded-full text-5xl flex flex-row justify-center items-center rotate-90"
        >
          <span className="text-center align-middle leading-none h-[52px]">
            &rsaquo;&rsaquo;
          </span>
        </button>
      </section>
      <section
        ref={contactSectionRef}
        className="relative h-screen w-full text-white flex flex-col justify-start items-center gap-4 text-center"
      >
        <h1 className="text-6xl md:text-8xl font-extrabold w-10/12 mx-auto pt-16 pb-8">
          Contact
        </h1>
        <a
          href="mailto:douglas.lindahl@gmail.com"
          className="text-2xl lg:text-4xl font-semibold border-b-2 border-white"
        >
          douglas.lindahl@gmail.com
        </a>
        <div className="flex flex-col w-full justify-center items-center gap-4 pt-4">
          {contacts.map((contact, index) => (
            <a
              key={index}
              className="w-full flex justify-center items-center"
              href={`https://${contact.link}/`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="w-4/6 px-16 py-4 rounded-full border-2 border-primary-color">
                {contact.title + ' '}&rsaquo;&rsaquo;
              </p>
            </a>
          ))}
        </div>
      </section>
    </main>
  )
}
