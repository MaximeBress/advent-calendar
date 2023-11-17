'use client'

import { useState } from "react";

export default function Home() {
  const [boxSelected, setBoxSelected] = useState<BoxItem|undefined>();
  const [modalOpened, setModalOpened] = useState<boolean>(false);
  const [wrongModalOpened, setWrongModalOpened] = useState<boolean>(false);

  const boxItems: BoxItem[] = [
    {
      firstname: 'Nicolas et Alexie',
      image: '/img/picture/baldak-alexie.jpeg',
      illustration: '/img/illustration/red/baldak-alexie.png',
      video: '/video/baldak-alexie.mp4',
    },
    {
      firstname: 'Camille',
      image: '/img/picture/camille.jpg',
      illustration: '/img/illustration/red/camille.png',
      video: '/video/camille.mp4',
    },
    {
      firstname: 'Julie',
      image: '/img/picture/julie.png',
      illustration: '/img/illustration/red/julie.png',
      video: '/video/julie.mp4',
    },
    {
      firstname: 'Maxime',
      image: '/img/picture/maxime.jpeg',
      illustration: '/img/illustration/red/maxime.png',
      video: '/video/maxime.mp4',
    },
    {
      firstname: 'Mehdi',
      image: '/img/picture/mehdi.jpg',
      illustration: '/img/illustration/red/mehdi.png',
      video: '/video/mehdi.mp4',
    },
    {
      firstname: 'Pauline',
      image: '/img/picture/pauline.jpg',
      illustration: '/img/illustration/red/pauline.png',
      video: '/video/pauline.mp4',
    },
    {
      firstname: 'Pierrick',
      image: '/img/picture/pierrick.jpeg',
      illustration: '/img/illustration/red/pierrick.png',
      video: '/video/pierrick.mp4',
    },
    {
      firstname: 'Manon',
      image: '/img/picture/manon.jpg',
      illustration: '/img/illustration/red/manon.png',
      video: '/video/manon.mp4',
    },
    {
      firstname: 'Sabrina',
      image: '/img/picture/sabrina.jpg',
      illustration: '/img/illustration/red/sabrina.png',
      video: '/video/sabrina.mp4',
    },
    {
      firstname: 'Mathieu',
      image: '/img/picture/mathieu.jpg',
      illustration: '/img/illustration/red/mathieu.png',
      video: '/video/mathieu.mp4',
    },
    {
      firstname: 'Alexie',
      image: '/img/picture/alexie.jpg',
      illustration: '/img/illustration/red/alexie.png',
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
        <div className="title">
          <Image src="/img/title.png" alt="title" width={400} height={250} />
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          <h2 className="text-lg md:text-xl">On aurait aimé trouver 30 raisons pour lesquelles on t'aime mais on en a trouvé que 11 ...</h2>
          <h2 className="text-2xl md:text-3xl my-3">Joyeux 30 ans Manon !</h2>
          <h2 className="text-lg md:text-xl">
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
            open={modalOpened}
            onCloseModal={() => setModalOpened(false)}
        >
          {boxSelected?.firstname === 'Alexie' ?
            <Image src={boxSelected.video} alt={boxSelected.firstname} width={500} height={500}/>
            : boxSelected && <VideoPlayer url={boxSelected.video}/>
          }
        </Modal>
      }
      {wrongModalOpened &&
          <Modal
              open={wrongModalOpened}
              onCloseModal={() => setWrongModalOpened(false)}
          >
            <Image src="/img/picture/c-est-non.gif" alt="c'est non" width={350} height={250} className=""/>
          </Modal>
      }
    </>
  )
}

import { Box } from '@/app/components/Box';
import {VideoPlayer} from "@/app/components/VideoPlayer";
import Image from "next/image";
import {Modal} from "@/app/components/Modal";
