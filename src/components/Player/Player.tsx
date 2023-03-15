import PlayerStyles from "./Player.module.scss";

interface Props {
    source: string;
}

const Player: React.FC<Props> = ({ source }) => {
    return <video src={source} className={PlayerStyles.player} controls />;
};
export default Player;
