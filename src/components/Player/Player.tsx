import { forwardRef } from "react";
import PlayerStyles from "./Player.module.scss";

interface Props {
    source: string;
    onTimeUpdate: () => void;
    ref: React.Ref<HTMLVideoElement>;
}

const Player: React.FC<Props> = forwardRef(({ source, onTimeUpdate }, ref) => {
    return <video src={source} className={PlayerStyles.player} controls ref={ref} onTimeUpdate={onTimeUpdate} />;
});
Player.displayName = "Player";
export default Player;
