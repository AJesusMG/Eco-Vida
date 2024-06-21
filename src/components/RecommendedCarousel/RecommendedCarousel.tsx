interface RecommendedSectionProps {
  id: string;
}

export default function RecommendedCarousel({ id }: RecommendedSectionProps) {
  return (
    <div id={id} className="h-full flex flex-col items-center px-4 md:px-8 gap-4 md:gap-8">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black">Recomendaciones</h1>
      <div className="carousel rounded-box h-[450px] w-full">
        <div className="carousel-item object-cover">
          <img src="/RE1.jpg" alt="Burger" />
        </div>
        <div className="carousel-item object-cover">
          <img src="/RE2.jpeg" alt="Burger" />
        </div>
        <div className="carousel-item object-cover">
          <img src="/RE3.jpg" alt="Burger" />
        </div>
        <div className="carousel-item object-cover">
          <img src="/RE4.jpg" alt="Burger" />
        </div>
      </div>
    </div>
  )
}