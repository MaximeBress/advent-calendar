import Image from 'next/image';
import ReactPlayer from "react-player";

type VideoPlayer = {
    url: string;
}

const VideoPlayer = ({ url }: VideoPlayer) => {
    console.log(url);

    return (
        <ReactPlayer
            playing
            url={[
                {src: url, type: 'video/mp4'},
            ]}
        />
    )
}

export { VideoPlayer };
