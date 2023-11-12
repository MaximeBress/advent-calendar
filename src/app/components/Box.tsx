import Image from 'next/image';

type BoxProps = BoxItem & {
  index: number;
  onRightAnswer: () => void;
    onWrongAnswer: () => void;
}

const Box = ({ index, firstname, image, illustration, onRightAnswer, onWrongAnswer }: BoxProps) => {
    const options = [
        'Nicolas et Alexie',
        'Camille',
        'Julie',
        'Mathieu',
        'Mehdi',
        'Pauline',
        'Pierrick',
        'Manon',
        'Sabrina',
        'Maxime',
        'Alexie',
    ]

    const handleSubmit = (e: any) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formJson = Object.fromEntries(formData.entries());

        if(formJson.friends === firstname) {
            onRightAnswer();
        } else {
            onWrongAnswer();
        }
    }

  return (
    <div className={`day day-${index + 1}`}>
        <label>
            <input type="checkbox"/>
            <div className="door">
                <div className="front bg-white">
                    <Image src={illustration} alt={firstname} width={200} height={200} />
                </div>
                <div className="back"></div>
            </div>
            <div className="inside bg-gray-600 flex justify-center align-center">
                <div className="w-full relative">
                    <Image src={image} alt={firstname} width={250} height={250} className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2" />
                </div>
            </div>
            <form method="post" onSubmit={handleSubmit} className="title-container flex flex-col gap-4 absolute left-1/2 -translate-x-1/2">
                <select name={`friends`}>
                    {options.map((option, index) => {
                        return <option key={index} value={option}>{option}</option>
                    })}
                </select>
                <button type="submit">Découvrir</button>
            </form>
        </label>
    </div>
  )
}

export { Box };
