import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuid } from "uuid";
import StarsStyles from "./Stars.module.scss";

interface Props {
    rating: number;
}

const Stars: React.FC<Props> = ({ rating }) => {
    return (
        <div className={StarsStyles.container}>
            <div className={StarsStyles.underlay}>
                {[...Array(5)].map(() => {
                    return <FontAwesomeIcon icon={faStar} className={StarsStyles.star} key={uuid()} />;
                })}
            </div>
            {[...Array(5)].map((_star, index) => {
                if (index < Math.floor(rating)) {
                    return <FontAwesomeIcon icon={faStar} className={StarsStyles.star_filled} key={uuid()} />;
                }
                if (index === Math.floor(rating) && !Number.isInteger(rating)) {
                    return <FontAwesomeIcon icon={faStarHalf} className={StarsStyles.star_filled} key={uuid()} />;
                }
                return <FontAwesomeIcon icon={faStar} className={StarsStyles.star} key={uuid()} />;
            })}
        </div>
    );
};
export default Stars;
