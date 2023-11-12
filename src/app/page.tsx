'use client'

import { useState } from "react";
import Modal from "react-modal";

export default function Home() {
  const [boxSelected, setBoxSelected] = useState<BoxItem|undefined>();
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [wrongModalOpened, setWrongModalOpened] = useState<boolean>(false);

  const boxItems: BoxItem[] = [
    {
      firstname: 'Nicolas et Alexie',
      image: '/img/picture/baldak-alexie.jpeg',
      illustration: '/img/illustration/baldak-alexie.png',
      video: '/video/baldak-alexie.mp4',
    },
    {
      firstname: 'Camille',
      image: '/img/picture/camille.jpg',
      illustration: '/img/illustration/camille.png',
      video: '/video/camille.mp4',
    },
    {
      firstname: 'Julie',
      image: '/img/picture/julie.png',
      illustration: '/img/illustration/julie.png',
      video: '/video/julie.mp4',
    },
    {
      firstname: 'Maxime',
      image: '/img/picture/maxime.jpeg',
      illustration: '/img/illustration/maxime.png',
      video: '/video/maxime.mp4',
    },
    {
      firstname: 'Mehdi',
      image: '/img/picture/mehdi.jpg',
      illustration: '/img/illustration/mehdi.png',
      video: '/video/mehdi.mp4',
    },
    {
      firstname: 'Pauline',
      image: '/img/picture/pauline.jpg',
      illustration: '/img/illustration/pauline.png',
      video: '/video/pauline.mp4',
    },
    {
      firstname: 'Pierrick',
      image: '/img/picture/pierrick.jpeg',
      illustration: '/img/illustration/pierrick.png',
      video: '/video/pierrick.mp4',
    },
    {
      firstname: 'Manon',
      image: '/img/picture/manon.jpg',
      illustration: '/img/illustration/manon.png',
      video: '/video/manon.mp4',
    },
    {
      firstname: 'Sabrina',
      image: '/img/picture/sabrina.jpg',
      illustration: '/img/illustration/sabrina.png',
      video: '/video/sabrina.mp4',
    },
    {
      firstname: 'Mathieu',
      image: '/img/picture/mathieu.jpg',
      illustration: '/img/illustration/mathieu.png',
      video: '/video/mathieu.mp4',
    },
    {
      firstname: 'Alexie',
      image: '/img/picture/alexie.jpg',
      illustration: '/img/illustration/alexie.png',
      video: '/video/alexie.jpg',
    }
  ]

    const onBoxClicked = (item: BoxItem) => {
        setBoxSelected(item);
        setModalOpened(true);
    }

  return (
    <>
      <div className="calendar-grid">
        <div className="title text-red-600">
          <h1>
            Le jeu du calendrier des amis ⛄
          </h1>
          <h2 className="text-xl">
            Derrière chaque case se cache un ami ! Ouvre et découvre un indice pour voir qui se cache derrière 😉
          </h2>
        </div>
          {boxItems.map((item, index) => (
            <Box
              key={index}
              index={index}
              onRightAnswer={() => onBoxClicked(item)}
              onWrongAnswer={() => setWrongModalOpened(true)}
              {...item}
            />
          ))}
      </div>
      {modalOpened &&
        <Modal
          className="h-screen flex items-center justify-center p-2 relative"
          isOpen={modalOpened}
          onRequestClose={() => setModalOpened(false)}
        >
          <button
              className="absolute right-10 top-10"
              onClick={() => setModalOpened(false)}
          >
            <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <line x1="0" y1="100" x2="100" y2="0" strokeWidth="5" stroke="black"/>
              <line x1="0" y1="0" x2="100" y2="100" strokeWidth="5" stroke="black"/>
            </svg>
          </button>
          {boxSelected?.firstname === 'Alexie' ?
            <Image src={boxSelected.video} alt={boxSelected.firstname} width={500} height={500}/>
            : boxSelected && <VideoPlayer url={boxSelected.video}/>
          }
        </Modal>
      }
      {wrongModalOpened &&
          <Modal
              className="h-screen flex"
              isOpen={wrongModalOpened}
              onRequestClose={() => setWrongModalOpened(false)}
          >
            <button
                className="absolute right-10 top-10"
                onClick={() => setWrongModalOpened(false)}
            >
              <svg width="20" height="20" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <line x1="0" y1="100" x2="100" y2="0" strokeWidth="5" stroke="black"/>
                <line x1="0" y1="0" x2="100" y2="100" strokeWidth="5" stroke="black"/>
              </svg>
            </button>
            <div className="relative w-full">
              <Image src="/img/picture/c-est-non.gif" alt="c'est non" width={300} height={300} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"/>
            </div>
          </Modal>
      }
    </>
  )
}

import { Box } from '@/app/components/Box';
import {VideoPlayer} from "@/app/components/VideoPlayer";
import Image from "next/image";
