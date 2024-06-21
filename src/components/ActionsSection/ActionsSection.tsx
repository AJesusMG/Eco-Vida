import React, { useState, useRef } from "react";
import { Card, CardHeader, CardFooter, Image, Button, Modal, ModalContent, ModalBody } from "@nextui-org/react";

interface ActionsSectionProps {
  id: string;
}

export default function ActionsSections({ id }: ActionsSectionProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleModalOpen = (src: string) => {
    setIsOpen(true);
    setVideoSrc(src);
  };

  const handleModalClose = () => {
    setIsOpen(false);
    setVideoSrc(null);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div id={id} className="h-full flex flex-col items-center px-4 md:px-8 gap-4 md:gap-8">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black">Acciones</h1>
      <div className="max-w-[900px] gap-2 grid grid-cols-12 grid-rows-2">
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start gap-2">
            <p className="text-tiny text-white/60 uppercase font-bold">¿Qué son las drogas?</p>
            <h4 className="text-white font-medium text-sm">Las sustancias psicoactivas conocidas provocan que adolescentes, jóvenes y adultos pierdan el control sobre sí mismos.</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/IMG1.jpg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button className="text-tiny text-black bg-white" radius="full" size="sm" onClick={() => handleModalOpen("/Video_5.mp4")}>
              Ver Video
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start gap-2">
            <p className="text-tiny text-white/60 uppercase font-bold">Di no a las drogas.</p>
            <h4 className="text-white font-medium text-large">Elige vivir sin límites ni dependencias.</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/IMG2.jpg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button className="text-tiny text-black bg-white" radius="full" size="sm" onClick={() => handleModalOpen("/Video_6.mp4")}>
              Ver Video
            </Button>
          </CardFooter>
        </Card>
        <Card className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Toma el Control.</p>
            <h4 className="text-white font-medium text-large">Di No a las Drogas.</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            className="z-0 w-full h-full object-cover"
            src="/IMG3.jpg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <Button className="text-tiny text-black bg-white" radius="full" size="sm" onClick={() => handleModalOpen("/Video_7.mp4")}>
              Ver Video
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-5">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Libérate del Veneno.</p>
            <h4 className="text-white font-medium text-2xl">Las drogas te atan, la libertad te eleva.</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            className="z-0 w-full h-full object-cover"
            src="/IMG4.jpg"
          />
          <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between">
            <div>
              <p className="text-black text-tiny">Vive Sin Máscaras.</p>
              <p className="text-black text-tiny">Las drogas no definen quién eres.</p>
            </div>
            <Button className="text-tiny text-black bg-white" radius="full" size="sm" onClick={() => handleModalOpen("/Video_3.mp4")}>
              Ver Video
            </Button>
          </CardFooter>
        </Card>
        <Card isFooterBlurred className="w-full h-[300px] col-span-12 sm:col-span-7">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">Fuerza Interior.</p>
            <h4 className="text-white/90 font-medium text-xl"> La verdadera fortaleza viene de adentro.</h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover"
            src="/IMG5.jpg"
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">Luz Propia.</p>
                <p className="text-tiny text-white/60">Las drogas apagan tu luz. Encuentra tu brillo propio.</p>
              </div>
            </div>
            <Button radius="full" size="sm" className="text-black bg-white" onClick={() => handleModalOpen("/Video_4.mp4")}>
              Ver Video
            </Button>
          </CardFooter>
        </Card>
      </div>

      <Modal isOpen={isOpen} onOpenChange={handleModalClose} size="lg">
        <ModalContent>
          <ModalBody>
            {videoSrc && (
              <video ref={videoRef} controls className="w-full">
                <source src={videoSrc} type="video/mp4" />
              </video>
            )}
          </ModalBody>
        </ModalContent>
      </Modal>
    </div>
  );
}
