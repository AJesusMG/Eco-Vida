interface ResultsSectionProps {
    id: string;
  }
  
  export default function ResultsCarousel({ id }: ResultsSectionProps) {
    return (
      <div id={id} className="h-full flex flex-col items-center px-4 md:px-8 gap-4 md:gap-8">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black">Resultados</h1>
        <div className="carousel rounded-box h-[450px] w-full">
          <div className="carousel-item object-cover">
            <img src="/R1.jpg" alt="Burger" />
          </div>
          <div className="carousel-item object-cover">
            <img src="/R2.jpg" alt="Burger" />
          </div>
          <div className="carousel-item object-cover">
            <img src="/R3.jpg" alt="Burger" />
          </div>
          <div className="carousel-item object-cover">
            <img src="/R4.jpg" alt="Burger" />
          </div>
          <div className="carousel-item object-cover">
            <img src="/R5.jpg" alt="Burger" />
          </div>
          <div className="carousel-item object-cover">
            <img src="/R6.jpg" alt="Burger" />
          </div>
          <div className="carousel-item object-cover">
            <img src="/R7.jpg" alt="Burger" />
          </div>
          <div className="carousel-item object-cover">
            <img src="/R8.jpg" alt="Burger" />
          </div>
          <div className="carousel-item object-cover">
            <img src="/R9.jpg" alt="Burger" />
          </div>
          <div className="carousel-item object-cover">
            <img src="/R10.jpg" alt="Burger" />
          </div>
        </div>
      </div>
    )
  }