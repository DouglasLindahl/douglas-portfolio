export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }
  return (
    <main className="bg-background-color">
      <section className="relative h-screen text-white flex flex-col justify-center items-center gap-4 text-center">
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
        <button className="absolute left-1/2 transform -translate-x-1/2 bottom-20 bg-accent-color w-20 h-20 rounded-full opacity-75">
          v
        </button>
      </section>
      <section className="flex flex-col justify-center items-center gap-4 relative h-screen w-full text-white text-center">
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
          v
        </button>
      </section>
      <section className="relative h-screen w-full text-white flex flex-col justify-start items-center gap-4 text-center">
        <h3 className="text-8xl font-extrabold w-10/12 mx-auto">
          Work Showcase
        </h3>
        <Slider {...settings} className="w-10/12 mx-auto">
          <a href="" className="relative border-2 border-primary-color">
            <img src="timeframe.png" alt="image of timeframe website" />
            <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 text-4xl font-bold">
              Timeframe
            </p>
          </a>
          <a href="" className="relative border-2 border-primary-color">
            <img src="uppsikt.png" alt="image of uppsikt website" />
            <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 text-4xl font-bold">
              Uppsikt
            </p>
          </a>
          <a href="" className="relative border-2 border-primary-color">
            <img src="uppsikt.png" alt="image of uppsikt website" />
            <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 text-4xl font-bold">
              Uppsikt
            </p>
          </a>
          <a href="" className="relative border-2 border-primary-color">
            <img src="uppsikt.png" alt="image of uppsikt website" />
            <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 text-4xl font-bold">
              Uppsikt
            </p>
          </a>
          <a href="" className="relative border-2 border-primary-color">
            <img src="uppsikt.png" alt="image of uppsikt website" />
            <p className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 text-4xl font-bold">
              Uppsikt
            </p>
          </a>
        </Slider>
        <button className="absolute left-1/2 transform -translate-x-1/2 bottom-20 bg-accent-color w-20 h-20 rounded-full opacity-75">
          v
        </button>
      </section>
    </main>
  )
}
