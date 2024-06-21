import React, { useState, useRef } from "react";
import { Button, Image } from "@nextui-org/react";

const HeroSection: React.FC = () => {
  const [currentVideo, setCurrentVideo] = useState<number>(1);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleVideoEnd = () => {
    if (currentVideo === 1) {
      setCurrentVideo(2);
      if (videoRef.current) {
        videoRef.current.src = "/Video_2.mp4";
        videoRef.current.play();
      }
    } else {
      setCurrentVideo(1);
    }
  };

  const handleButtonClick = () => {
    if (videoRef.current) {
      videoRef.current.src = "/Video_1.mp4";
      videoRef.current.play();
    }
  };

  return (
    <div className="h-screen flex flex-col md:flex-row justify-between items-center px-4 md:px-8 gap-4 md:gap-8">
      <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          ¿Neta qué les <br /> cuesta?
        </h1>
        <h1 className="text-lg md:text-xl lg:text-2xl text-secondary-400">
          Cambiar la rutina y vivir mejor depende de ti.
        </h1>
        <p className="text-sm md:text-base lg:text-lg">
          La pagina no solamente va dirigido a un tema ambiental o de reciclaje como proyecto. <br />
          Si no tambien a la prevencion sobre el uso de sustancias psicoactivas tomando encuestas, videos y recomendaciones.
        </p>
        <div className="flex justify-center md:justify-start mt-4 md:mt-6 lg:mt-8">
          <Button 
            size="lg" 
            className="text-white bg-primary-600 w-3/4 md:w-1/2 lg:w-1/3" 
            endContent={<span className="material-symbols-outlined">video_library</span>}
            onClick={handleButtonClick}>
            Ver videos
          </Button>
        </div>
      </div>
      <div id="image" className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
        <Image
          src="/HeroImage.jpg"
          alt="Picture of the author"
          radius="sm"
        />
      </div>
      <div className="hidden">
        <video ref={videoRef} onEnded={handleVideoEnd} controls className="hidden">
          <source src="/Video_1.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default HeroSection;
