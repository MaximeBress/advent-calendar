import Image from 'next/image';

type BoxProps = BoxItem & {
  index: number;
  onClick: () => void;
}

const Box = ({ index, firstname, image, onClick }: BoxProps) => {
  return (
    <div onClick={onClick} className="cursor-pointer">
      <div className="">
        <h2 className="">{index + 1}</h2>
      </div>
      <div className="">
        <Image src={image} alt={firstname} width={100} height={100} />
        <p className="">{firstname}</p>
      </div>
    </div>
  )
}

export { Box };
