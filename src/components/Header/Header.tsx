/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState } from "react";
import Hamburger from "../Hamburger/Hamburger";
import HeaderStyles from "./Header.module.scss";

const Header: React.FC = () => {
    const [expanded, setExpanded] = useState(false);

    const openMenu = () => {
        setExpanded((prev) => !prev);
    };

    return (
        <header className={HeaderStyles.header}>
            <a href="#" className={HeaderStyles.logo}>
                Wisey
            </a>
            <section className={`${HeaderStyles.content} ${expanded ? HeaderStyles.opened : ""}`}>
                <nav>
                    <ul>
                        <li>
                            <a href="#">Features</a>
                        </li>
                        <li>
                            <a href="#">Pricing</a>
                        </li>
                        <li>
                            <a href="#">Resources</a>
                        </li>
                    </ul>
                </nav>
                <section id={HeaderStyles.auth}>
                    <a href="#">Login</a>
                    <a href="#" className="link_btn">
                        Sign Up
                    </a>
                </section>
            </section>
            <Hamburger className={HeaderStyles.hamburger} expanded={expanded} onClick={openMenu} />
        </header>
    );
};
export default Header;
