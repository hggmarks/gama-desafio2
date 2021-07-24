import React from "react";
import Logo from "../../assets/images/logo.png";

const Header: React.FC = () => {
    return(
        <>
            <header>
                <img src={Logo} alt="Sneake Store Logo" />
            </header>
        </>
    );
}

export default Header;
