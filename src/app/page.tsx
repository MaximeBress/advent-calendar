'use client'

import { useState } from "react";
import Modal from "react-modal";

export default function Home() {
  const [boxSelected, setBoxSelected] = useState<number|undefined>();
  const [modalOpened, setModalOpened] = useState<boolean>(false);

  const boxItems: BoxItem[] = [
    {
      firstname: 'Jesse',
      image: '/img/picture.png',
      video: '/video/explanation.mp4',
    },
    {
      firstname: 'Marc',
      image: '/img/picture.png',
      video: '/video/explanation.mp4',
    },
    {
      firstname: 'Julio',
      image: '/img/picture.png',
      video: '/video/explanation.mp4',
    }
  ]

    const onBoxClicked = (index: number) => {
        setBoxSelected(index);
        setModalOpened(true);
        console.log(boxItems[boxSelected]);
    }

  return (
      <>
        <div className="text-center m-auto max-w-2xl">
          {boxItems.map((item, index) => (
              <Box key={index} {...item} index={index} onClick={() => onBoxClicked(index)} />
          ))}
        </div>
          {modalOpened &&
              <Modal isOpen={modalOpened} onRequestClose={() => setModalOpened(false)}>
                  {boxSelected && <VideoPlayer url={boxItems[boxSelected].video}/>}
              </Modal>
          }
      </>
)
}

import { Box } from '@/app/components/Box';
import {VideoPlayer} from "@/app/components/VideoPlayer";
