import { forwardRef, useEffect, useRef } from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Hls from "hls.js/dist/hls.min";
import PlayerStyles from "./Player.module.scss";

interface Props {
    source: string;
    preview: string;
}

const Player: React.FC<Props> = forwardRef(({ source, preview }) => {
    const videoRef = useRef<HTMLVideoElement>(null);

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

    useEffect(() => {
        const storedTime = localStorage.getItem(`video_${source}_time`);
        if (storedTime && videoRef.current) {
            videoRef.current.currentTime = Number(storedTime);
        }
    }, [source]);

    const handleTimeUpdate = () => {
        if (videoRef.current) {
            const { currentTime } = videoRef.current;
            localStorage.setItem(`video_${source}_time`, String(currentTime));
            if (currentTime === videoRef.current.duration) {
                localStorage.setItem(`video_${source}_completion`, "true");
            }
        }
    };
    return <video className={PlayerStyles.player} poster={preview} controls ref={videoRef} onTimeUpdate={handleTimeUpdate} />;
});
Player.displayName = "Player";
export default Player;
