import LayoutStyles from "./Layout.module.scss";

interface Props {
    className?: string;
    children?: React.ReactNode;
}
const Layout: React.FC<Props> = ({ className, children }) => {
    return <section className={`${LayoutStyles.layout} ${className}`}>{children}</section>;
};

export default Layout;
