import Image from 'next/image';
import ReactPlayer from "react-player";

type VideoPlayer = {
    url: string;
}

const VideoPlayer = ({ url }: VideoPlayer) => {

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
