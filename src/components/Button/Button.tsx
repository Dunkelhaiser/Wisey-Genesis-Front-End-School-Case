import ButtonStyles from "./Button.module.scss";

interface Props {
    type: "button" | "submit" | "reset";
    label: string;
    color?: "primary" | "secondary";
    onClick?: () => void;
}

const Button: React.FC<Props> = ({ type, label, onClick, color = "primary" }) => {
    return (
        <button type={type} className={`${ButtonStyles.button} ${ButtonStyles[color]}`} onClick={onClick}>
            {label}
        </button>
    );
};
export default Button;
