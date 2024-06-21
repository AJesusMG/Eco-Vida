import { Image } from "@nextui-org/react";
import ModalVideo from "../ModalVideo/ModalVideo";

interface HeroSectionProps {
  id: string;
}

export default function HeroSection({ id }: HeroSectionProps) {
  return (
    <div id={id} className="h-screen flex flex-col md:flex-row justify-between items-center px-4 md:px-8 gap-4 md:gap-8">
      <div className="flex flex-col gap-4 w-full md:w-1/2 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
          ¿Neta qué les <br /> cuesta?
        </h1>
        <h1 className="text-lg md:text-xl lg:text-2xl text-secondary-400">
          Cambiar la rutina y vivir mejor depende de ti.
        </h1>
        <p className="text-sm md:text-base lg:text-lg">
          La página no solamente va dirigida a un tema ambiental o de reciclaje como proyecto. <br />
          Sino también a la prevención sobre el uso de sustancias psicoactivas mediante encuestas, videos y recomendaciones.
        </p>
        <div className="w-full md:w-auto">
          <ModalVideo />
        </div>
      </div>
      <div id="image" className="w-full md:w-1/2 flex justify-center md:justify-end mt-4 md:mt-0">
        <Image
          src="/HeroImage.jpg"
          alt="Picture of the author"
          radius="sm"
        />
      </div>
    </div>
  );
}
