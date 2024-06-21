import React, { useRef, useState } from "react";
import {
  Modal,
  ModalContent,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";

export default function ModalVideo() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentVideo, setCurrentVideo] = useState<number>(1);

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

  const handleModalOpen = () => {
    onOpen();
    if (videoRef.current) {
      videoRef.current.src = "/Video_1.mp4";
      videoRef.current.play();
    }
  };

  const handleModalClose = () => {
    onOpenChange();
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
      setCurrentVideo(1);
    }
  };

  return (
    <>
      <Button
        className="bg-primary-500 text-white w-1/2"
        size="lg"
        onClick={handleModalOpen} // Agregar onClick aquí
        endContent={<span className="material-symbols-outlined">video_library</span>}
      >
        Ver videos
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} size="lg">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <video
                  ref={videoRef}
                  onEnded={handleVideoEnd}
                  controls
                  className="w-full"
                >
                  <source src="/Video_1.mp4" type="video/mp4" />
                </video>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
