import Image from 'next/image';

type BoxProps = BoxItem & {
  index: number;
  onClick: () => void;
}

const Box = ({ index, firstname, illustration, onClick }: BoxProps) => {
  return (
    <div className={`day day-${index + 1}`}>
        <label>
            <input type="checkbox"/>
            <div className="door">
                <div className="front">{index + 1}</div>
                <div className="back"></div>
            </div>
            <div className="inside bg-white">
                <Image src={illustration} alt={firstname} width={200} height={200} />
            </div>
            <button className="title-container" onClick={onClick}>
                <span>Découvrir</span>
            </button>
        </label>
    </div>
  )
}

export { Box };
