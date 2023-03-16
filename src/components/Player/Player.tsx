import { forwardRef, useEffect, useRef } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Hls from "hls.js/dist/hls.min";
import PlayerStyles from "./Player.module.scss";

interface Props {
    source: string;
    onTimeUpdate: () => void;
    ref: React.Ref<HTMLVideoElement>;
}

const Player: React.FC<Props> = forwardRef(({ source, onTimeUpdate }, ref) => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        let hls: Hls;

        if (Hls.isSupported() && video) {
            hls = new Hls();
            hls.loadSource(source);
            hls.attachMedia(video);
        }
        return () => {
            if (hls) {
                hls.destroy();
            }
        };
    }, [source]);
    return <video className={PlayerStyles.player} controls ref={videoRef} onTimeUpdate={onTimeUpdate} />;
});
Player.displayName = "Player";
export default Player;
