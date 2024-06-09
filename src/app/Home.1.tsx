'use client'
import { useRef, useState } from 'react'

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const aboutSectionRef = useRef(null)

  const projects = [
    {
      src: 'timeframe.png',
      alt: 'image of timeframe website',
      title: 'Timeframe',
      link: 'time-frame.vercel.app',
    },
    {
      src: 'uppsikt.png',
      alt: 'image of uppsikt website',
      title: 'Uppsikt',
      link: 'uppsikt.se',
    },
    {
      src: 'cardsearch.png',
      alt: 'image of uppsikt website',
      title: 'Card Search',
      link: 'card-search.vercel.app',
    },
    {
      src: 'typescriptexploration.png',
      alt: 'image of uppsikt website',
      title: 'Typescript Exploration',
      link: 'typescript-exploration.vercel.app',
    },
    {
      src: 'waterworks.png',
      alt: 'image of uppsikt website',
      title: 'Waterworks',
      link: 'waterworks-alpha.vercel.app',
    },
  ]

  const scrollToAbout = () => {
    if (aboutSectionRef.current) {
      aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === projects.length - 1 ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? projects.length - 1 : prev - 1))
  }
  return (
    <main className="bg-background-color">
      <section
        id="hero"
        className="relative h-screen text-white flex flex-col justify-center items-center gap-4 text-center"
      >
        <p className=" font-extrabold text-6xl">INVICOM</p>
        <h1 className="text-8xl font-extrabold w-10/12">
          We create <span className="text-primary-color">simple</span> and{' '}
          <span className="text-primary-color">modern</span> websites
        </h1>
        <p className="w-9/12 text-2xl">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
          et quas molestias excepturi sint occaecati cupiditate non provident
        </p>
        <button className="bg-zinc-800 px-16 py-4 rounded-full text-2xl opacity-75 mt-8">
          Work Showcase
        </button>
        <button
          onClick={scrollToAbout}
          className="absolute left-1/2 transform -translate-x-1/2 bottom-20 bg-accent-color w-20 h-20 rounded-full opacity-75"
        >
          &#8595;
        </button>
      </section>
      <section
        id="about"
        className="flex flex-col justify-center items-center gap-4 relative h-screen w-full text-white text-center"
      >
        <h2 className="text-2xl text-primary-color font-semibold">
          TO BUILD A STRONG BRAND...
        </h2>
        <h3 className="text-8xl font-extrabold w-10/12">STAND OUT.</h3>
        <p className="text-2xl w-7/12">
          While everybody else tries to build their brands on generic, boring
          and inconsistent visuals, I'll give you a professional visual identity
          that stands out, and speaks YOU.
        </p>
        <p className="text-2xl font-bold">Let's do it.</p>
        <button className="absolute left-1/2 transform -translate-x-1/2 bottom-20 bg-accent-color w-20 h-20 rounded-full opacity-75">
          &#8595;
        </button>
      </section>
      <section
        id="showcase"
        className="relative h-screen w-full text-white flex flex-col justify-start items-center gap-4 text-center"
      >
        <h3 className="text-8xl font-extrabold w-10/12 mx-auto pt-16 pb-8">
          Work Showcase
        </h3>
        <div className="relative w-full h-3/6 flex justify-start items-center">
          <button onClick={prevSlide} className="absolute left-5 text-4xl">
            &#8249;
          </button>
          <div className="w-10/12 mx-auto h-full overflow-hidden flex justify-center items-start">
            <div
              className="flex transition-transform duration-500 h-full"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {projects.map((project, index) => (
                <a
                  key={index}
                  href={`https://www.${project.link}/`}
                  className="relative w-full flex-shrink-0 h-full"
                >
                  <div className="overflow-hidden h-full w-full">
                    <img
                      src={project.src}
                      alt={project.alt}
                      className="w-full h-auto object-cover"
                      style={{ maxHeight: '100%', objectFit: 'cover' }}
                    />
                  </div>
                  <p className="bg-primary-color px-16 py-4 rounded-full absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 text-4xl font-bold">
                    {project.title}
                  </p>
                </a>
              ))}
            </div>
          </div>

          <button onClick={nextSlide} className="absolute right-5 text-4xl">
            &#8250;
          </button>
        </div>
        <button className="absolute left-1/2 transform -translate-x-1/2 bottom-20 bg-accent-color w-20 h-20 rounded-full opacity-75">
          &#8595;
        </button>
      </section>
    </main>
  )
}
