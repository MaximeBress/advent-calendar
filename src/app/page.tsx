'use client'

import { useState } from "react";
import Modal from "react-modal";

export default function Home() {
  const [boxSelected, setBoxSelected] = useState<BoxItem|undefined>();
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const boxItems: BoxItem[] = [
    {
      firstname: 'Nicolas et Alexie',
      image: '/img/picture.png',
      illustration: '/img/baldak-alexie.png',
      video: '/video/baldak-alexie.mp4',
    },
    {
      firstname: 'Camille',
      image: '/img/picture.png',
      illustration: '/img/camille.png',
      video: '/video/camille.mp4',
    },
    {
      firstname: 'Julie',
      image: '/img/picture.png',
      illustration: '/img/julie.png',
      video: '/video/julie.mp4',
    },
    {
      firstname: 'Mathieu',
      image: '/img/picture.png',
      illustration: '/img/mathieu.png',
      video: '/video/mathieu.mp4',
    },
    {
      firstname: 'Mehdi',
      image: '/img/picture.png',
      illustration: '/img/mehdi.png',
      video: '/video/mehdi.mp4',
    },
    {
      firstname: 'Pauline',
      image: '/img/picture.png',
      illustration: '/img/pauline.png',
      video: '/video/pauline.mp4',
    },
    {
      firstname: 'Pierrick',
      image: '/img/picture.png',
      illustration: '/img/pierrick.png',
      video: '/video/pierrick.mp4',
    },
    {
      firstname: 'Manon',
      image: '/img/picture.png',
      illustration: '/img/manon.png',
      video: '/video/manon.mp4',
    },
    {
      firstname: 'Sabrina',
      image: '/img/picture.png',
      illustration: '/img/sabrina.png',
      video: '/video/sabrina.mp4',
    },
    {
      firstname: 'Maxime',
      image: '/img/picture.png',
      illustration: '/img/maxime.png',
      video: '/video/maxime.mp4',
    }
  ]

    const onBoxClicked = (item: BoxItem) => {
        setBoxSelected(item);
        setModalOpened(true);
    }

  return (
    <>
      <div className="calendar-grid">
        <h1 className="title flex justify-center items-center text-4xl text-cyan-700">Le jeu du calendrier des amis</h1>
          {boxItems.map((item, index) => (
            <Box key={index} {...item} index={index} onClick={() => onBoxClicked(item)} />
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
              <line x1="0" y1="100" x2="100" y2="0" stroke-width="5" stroke="black"/>
              <line x1="0" y1="0" x2="100" y2="100" stroke-width="5" stroke="black"/>
            </svg>
          </button>
          {boxSelected && <VideoPlayer url={boxSelected.video}/>}
        </Modal>
      }
    </>
  )
}

import { Box } from '@/app/components/Box';
import {VideoPlayer} from "@/app/components/VideoPlayer";
